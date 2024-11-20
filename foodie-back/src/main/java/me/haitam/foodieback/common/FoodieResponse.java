package me.haitam.foodieback.common;

public class FoodieResponse<T> {
    private T data;
    private String code;

    public FoodieResponse(T data, String code) {
        this.data = data;
        this.code = code;
    }

    public FoodieResponse() {}

    public T getData() {
        return data;
    }

    public String getCode() {
        return code;
    }
}
