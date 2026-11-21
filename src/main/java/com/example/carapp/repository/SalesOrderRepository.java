package com.example.carapp.repository;

import com.example.carapp.entity.SalesOrder;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.time.LocalDateTime;
import java.util.List;

@Repository
public interface SalesOrderRepository extends JpaRepository<SalesOrder, Long> {

    @Query("SELECT FUNCTION('DATE_FORMAT', so.orderDate, '%Y-%m'), " +
           "COUNT(so), " +
           "SUM(so.price) " +
           "FROM SalesOrder so " +
           "WHERE so.orderDate >= :startDate " +
           "GROUP BY FUNCTION('DATE_FORMAT', so.orderDate, '%Y-%m') " +
           "ORDER BY FUNCTION('DATE_FORMAT', so.orderDate, '%Y-%m')")
    List<Object[]> findSalesTrendByDateRange(LocalDateTime startDate);

    @Query("SELECT so.carType, " +
           "COUNT(so) " +
           "FROM SalesOrder so " +
           "GROUP BY so.carType " +
           "ORDER BY COUNT(so) DESC")
    List<Object[]> findCarTypeDistribution();

    @Query("SELECT COUNT(so) FROM SalesOrder so WHERE so.orderDate >= :startDate")
    Long countOrdersByDateRange(LocalDateTime startDate);

    @Query("SELECT SUM(so.price) FROM SalesOrder so WHERE so.orderDate >= :startDate")
    Double sumRevenueByDateRange(LocalDateTime startDate);
}