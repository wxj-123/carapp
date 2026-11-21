package com.example.carapp.controller;

import com.example.carapp.entity.Car;
import com.example.carapp.repository.CarRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.*;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/admin")
@CrossOrigin(origins = "*")
public class AdminController {
    
    @Autowired
    private CarRepository carRepository;
    
    // 获取车辆列表（分页）
    @GetMapping("/cars")
    public ResponseEntity<Map<String, Object>> getCars(
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "10") int size,
            @RequestParam(defaultValue = "id") String sortBy,
            @RequestParam(defaultValue = "asc") String sortDir,
            @RequestParam(required = false) String search,
            @RequestParam(required = false) String brand,
            @RequestParam(required = false) String type
    ) {
        try {
            Sort sort = sortDir.equals("desc") ? Sort.by(sortBy).descending() : Sort.by(sortBy).ascending();
            Pageable pageable = PageRequest.of(page, size, sort);
            
            Page<Car> carPage;
            
            if (search != null && !search.trim().isEmpty()) {
                String searchLower = search.toLowerCase().trim();
                // 简化搜索逻辑
                List<Car> allCars = carRepository.findAll();
                List<Car> filteredCars = allCars.stream()
                    .filter(car -> car.getBrand().toLowerCase().contains(searchLower) || 
                           car.getModel().toLowerCase().contains(searchLower))
                    .collect(Collectors.toList());
                // 手动分页
                int start = Math.min(page * size, filteredCars.size());
                int end = Math.min((page + 1) * size, filteredCars.size());
                List<Car> pagedCars = filteredCars.subList(start, end);
                carPage = new org.springframework.data.domain.PageImpl<>(pagedCars, pageable, filteredCars.size());
            } else {
                carPage = carRepository.findAll(pageable);
            }
            
            Map<String, Object> response = new HashMap<>();
            response.put("content", carPage.getContent());
            response.put("page", page);
            response.put("size", size);
            response.put("totalElements", carPage.getTotalElements());
            response.put("totalPages", carPage.getTotalPages());
            response.put("first", carPage.isFirst());
            response.put("last", carPage.isLast());
            
            return ResponseEntity.ok(response);
            
        } catch (Exception e) {
            Map<String, Object> error = new HashMap<>();
            error.put("error", e.getMessage());
            return ResponseEntity.status(500).body(error);
        }
    }
    
    // 获取车辆详情
    @GetMapping("/cars/{id}")
    public ResponseEntity<Car> getCar(@PathVariable Long id) {
        Optional<Car> car = carRepository.findById(id);
        return car.map(ResponseEntity::ok).orElse(ResponseEntity.notFound().build());
    }
    
    // 创建车辆
    @PostMapping("/cars")
    public ResponseEntity<Car> createCar(@RequestBody Car car) {
        try {
            Car savedCar = carRepository.save(car);
            return ResponseEntity.ok(savedCar);
        } catch (Exception e) {
            return ResponseEntity.status(500).build();
        }
    }
    
    // 更新车辆
    @PutMapping("/cars/{id}")
    public ResponseEntity<Car> updateCar(@PathVariable Long id, @RequestBody Car carDetails) {
        Optional<Car> carOptional = carRepository.findById(id);
        if (carOptional.isPresent()) {
            Car car = carOptional.get();
            car.setBrand(carDetails.getBrand());
            car.setModel(carDetails.getModel());
            car.setYear(carDetails.getYear());
            car.setPrice(carDetails.getPrice());
            car.setType(carDetails.getType());
            car.setFuelType(carDetails.getFuelType());
            car.setTransmission(carDetails.getTransmission());
            car.setEngine(carDetails.getEngine());
            car.setPower(carDetails.getPower());
            car.setAcceleration(carDetails.getAcceleration());
            car.setDimensions(carDetails.getDimensions());
            car.setImages(carDetails.getImages());
            car.setFeatures(carDetails.getFeatures());
            car.setDescription(carDetails.getDescription());
            car.setIsRecommended(carDetails.getIsRecommended());
            
            Car updatedCar = carRepository.save(car);
            return ResponseEntity.ok(updatedCar);
        } else {
            return ResponseEntity.notFound().build();
        }
    }
    
    // 删除车辆
    @DeleteMapping("/cars/{id}")
    public ResponseEntity<Map<String, String>> deleteCar(@PathVariable Long id) {
        try {
            if (carRepository.existsById(id)) {
                carRepository.deleteById(id);
                Map<String, String> response = new HashMap<>();
                response.put("message", "车辆删除成功");
                return ResponseEntity.ok(response);
            } else {
                Map<String, String> response = new HashMap<>();
                response.put("error", "车辆不存在");
                return ResponseEntity.status(404).body(response);
            }
        } catch (Exception e) {
            Map<String, String> response = new HashMap<>();
            response.put("error", "删除失败: " + e.getMessage());
            return ResponseEntity.status(500).body(response);
        }
    }
    
    // 批量删除车辆
    @DeleteMapping("/cars/batch")
    public ResponseEntity<Map<String, String>> deleteCarsBatch(@RequestBody List<Long> ids) {
        try {
            carRepository.deleteAllById(ids);
            Map<String, String> response = new HashMap<>();
            response.put("message", "批量删除成功，共删除 " + ids.size() + " 条记录");
            return ResponseEntity.ok(response);
        } catch (Exception e) {
            Map<String, String> response = new HashMap<>();
            response.put("error", "批量删除失败: " + e.getMessage());
            return ResponseEntity.status(500).body(response);
        }
    }
    
    // 获取品牌统计
    @GetMapping("/stats/brands")
    public ResponseEntity<List<Map<String, Object>>> getBrandStats() {
        try {
            List<Car> allCars = carRepository.findAll();
            Map<String, Long> brandCountMap = allCars.stream()
                .collect(Collectors.groupingBy(Car::getBrand, Collectors.counting()));
            
            List<Map<String, Object>> results = brandCountMap.entrySet().stream()
                .map(entry -> {
                    Map<String, Object> map = new HashMap<>();
                    map.put("brand", entry.getKey());
                    map.put("count", entry.getValue());
                    return map;
                })
                .collect(Collectors.toList());
            
            return ResponseEntity.ok(results);
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.status(500).build();
        }
    }
    
    // 获取类型统计
    @GetMapping("/stats/types")
    public ResponseEntity<List<Map<String, Object>>> getTypeStats() {
        try {
            List<Car> allCars = carRepository.findAll();
            Map<String, Long> typeCountMap = allCars.stream()
                .collect(Collectors.groupingBy(Car::getType, Collectors.counting()));
            
            List<Map<String, Object>> results = typeCountMap.entrySet().stream()
                .map(entry -> {
                    Map<String, Object> map = new HashMap<>();
                    map.put("type", entry.getKey());
                    map.put("count", entry.getValue());
                    return map;
                })
                .collect(Collectors.toList());
            
            return ResponseEntity.ok(results);
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.status(500).build();
        }
    }
    
    // 测试接口
    @GetMapping("/test")
    public ResponseEntity<String> test() {
        return ResponseEntity.ok("Admin API is working!");
    }
    
    // 获取数据统计
    @GetMapping("/stats")
    public ResponseEntity<Map<String, Object>> getStats() {
        try {
            System.out.println("Getting stats...");
            long count = carRepository.count();
            System.out.println("Car count: " + count);
            
            Map<String, Object> stats = new HashMap<>();
            stats.put("totalCars", count);
            stats.put("recommendedCars", carRepository.findByIsRecommendedTrue().size());
            stats.put("brands", carRepository.findAll().stream().map(Car::getBrand).distinct().count());
            stats.put("types", carRepository.findAll().stream().map(Car::getType).distinct().count());
            stats.put("avgPrice", carRepository.findAll().stream().mapToDouble(Car::getPrice).average().orElse(0.0));
            return ResponseEntity.ok(stats);
        } catch (Exception e) {
            e.printStackTrace();
            Map<String, Object> error = new HashMap<>();
            error.put("error", e.getMessage());
            return ResponseEntity.status(500).body(error);
        }
    }
    
    // 获取所有品牌（用于筛选）
    @GetMapping("/brands")
    public ResponseEntity<List<String>> getAllBrands() {
        List<String> brands = carRepository.findAll().stream()
            .map(Car::getBrand)
            .distinct()
            .sorted()
            .collect(Collectors.toList());
        return ResponseEntity.ok(brands);
    }
    
    // 获取所有类型（用于筛选）
    @GetMapping("/types")
    public ResponseEntity<List<String>> getAllTypes() {
        List<String> types = carRepository.findAll().stream()
            .map(Car::getType)
            .distinct()
            .sorted()
            .collect(Collectors.toList());
        return ResponseEntity.ok(types);
    }
}