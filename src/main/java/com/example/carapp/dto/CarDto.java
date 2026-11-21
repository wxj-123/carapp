package com.example.carapp.dto;

import java.util.List;

public class CarDto {
    private Long id;
    private String brand;
    private String model;
    private Integer year;
    private Double price;
    private String type;
    private String fuelType;
    private String transmission;
    private String engine;
    private String power;
    private String acceleration;
    private String dimensions;
    private List<String> images;
    private List<String> features;
    private String description;
    private Boolean isRecommended;

    // Constructors
    public CarDto() {}

    public CarDto(Long id, String brand, String model, Integer year, Double price, 
                  String type, String fuelType, String transmission, String engine, 
                  String power, String acceleration, String dimensions, List<String> images, 
                  List<String> features, String description, Boolean isRecommended) {
        this.id = id;
        this.brand = brand;
        this.model = model;
        this.year = year;
        this.price = price;
        this.type = type;
        this.fuelType = fuelType;
        this.transmission = transmission;
        this.engine = engine;
        this.power = power;
        this.acceleration = acceleration;
        this.dimensions = dimensions;
        this.images = images;
        this.features = features;
        this.description = description;
        this.isRecommended = isRecommended;
    }

    // Getters and Setters
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getBrand() {
        return brand;
    }

    public void setBrand(String brand) {
        this.brand = brand;
    }

    public String getModel() {
        return model;
    }

    public void setModel(String model) {
        this.model = model;
    }

    public Integer getYear() {
        return year;
    }

    public void setYear(Integer year) {
        this.year = year;
    }

    public Double getPrice() {
        return price;
    }

    public void setPrice(Double price) {
        this.price = price;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public String getFuelType() {
        return fuelType;
    }

    public void setFuelType(String fuelType) {
        this.fuelType = fuelType;
    }

    public String getTransmission() {
        return transmission;
    }

    public void setTransmission(String transmission) {
        this.transmission = transmission;
    }

    public String getEngine() {
        return engine;
    }

    public void setEngine(String engine) {
        this.engine = engine;
    }

    public String getPower() {
        return power;
    }

    public void setPower(String power) {
        this.power = power;
    }

    public String getAcceleration() {
        return acceleration;
    }

    public void setAcceleration(String acceleration) {
        this.acceleration = acceleration;
    }

    public String getDimensions() {
        return dimensions;
    }

    public void setDimensions(String dimensions) {
        this.dimensions = dimensions;
    }

    public List<String> getImages() {
        return images;
    }

    public void setImages(List<String> images) {
        this.images = images;
    }

    public List<String> getFeatures() {
        return features;
    }

    public void setFeatures(List<String> features) {
        this.features = features;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Boolean getIsRecommended() {
        return isRecommended;
    }

    public void setIsRecommended(Boolean isRecommended) {
        this.isRecommended = isRecommended;
    }
}