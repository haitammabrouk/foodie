package me.haitam.foodieback.service.impl;

import me.haitam.foodieback.common.MenuType;
import me.haitam.foodieback.mapper.MenuMapper;
import me.haitam.foodieback.repository.api.MenuRepository;
import me.haitam.foodieback.repository.dto.MenuDTO;
import me.haitam.foodieback.repository.entity.Menu;
import me.haitam.foodieback.service.IMenuService;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

@Service
public class MenuService implements IMenuService {

    private final MenuRepository menuRepository;

    private final ImageStorageService service;

    public MenuService(MenuRepository menuRepository, ImageStorageService service) {
        this.menuRepository = menuRepository;
        this.service = service;
    }

    public MenuDTO saveMenu(MenuDTO menuDTO, MultipartFile imageFile)  {
        try {
            Menu menu = MenuMapper.menuMapper.menuDTOToMenu(menuDTO);
            String imageUrl = service.uploadImage(imageFile);
            menu.setImageUrl(imageUrl);
            menu.setId(UUID.randomUUID().toString());
            Menu savedMenu = menuRepository.save(menu);
            return MenuMapper.menuMapper.menuToMenuDTO(savedMenu);
        } catch (Exception ex) {
            throw new RuntimeException(ex);
        }
    }

    public List<MenuDTO> getMenus(String type) {
        MenuType menuType = MenuType.fromType(type.replace("-", " "));
        List<Menu> menus = menuRepository.findByType(menuType);
        List<MenuDTO> menuDTOS = MenuMapper.menuMapper.menusToMenuDTOs(menus);
        return menuDTOS;
    }
}
