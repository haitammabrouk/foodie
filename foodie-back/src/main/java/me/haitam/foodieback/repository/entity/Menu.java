package me.haitam.foodieback.repository.entity;

import jakarta.persistence.*;
import me.haitam.foodieback.common.MenuType;

@Entity
@Table(name = "menu")
public class Menu {
    @Id
    @Column(name = "menu_id", nullable = false)
    private String id;

    @Column(name = "name", nullable = false)
    private String name;

    @Column(name = "price", nullable = false)
    private float price;

    @Column(name = "type", nullable = false)
    @Enumerated(EnumType.STRING)
    private MenuType type;

    @Column(name = "imageurl", nullable = false)
    private String imageUrl;

    public Menu(String id, float price, String name, MenuType type, String imageUrl) {
        this.id = id;
        this.price = price;
        this.name = name;
        this.type = type;
        this.imageUrl = imageUrl;
    }

    public Menu() {}

    public String getId() {
        return id;
    }
    public void setId(String id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public float getPrice() {
        return price;
    }

    public void setPrice(float price) {
        this.price = price;
    }

    public MenuType getType() {
        return type;
    }

    public void setType(MenuType type) {
        this.type = type;
    }

    public String getImageUrl() {
        return imageUrl;
    }

    public void setImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
    }
}
