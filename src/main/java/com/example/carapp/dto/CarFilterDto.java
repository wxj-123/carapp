package com.example.carapp.dto;

public class CarFilterDto {
    private String brand;
    private String type;
    private Double minPrice;
    private Double maxPrice;
    private String fuelType;
    private String search;
    private String sortBy = "default"; // default, price-asc, price-desc

    // Constructors
    public CarFilterDto() {}

    public CarFilterDto(String brand, String type, Double minPrice, Double maxPrice, 
                        String fuelType, String search, String sortBy) {
        this.brand = brand;
        this.type = type;
        this.minPrice = minPrice;
        this.maxPrice = maxPrice;
        this.fuelType = fuelType;
        this.search = search;
        this.sortBy = sortBy;
    }

    // Getters and Setters
    public String getBrand() {
        return brand;
    }

    public void setBrand(String brand) {
        this.brand = brand;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public Double getMinPrice() {
        return minPrice;
    }

    public void setMinPrice(Double minPrice) {
        this.minPrice = minPrice;
    }

    public Double getMaxPrice() {
        return maxPrice;
    }

    public void setMaxPrice(Double maxPrice) {
        this.maxPrice = maxPrice;
    }

    public String getFuelType() {
        return fuelType;
    }

    public void setFuelType(String fuelType) {
        this.fuelType = fuelType;
    }

    public String getSearch() {
        return search;
    }

    public void setSearch(String search) {
        this.search = search;
    }

    public String getSortBy() {
        return sortBy;
    }

    public void setSortBy(String sortBy) {
        this.sortBy = sortBy;
    }
}