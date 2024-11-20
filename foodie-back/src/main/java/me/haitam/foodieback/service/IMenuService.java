package me.haitam.foodieback.service;

import me.haitam.foodieback.repository.dto.MenuDTO;
import me.haitam.foodieback.repository.entity.Menu;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

public interface IMenuService {
    MenuDTO saveMenu(MenuDTO menuDTO, MultipartFile imageFile);
    List<MenuDTO> getMenus(String type);
}
