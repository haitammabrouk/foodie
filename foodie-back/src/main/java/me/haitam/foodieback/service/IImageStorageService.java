package me.haitam.foodieback.service;

import org.springframework.web.multipart.MultipartFile;

public interface IImageStorageService {
    String uploadImage(MultipartFile file);
    String generateFileName(MultipartFile file);
}
