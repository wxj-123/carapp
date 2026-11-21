package com.example.carapp.service;

import com.example.carapp.entity.SalesOrder;
import com.example.carapp.repository.SalesOrderRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.time.LocalDateTime;

@Component
public class DataInitializer implements CommandLineRunner {

    private final SalesOrderRepository salesOrderRepository;

    public DataInitializer(SalesOrderRepository salesOrderRepository) {
        this.salesOrderRepository = salesOrderRepository;
    }

    @Override
    public void run(String... args) throws Exception {
        if (salesOrderRepository.count() == 0) {
            LocalDateTime now = LocalDateTime.now();
            
            salesOrderRepository.save(new SalesOrder(
                1L, "轿车", "宝马", "3系", 350000.0, 
                now.minusMonths(5), "张三", "13800138000", "已完成"
            ));
            
            salesOrderRepository.save(new SalesOrder(
                2L, "SUV", "奔驰", "GLC", 450000.0, 
                now.minusMonths(5), "李四", "13900139000", "已完成"
            ));
            
            salesOrderRepository.save(new SalesOrder(
                3L, "新能源", "特斯拉", "Model 3", 280000.0, 
                now.minusMonths(4), "王五", "13700137000", "已完成"
            ));
            
            salesOrderRepository.save(new SalesOrder(
                4L, "轿车", "奥迪", "A4", 320000.0, 
                now.minusMonths(4), "赵六", "13600136000", "已完成"
            ));
            
            salesOrderRepository.save(new SalesOrder(
                5L, "SUV", "宝马", "X5", 550000.0, 
                now.minusMonths(3), "钱七", "13500135000", "已完成"
            ));
            
            salesOrderRepository.save(new SalesOrder(
                6L, "新能源", "比亚迪", "汉", 220000.0, 
                now.minusMonths(3), "孙八", "13400134000", "已完成"
            ));
            
            salesOrderRepository.save(new SalesOrder(
                7L, "轿车", "奔驰", "C级", 380000.0, 
                now.minusMonths(2), "周九", "13300133000", "已完成"
            ));
            
            salesOrderRepository.save(new SalesOrder(
                8L, "SUV", "奥迪", "Q5", 480000.0, 
                now.minusMonths(2), "吴十", "13200132000", "已完成"
            ));
            
            salesOrderRepository.save(new SalesOrder(
                9L, "新能源", "蔚来", "ES6", 420000.0, 
                now.minusMonths(1), "郑十一", "13100131000", "已完成"
            ));
            
            salesOrderRepository.save(new SalesOrder(
                10L, "轿车", "宝马", "5系", 420000.0, 
                now.minusMonths(1), "王十二", "13000130000", "已完成"
            ));
            
            salesOrderRepository.save(new SalesOrder(
                11L, "SUV", "奔驰", "GLE", 650000.0, 
                now.minusMonths(1), "李十三", "12900129000", "已完成"
            ));
            
            salesOrderRepository.save(new SalesOrder(
                12L, "新能源", "特斯拉", "Model Y", 350000.0, 
                now, "张十四", "12800128000", "已完成"
            ));
            
            System.out.println("Sample sales order data initialized successfully!");
        }
    }
}