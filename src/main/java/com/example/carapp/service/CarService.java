package com.example.carapp.service;

import com.example.carapp.dto.CarDto;
import com.example.carapp.dto.CarFilterDto;
import com.example.carapp.entity.Car;
import com.example.carapp.repository.CarRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class CarService {
    
    @Autowired
    private CarRepository carRepository;
    
    // 获取所有汽车
    public List<CarDto> getAllCars() {
        return carRepository.findAll().stream()
                .map(this::convertToDto)
                .collect(Collectors.toList());
    }
    
    // 根据ID获取汽车详情
    public CarDto getCarById(Long id) {
        return carRepository.findById(id)
                .map(this::convertToDto)
                .orElse(null);
    }
    
    // 根据筛选条件获取汽车列表
    public List<CarDto> getCarsByFilter(CarFilterDto filter) {
        Specification<Car> spec = Specification.where(null);
        
        if (filter.getBrand() != null && !filter.getBrand().equals("全部")) {
            spec = spec.and((root, query, criteriaBuilder) -> 
                criteriaBuilder.equal(root.get("brand"), filter.getBrand()));
        }
        
        if (filter.getType() != null && !filter.getType().equals("全部")) {
            spec = spec.and((root, query, criteriaBuilder) -> 
                criteriaBuilder.equal(root.get("type"), filter.getType()));
        }
        
        if (filter.getMinPrice() != null) {
            spec = spec.and((root, query, criteriaBuilder) -> 
                criteriaBuilder.greaterThanOrEqualTo(root.get("price"), filter.getMinPrice()));
        }
        
        if (filter.getMaxPrice() != null) {
            spec = spec.and((root, query, criteriaBuilder) -> 
                criteriaBuilder.lessThanOrEqualTo(root.get("price"), filter.getMaxPrice()));
        }
        
        if (filter.getFuelType() != null && !filter.getFuelType().equals("全部")) {
            spec = spec.and((root, query, criteriaBuilder) -> 
                criteriaBuilder.equal(root.get("fuelType"), filter.getFuelType()));
        }
        
        if (filter.getSearch() != null && !filter.getSearch().trim().isEmpty()) {
            String search = filter.getSearch().toLowerCase();
            spec = spec.and((root, query, criteriaBuilder) -> 
                criteriaBuilder.or(
                    criteriaBuilder.like(criteriaBuilder.lower(root.get("brand")), "%" + search + "%"),
                    criteriaBuilder.like(criteriaBuilder.lower(root.get("model")), "%" + search + "%")
                ));
        }
        
        List<Car> cars = carRepository.findAll(spec);
        
        // 排序
        switch (filter.getSortBy()) {
            case "price-asc":
                cars.sort((a, b) -> Double.compare(a.getPrice(), b.getPrice()));
                break;
            case "price-desc":
                cars.sort((a, b) -> Double.compare(b.getPrice(), a.getPrice()));
                break;
            default:
                // 默认排序，可以按ID或其他字段排序
                cars.sort((a, b) -> a.getId().compareTo(b.getId()));
                break;
        }
        
        return cars.stream()
                .map(this::convertToDto)
                .collect(Collectors.toList());
    }
    
    // 获取推荐汽车
    public List<CarDto> getRecommendedCars() {
        return carRepository.findByIsRecommendedTrue().stream()
                .map(this::convertToDto)
                .collect(Collectors.toList());
    }
    
    // 获取所有品牌
    public List<String> getAllBrands() {
        return carRepository.findAll().stream()
                .map(Car::getBrand)
                .distinct()
                .sorted()
                .collect(Collectors.toList());
    }
    
    // 获取所有车型类型
    public List<String> getAllTypes() {
        return carRepository.findAll().stream()
                .map(Car::getType)
                .distinct()
                .sorted()
                .collect(Collectors.toList());
    }
    
    // 转换实体到DTO
    private CarDto convertToDto(Car car) {
        return new CarDto(
                car.getId(),
                car.getBrand(),
                car.getModel(),
                car.getYear(),
                car.getPrice(),
                car.getType(),
                car.getFuelType(),
                car.getTransmission(),
                car.getEngine(),
                car.getPower(),
                car.getAcceleration(),
                car.getDimensions(),
                car.getImages(),
                car.getFeatures(),
                car.getDescription(),
                car.getIsRecommended()
        );
    }
}