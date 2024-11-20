package me.haitam.foodieback.repository.api;

import me.haitam.foodieback.common.MenuType;
import me.haitam.foodieback.repository.entity.Menu;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface MenuRepository extends JpaRepository<Menu, Long> {
    List<Menu> findByType(MenuType type);
}
