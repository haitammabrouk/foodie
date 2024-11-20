package me.haitam.foodieback.web;

import me.haitam.foodieback.common.API;
import me.haitam.foodieback.common.FoodieCodeResponse;
import me.haitam.foodieback.common.FoodieResponse;
import me.haitam.foodieback.repository.dto.MenuDTO;
import me.haitam.foodieback.service.impl.MenuService;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

@RestController
@RequestMapping(API.MENU_API)
public class MenuController {

    private final MenuService menuService;

    public MenuController(MenuService menuService) {
        this.menuService = menuService;
    }

    @PostMapping(consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public FoodieResponse<MenuDTO> saveMenu(@RequestPart("menu") MenuDTO menuDTO,
                                   @RequestPart("image") MultipartFile image) {
        MenuDTO savedMenu = menuService.saveMenu(menuDTO, image);
        return new FoodieResponse<MenuDTO>(savedMenu, FoodieCodeResponse.ACCEPTED.name());
    }

    @GetMapping(value = "/{menuType}")
    public FoodieResponse<List<MenuDTO>> getMenus(@PathVariable String menuType) {
        List<MenuDTO> menuDTOs = menuService.getMenus(menuType);
        return new FoodieResponse<List<MenuDTO>>(menuDTOs, FoodieCodeResponse.ACCEPTED.name());
    }
}
