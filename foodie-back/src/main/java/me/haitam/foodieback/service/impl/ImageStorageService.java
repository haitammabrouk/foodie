package me.haitam.foodieback.service.impl;

import io.minio.MinioClient;
import io.minio.PutObjectArgs;
import me.haitam.foodieback.service.IImageStorageService;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.InputStream;
import java.util.Date;
import java.util.Objects;

@Service
public class ImageStorageService implements IImageStorageService {

    private final MinioClient minioClient;

    public ImageStorageService(MinioClient minioClient) {
        this.minioClient = minioClient;
    }

    @Value("${minio.bucket.name}")
    private String bucketName;

    @Value("${minio.url}")
    private String minioUrl;

    public String uploadImage(MultipartFile file) {
        String fileName = generateFileName(file);
        try (InputStream is = file.getInputStream()) {
            minioClient.putObject(
                    PutObjectArgs.builder()
                            .bucket(bucketName)
                            .object(fileName).stream(is, file.getSize(), -1)
                            .contentType(file.getContentType())
                            .build()
            );
            return minioUrl + "/" + bucketName + "/" + fileName;
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }

    public String generateFileName(MultipartFile file) {
        return new Date().getTime() + "-" + Objects.requireNonNull(file.getOriginalFilename()).replace(" ", "_");
    }
}
