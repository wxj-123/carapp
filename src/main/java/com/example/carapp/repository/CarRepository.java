package com.example.carapp.repository;

import com.example.carapp.entity.Car;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CarRepository extends JpaRepository<Car, Long>, JpaSpecificationExecutor<Car> {
    
    // 根据品牌查找
    List<Car> findByBrand(String brand);
    
    // 根据类型查找
    List<Car> findByType(String type);
    
    // 根据是否推荐查找
    List<Car> findByIsRecommendedTrue();
    
    // 根据价格范围查找
    List<Car> findByPriceBetween(Double minPrice, Double maxPrice);
    
    // 根据能源类型查找
    List<Car> findByFuelType(String fuelType);
    
    // 根据品牌和型号查找
    List<Car> findByBrandAndModel(String brand, String model);
}