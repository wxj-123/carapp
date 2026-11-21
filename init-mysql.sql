-- MySQL数据库初始化脚本
-- 数据库名称: carappdb
-- 版本: 1.0
-- 日期: 2026-02-13

-- 创建数据库（如果不存在）
CREATE DATABASE IF NOT EXISTS carappdb CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- 使用数据库
USE carappdb;

-- 1. 创建cars表
CREATE TABLE IF NOT EXISTS cars (
    id BIGINT NOT NULL AUTO_INCREMENT,
    brand VARCHAR(255) NOT NULL,
    model VARCHAR(255) NOT NULL,
    car_year INT NOT NULL,
    price DOUBLE NOT NULL,
    type VARCHAR(255) NOT NULL,
    fuel_type VARCHAR(255) NOT NULL,
    transmission VARCHAR(255) NOT NULL,
    engine VARCHAR(255) NOT NULL,
    power VARCHAR(255) NOT NULL,
    acceleration VARCHAR(255) NOT NULL,
    dimensions VARCHAR(255) NOT NULL,
    description VARCHAR(1000),
    is_recommended BIT DEFAULT 0,
    PRIMARY KEY (id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- 2. 创建car_images表
CREATE TABLE IF NOT EXISTS car_images (
    id BIGINT NOT NULL AUTO_INCREMENT,
    car_id BIGINT NOT NULL,
    image_url VARCHAR(255) NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (car_id) REFERENCES cars(id) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- 3. 创建car_features表
CREATE TABLE IF NOT EXISTS car_features (
    id BIGINT NOT NULL AUTO_INCREMENT,
    car_id BIGINT NOT NULL,
    feature VARCHAR(255) NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (car_id) REFERENCES cars(id) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- 4. 创建sales_orders表
CREATE TABLE IF NOT EXISTS sales_orders (
    id BIGINT NOT NULL AUTO_INCREMENT,
    car_id BIGINT NOT NULL,
    car_type VARCHAR(255) NOT NULL,
    car_brand VARCHAR(255) NOT NULL,
    car_model VARCHAR(255) NOT NULL,
    price DOUBLE NOT NULL,
    order_date DATETIME(6) NOT NULL,
    customer_name VARCHAR(255) NOT NULL,
    customer_phone VARCHAR(255) NOT NULL,
    status VARCHAR(255) NOT NULL,
    created_at DATETIME(6) NOT NULL,
    updated_at DATETIME(6),
    PRIMARY KEY (id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- 添加索引
CREATE INDEX IF NOT EXISTS idx_cars_type ON cars(type);
CREATE INDEX IF NOT EXISTS idx_cars_brand ON cars(brand);
CREATE INDEX IF NOT EXISTS idx_cars_year ON cars(car_year);
CREATE INDEX IF NOT EXISTS idx_car_images_car_id ON car_images(car_id);
CREATE INDEX IF NOT EXISTS idx_car_features_car_id ON car_features(car_id);
CREATE INDEX IF NOT EXISTS idx_sales_orders_car_id ON sales_orders(car_id);
CREATE INDEX IF NOT EXISTS idx_sales_orders_car_type ON sales_orders(car_type);
CREATE INDEX IF NOT EXISTS idx_sales_orders_order_date ON sales_orders(order_date);
CREATE INDEX IF NOT EXISTS idx_sales_orders_status ON sales_orders(status);

-- 插入测试数据

-- 插入汽车数据
INSERT INTO cars (brand, model, car_year, price, type, fuel_type, transmission, engine, power, acceleration, dimensions, description, is_recommended)
VALUES 
('宝马', '3系', 2024, 350000.0, '轿车', '汽油', '自动', '2.0T', '184马力', '7.3秒', '4709×1827×1459', '豪华中型轿车，操控性极佳', 1),
('奔驰', 'C级', 2024, 380000.0, '轿车', '汽油', '自动', '1.5T', '170马力', '8.2秒', '4784×1822×1456', '豪华中型轿车，舒适性出色', 1),
('奥迪', 'A4L', 2024, 320000.0, '轿车', '汽油', '自动', '2.0T', '190马力', '7.7秒', '4858×1847×1439', '豪华中型轿车，科技感强', 0),
('奔驰', 'GLC', 2024, 450000.0, 'SUV', '汽油', '自动', '2.0T', '197马力', '8.4秒', '4764×1898×1642', '豪华中型SUV，空间宽敞', 1),
('宝马', 'X3', 2024, 420000.0, 'SUV', '汽油', '自动', '2.0T', '184马力', '8.9秒', '4728×1891×1689', '豪华中型SUV，操控性好', 0),
('奥迪', 'Q5L', 2024, 390000.0, 'SUV', '汽油', '自动', '2.0T', '204马力', '8.6秒', '4770×1893×1667', '豪华中型SUV，性价比高', 0),
('特斯拉', 'Model 3', 2024, 280000.0, '新能源', '纯电动', '自动', '电动', '208马力', '6.1秒', '4694×1850×1443', '纯电动轿车，科技感强', 1),
('比亚迪', '汉', 2024, 220000.0, '新能源', '纯电动', '自动', '电动', '204马力', '7.9秒', '4995×1910×1495', '纯电动轿车，性价比高', 1),
('蔚来', 'ES6', 2024, 420000.0, '新能源', '纯电动', '自动', '电动', '245马力', '5.9秒', '4850×1995×1700', '纯电动SUV，服务优秀', 0),
('特斯拉', 'Model Y', 2024, 350000.0, '新能源', '纯电动', '自动', '电动', '208马力', '6.9秒', '4750×1921×1624', '纯电动SUV，空间灵活', 1),
('宝马', '5系', 2024, 480000.0, '轿车', '汽油', '自动', '2.0T', '204马力', '7.5秒', '5087×1868×1500', '豪华中大型轿车，商务首选', 1),
('奔驰', 'E级', 2024, 520000.0, '轿车', '汽油', '自动', '2.0T', '204马力', '7.8秒', '5078×1860×1490', '豪华中大型轿车，舒适性极佳', 0);

-- 插入汽车图片数据
INSERT INTO car_images (car_id, image_url)
VALUES 
(1, 'https://example.com/bmw-3-series-1.jpg'),
(1, 'https://example.com/bmw-3-series-2.jpg'),
(1, 'https://example.com/bmw-3-series-3.jpg'),
(2, 'https://example.com/mercedes-c-class-1.jpg'),
(2, 'https://example.com/mercedes-c-class-2.jpg'),
(3, 'https://example.com/audi-a4l-1.jpg'),
(3, 'https://example.com/audi-a4l-2.jpg'),
(4, 'https://example.com/mercedes-glc-1.jpg'),
(4, 'https://example.com/mercedes-glc-2.jpg'),
(4, 'https://example.com/mercedes-glc-3.jpg'),
(5, 'https://example.com/bmw-x3-1.jpg'),
(5, 'https://example.com/bmw-x3-2.jpg'),
(6, 'https://example.com/audi-q5l-1.jpg'),
(6, 'https://example.com/audi-q5l-2.jpg'),
(7, 'https://example.com/tesla-model3-1.jpg'),
(7, 'https://example.com/tesla-model3-2.jpg'),
(7, 'https://example.com/tesla-model3-3.jpg'),
(8, 'https://example.com/byd-han-1.jpg'),
(8, 'https://example.com/byd-han-2.jpg'),
(9, 'https://example.com/nio-es6-1.jpg'),
(9, 'https://example.com/nio-es6-2.jpg'),
(10, 'https://example.com/tesla-modely-1.jpg'),
(10, 'https://example.com/tesla-modely-2.jpg'),
(11, 'https://example.com/bmw-5-series-1.jpg'),
(11, 'https://example.com/bmw-5-series-2.jpg'),
(12, 'https://example.com/mercedes-e-class-1.jpg'),
(12, 'https://example.com/mercedes-e-class-2.jpg');

-- 插入汽车特性数据
INSERT INTO car_features (car_id, feature)
VALUES 
(1, '全景天窗'),
(1, '自适应巡航'),
(1, '自动泊车'),
(1, '无线充电'),
(1, 'B&O音响'),
(2, '全景天窗'),
(2, '自适应巡航'),
(2, '自动泊车'),
(2, '无线充电'),
(2, '柏林之声'),
(3, '全景天窗'),
(3, '自适应巡航'),
(3, '自动泊车'),
(3, '无线充电'),
(3, 'Bang & Olufsen音响'),
(4, '全景天窗'),
(4, '自适应巡航'),
(4, '自动泊车'),
(4, '无线充电'),
(4, '柏林之声'),
(5, '全景天窗'),
(5, '自适应巡航'),
(5, '自动泊车'),
(5, '无线充电'),
(5, 'Harman Kardon音响'),
(6, '全景天窗'),
(6, '自适应巡航'),
(6, '自动泊车'),
(6, '无线充电'),
(6, 'Bang & Olufsen音响'),
(7, '全景天窗'),
(7, '自适应巡航'),
(7, '自动泊车'),
(7, '无线充电'),
(7, '高级音响系统'),
(8, '全景天窗'),
(8, '自适应巡航'),
(8, '自动泊车'),
(8, '无线充电'),
(8, 'Dirac音响'),
(9, '全景天窗'),
(9, '自适应巡航'),
(9, '自动泊车'),
(9, '无线充电'),
(9, 'NIO音响'),
(10, '全景天窗'),
(10, '自适应巡航'),
(10, '自动泊车'),
(10, '无线充电'),
(10, '高级音响系统'),
(11, '全景天窗'),
(11, '自适应巡航'),
(11, '自动泊车'),
(11, '无线充电'),
(11, 'Harman Kardon音响'),
(12, '全景天窗'),
(12, '自适应巡航'),
(12, '自动泊车'),
(12, '无线充电'),
(12, '柏林之声');

-- 插入销售订单数据
INSERT INTO sales_orders (car_id, car_type, car_brand, car_model, price, order_date, customer_name, customer_phone, status, created_at, updated_at)
VALUES 
(1, '轿车', '宝马', '3系', 350000.0, '2026-02-01 10:00:00', '张三', '13800138000', '已完成', '2026-02-01 10:00:00', '2026-02-01 10:00:00'),
(2, '轿车', '奔驰', 'C级', 380000.0, '2026-02-02 11:30:00', '李四', '13900139000', '已完成', '2026-02-02 11:30:00', '2026-02-02 11:30:00'),
(4, 'SUV', '奔驰', 'GLC', 450000.0, '2026-02-03 14:20:00', '王五', '13700137000', '已完成', '2026-02-03 14:20:00', '2026-02-03 14:20:00'),
(7, '新能源', '特斯拉', 'Model 3', 280000.0, '2026-02-04 09:15:00', '赵六', '13600136000', '已完成', '2026-02-04 09:15:00', '2026-02-04 09:15:00'),
(8, '新能源', '比亚迪', '汉', 220000.0, '2026-02-05 16:45:00', '钱七', '13500135000', '已完成', '2026-02-05 16:45:00', '2026-02-05 16:45:00'),
(10, '新能源', '特斯拉', 'Model Y', 350000.0, '2026-02-06 13:20:00', '孙八', '13400134000', '已完成', '2026-02-06 13:20:00', '2026-02-06 13:20:00'),
(11, '轿车', '宝马', '5系', 480000.0, '2026-02-07 10:50:00', '周九', '13300133000', '已完成', '2026-02-07 10:50:00', '2026-02-07 10:50:00'),
(5, 'SUV', '宝马', 'X3', 420000.0, '2026-02-08 15:10:00', '吴十', '13200132000', '已完成', '2026-02-08 15:10:00', '2026-02-08 15:10:00'),
(6, 'SUV', '奥迪', 'Q5L', 390000.0, '2026-02-09 11:40:00', '郑十一', '13100131000', '已完成', '2026-02-09 11:40:00', '2026-02-09 11:40:00'),
(3, '轿车', '奥迪', 'A4L', 320000.0, '2026-02-10 09:30:00', '王十二', '13000130000', '已完成', '2026-02-10 09:30:00', '2026-02-10 09:30:00'),
(9, '新能源', '蔚来', 'ES6', 420000.0, '2026-02-11 14:50:00', '李十三', '12900129000', '已完成', '2026-02-11 14:50:00', '2026-02-11 14:50:00'),
(12, '轿车', '奔驰', 'E级', 520000.0, '2026-02-12 16:20:00', '张十四', '12800128000', '已完成', '2026-02-12 16:20:00', '2026-02-12 16:20:00');

-- 插入历史销售数据（用于统计）
INSERT INTO sales_orders (car_id, car_type, car_brand, car_model, price, order_date, customer_name, customer_phone, status, created_at, updated_at)
VALUES 
(1, '轿车', '宝马', '3系', 350000.0, '2026-01-01 10:00:00', '历史客户1', '13800138001', '已完成', '2026-01-01 10:00:00', '2026-01-01 10:00:00'),
(2, '轿车', '奔驰', 'C级', 380000.0, '2026-01-02 11:30:00', '历史客户2', '13900139001', '已完成', '2026-01-02 11:30:00', '2026-01-02 11:30:00'),
(4, 'SUV', '奔驰', 'GLC', 450000.0, '2026-01-03 14:20:00', '历史客户3', '13700137001', '已完成', '2026-01-03 14:20:00', '2026-01-03 14:20:00'),
(7, '新能源', '特斯拉', 'Model 3', 280000.0, '2026-01-04 09:15:00', '历史客户4', '13600136001', '已完成', '2026-01-04 09:15:00', '2026-01-04 09:15:00'),
(8, '新能源', '比亚迪', '汉', 220000.0, '2026-01-05 16:45:00', '历史客户5', '13500135001', '已完成', '2026-01-05 16:45:00', '2026-01-05 16:45:00'),
(10, '新能源', '特斯拉', 'Model Y', 350000.0, '2026-01-06 13:20:00', '历史客户6', '13400134001', '已完成', '2026-01-06 13:20:00', '2026-01-06 13:20:00'),
(1, '轿车', '宝马', '3系', 350000.0, '2025-12-01 10:00:00', '历史客户7', '13800138002', '已完成', '2025-12-01 10:00:00', '2025-12-01 10:00:00'),
(2, '轿车', '奔驰', 'C级', 380000.0, '2025-12-02 11:30:00', '历史客户8', '13900139002', '已完成', '2025-12-02 11:30:00', '2025-12-02 11:30:00'),
(4, 'SUV', '奔驰', 'GLC', 450000.0, '2025-12-03 14:20:00', '历史客户9', '13700137002', '已完成', '2025-12-03 14:20:00', '2025-12-03 14:20:00'),
(7, '新能源', '特斯拉', 'Model 3', 280000.0, '2025-12-04 09:15:00', '历史客户10', '13600136002', '已完成', '2025-12-04 09:15:00', '2025-12-04 09:15:00');

-- 执行权限
GRANT ALL PRIVILEGES ON carappdb.* TO 'root'@'localhost';
FLUSH PRIVILEGES;

-- 完成信息
SELECT 'MySQL数据库初始化完成！' AS message;
SELECT '数据库名称: carappdb' AS info;
SELECT CONCAT('汽车数据: ', (SELECT COUNT(*) FROM cars)) AS car_count;
SELECT CONCAT('销售订单数据: ', (SELECT COUNT(*) FROM sales_orders)) AS order_count;
SELECT CONCAT('汽车图片数据: ', (SELECT COUNT(*) FROM car_images)) AS image_count;
SELECT CONCAT('汽车特性数据: ', (SELECT COUNT(*) FROM car_features)) AS feature_count;