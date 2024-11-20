package me.haitam.foodieback.mapper;

import me.haitam.foodieback.repository.dto.MenuDTO;
import me.haitam.foodieback.repository.entity.Menu;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.factory.Mappers;

import java.util.List;


@Mapper(componentModel = "spring", imports = {me.haitam.foodieback.common.MenuType.class,
        java.util.UUID.class})
public interface MenuMapper {

    MenuMapper menuMapper = Mappers.getMapper(MenuMapper.class);

    @Mapping(expression = "java(UUID.randomUUID().toString())", target = "id")
    @Mapping(expression = "java(me.haitam.foodieback.common.MenuType.fromType(menuDTO.getType()))", target = "type")
    Menu menuDTOToMenu(MenuDTO menuDTO);

    @Mapping(expression = "java(menu.getType().getType())", target = "type")
    MenuDTO menuToMenuDTO(Menu menu);

    List<MenuDTO> menusToMenuDTOs(List<Menu> menus);
}
