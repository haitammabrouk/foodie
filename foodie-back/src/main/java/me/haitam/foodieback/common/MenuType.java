package me.haitam.foodieback.common;

public enum MenuType {
    BREAKFAST("breakfast"),
    BURGER("burger"),
    ICE_CREAM("ice cream"),
    PIZZA("pizza"),
    SOUPE("soupe");

    private String type;

    MenuType(String type) {
        this.type = type;
    }

    public String getType() {
        return type;
    }

    public static MenuType fromType(String type) {
        for (MenuType t : MenuType.values()) {
            if (t.type.equals(type)) {
                return t;
            }
        }
        throw new IllegalArgumentException("Invalid menu type: " + type);
    }
}
