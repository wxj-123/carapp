package com.example.carapp.dto;

public class SalesTrendDto {
    private String name;
    private Integer sales;
    private Double revenue;

    public SalesTrendDto() {}

    public SalesTrendDto(String name, Integer sales, Double revenue) {
        this.name = name;
        this.sales = sales;
        this.revenue = revenue;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Integer getSales() {
        return sales;
    }

    public void setSales(Integer sales) {
        this.sales = sales;
    }

    public Double getRevenue() {
        return revenue;
    }

    public void setRevenue(Double revenue) {
        this.revenue = revenue;
    }
}