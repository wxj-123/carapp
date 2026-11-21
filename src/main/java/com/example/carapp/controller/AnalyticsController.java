package com.example.carapp.controller;

import com.example.carapp.dto.CarTypeDistributionDto;
import com.example.carapp.dto.SalesTrendDto;
import com.example.carapp.service.AnalyticsService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/analytics")
@CrossOrigin(origins = "*")
public class AnalyticsController {

    private final AnalyticsService analyticsService;

    public AnalyticsController(AnalyticsService analyticsService) {
        this.analyticsService = analyticsService;
    }

    @GetMapping("/sales-trend")
    public ResponseEntity<List<SalesTrendDto>> getSalesTrend() {
        List<SalesTrendDto> salesTrend = analyticsService.getSalesTrend();
        return ResponseEntity.ok(salesTrend);
    }

    @GetMapping("/car-type-distribution")
    public ResponseEntity<List<CarTypeDistributionDto>> getCarTypeDistribution() {
        List<CarTypeDistributionDto> distribution = analyticsService.getCarTypeDistribution();
        return ResponseEntity.ok(distribution);
    }

    @GetMapping("/revenue-trend")
    public ResponseEntity<List<SalesTrendDto>> getRevenueTrend() {
        List<SalesTrendDto> revenueTrend = analyticsService.getRevenueTrend();
        return ResponseEntity.ok(revenueTrend);
    }

    @GetMapping("/overview")
    public ResponseEntity<Map<String, Object>> getOverview() {
        Map<String, Object> overview = new HashMap<>();
        overview.put("totalSales", analyticsService.getTotalSales());
        overview.put("totalRevenue", analyticsService.getTotalRevenue());
        overview.put("salesTrend", analyticsService.getSalesTrend());
        overview.put("carTypeDistribution", analyticsService.getCarTypeDistribution());
        overview.put("revenueTrend", analyticsService.getRevenueTrend());
        return ResponseEntity.ok(overview);
    }
}