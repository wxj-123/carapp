package com.example.carapp.service;

import com.example.carapp.dto.CarTypeDistributionDto;
import com.example.carapp.dto.SalesTrendDto;
import com.example.carapp.repository.SalesOrderRepository;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Service
public class AnalyticsService {

    private final SalesOrderRepository salesOrderRepository;

    public AnalyticsService(SalesOrderRepository salesOrderRepository) {
        this.salesOrderRepository = salesOrderRepository;
    }

    public List<SalesTrendDto> getSalesTrend() {
        LocalDateTime startDate = LocalDateTime.now().minusMonths(6);
        List<Object[]> results = salesOrderRepository.findSalesTrendByDateRange(startDate);
        
        List<SalesTrendDto> trendList = new ArrayList<>();
        for (Object[] result : results) {
            String month = (String) result[0];
            Long sales = (Long) result[1];
            Double revenue = (Double) result[2];
            trendList.add(new SalesTrendDto(month, sales.intValue(), revenue));
        }
        
        return trendList;
    }

    public List<CarTypeDistributionDto> getCarTypeDistribution() {
        List<Object[]> results = salesOrderRepository.findCarTypeDistribution();
        
        List<CarTypeDistributionDto> distributionList = new ArrayList<>();
        for (Object[] result : results) {
            String carType = (String) result[0];
            Long count = (Long) result[1];
            distributionList.add(new CarTypeDistributionDto(carType, count.intValue()));
        }
        
        return distributionList;
    }

    public List<SalesTrendDto> getRevenueTrend() {
        return getSalesTrend();
    }

    public Long getTotalSales() {
        LocalDateTime startDate = LocalDateTime.now().minusMonths(6);
        return salesOrderRepository.countOrdersByDateRange(startDate);
    }

    public Double getTotalRevenue() {
        LocalDateTime startDate = LocalDateTime.now().minusMonths(6);
        Double revenue = salesOrderRepository.sumRevenueByDateRange(startDate);
        return revenue != null ? revenue : 0.0;
    }
}