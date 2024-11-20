package me.haitam.foodieback.repository.dto;

public class MenuDTO {
    private String id;
    private String name;
    private float price;
    private String type;
    private String imageUrl;

    public MenuDTO(String name, float price, String type, String imageUrl) {
        this.name = name;
        this.price = price;
        this.type = type;
        this.imageUrl = imageUrl;
    }

    public MenuDTO() {}

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

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public float getPrice() {
        return price;
    }

    public void setPrice(float price) {
        this.price = price;
    }

    public String getImageUrl() {
        return imageUrl;
    }

    public void setImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
    }
}
