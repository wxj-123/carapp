package com.example.carapp.controller;

import com.example.carapp.dto.CarDto;
import com.example.carapp.dto.CarFilterDto;
import com.example.carapp.service.CarService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/cars")
@CrossOrigin(origins = "*")
public class CarController {
    
    @Autowired
    private CarService carService;
    
    // 获取所有汽车列表
    @GetMapping
    public ResponseEntity<List<CarDto>> getAllCars() {
        List<CarDto> cars = carService.getAllCars();
        return ResponseEntity.ok(cars);
    }
    
    // 根据筛选条件获取汽车列表
    @PostMapping("/filter")
    public ResponseEntity<List<CarDto>> getCarsByFilter(@RequestBody CarFilterDto filter) {
        List<CarDto> cars = carService.getCarsByFilter(filter);
        return ResponseEntity.ok(cars);
    }
    
    // 根据ID获取汽车详情
    @GetMapping("/{id}")
    public ResponseEntity<CarDto> getCarById(@PathVariable Long id) {
        CarDto car = carService.getCarById(id);
        if (car != null) {
            return ResponseEntity.ok(car);
        } else {
            return ResponseEntity.notFound().build();
        }
    }
    
    // 获取推荐汽车
    @GetMapping("/recommended")
    public ResponseEntity<List<CarDto>> getRecommendedCars() {
        List<CarDto> cars = carService.getRecommendedCars();
        return ResponseEntity.ok(cars);
    }
    
    // 获取所有品牌
    @GetMapping("/brands")
    public ResponseEntity<List<String>> getAllBrands() {
        List<String> brands = carService.getAllBrands();
        // 添加"全部"选项
        brands.add(0, "全部");
        return ResponseEntity.ok(brands);
    }
    
    // 获取所有车型类型
    @GetMapping("/types")
    public ResponseEntity<List<String>> getAllTypes() {
        List<String> types = carService.getAllTypes();
        // 添加"全部"选项
        types.add(0, "全部");
        return ResponseEntity.ok(types);
    }
    
    // 健康检查接口
    @GetMapping("/health")
    public ResponseEntity<Map<String, String>> health() {
        Map<String, String> response = new HashMap<>();
        response.put("status", "OK");
        response.put("message", "Car App API is running");
        return ResponseEntity.ok(response);
    }
}