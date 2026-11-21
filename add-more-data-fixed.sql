-- MySQL数据库数据添加脚本（修复版）
-- 数据库名称: carappdb
-- 版本: 1.2
-- 日期: 2026-02-13

-- 使用数据库
USE carappdb;

-- 1. 添加更多汽车数据
INSERT INTO cars (brand, model, car_year, price, type, fuel_type, transmission, engine, power, acceleration, dimensions, description, is_recommended)
VALUES 
('宝马', 'X5', 2024, 650000.0, 'SUV', '汽油', '自动', '3.0T', '340马力', '5.5秒', '4922×2004×1745', '豪华中大型SUV，动力强劲', 1),
('奔驰', 'GLE', 2024, 680000.0, 'SUV', '汽油', '自动', '3.0T', '367马力', '5.7秒', '4941×2018×1782', '豪华中大型SUV，舒适性出色', 1),
('奥迪', 'Q7', 2024, 630000.0, 'SUV', '汽油', '自动', '3.0T', '340马力', '5.9秒', '5063×1970×1741', '豪华中大型SUV，空间宽敞', 0),
('宝马', '7系', 2024, 890000.0, '轿车', '汽油', '自动', '3.0T', '340马力', '5.4秒', '5238×1902×1478', '豪华大型轿车，商务首选', 1),
('奔驰', 'S级', 2024, 950000.0, '轿车', '汽油', '自动', '3.0T', '367马力', '5.1秒', '5289×1921×1503', '豪华大型轿车，舒适性极佳', 1),
('奥迪', 'A8L', 2024, 820000.0, '轿车', '汽油', '自动', '3.0T', '340马力', '5.7秒', '5302×1945×1487', '豪华大型轿车，科技感强', 0),
('特斯拉', 'Model S', 2024, 799900.0, '新能源', '纯电动', '自动', '电动', '670马力', '3.2秒', '4979×1964×1445', '纯电动轿车，加速性能出色', 1),
('比亚迪', '唐', 2024, 280000.0, '新能源', '插电混动', '自动', '1.5T+电动', '321马力', '5.9秒', '4870×1950×1725', '插电混动SUV，性价比高', 1),
('蔚来', 'ES8', 2024, 520000.0, '新能源', '纯电动', '自动', '电动', '402马力', '4.9秒', '5099×1989×1750', '纯电动中大型SUV，服务优秀', 0),
('小鹏', 'P7', 2024, 249900.0, '新能源', '纯电动', '自动', '电动', '267马力', '4.1秒', '4880×1896×1450', '纯电动轿车，智能化程度高', 1),
('理想', 'L7', 2024, 319800.0, '新能源', '增程式', '自动', '1.5T+电动', '333马力', '5.8秒', '5050×1995×1750', '增程式SUV，续航里程长', 1),
('极氪', '001', 2024, 299000.0, '新能源', '纯电动', '自动', '电动', '544马力', '3.8秒', '4970×1999×1560', '纯电动轿车，性能出色', 0);

-- 获取新插入汽车的ID
SET @car_x5 = (SELECT id FROM cars WHERE brand = '宝马' AND model = 'X5' LIMIT 1);
SET @car_gle = (SELECT id FROM cars WHERE brand = '奔驰' AND model = 'GLE' LIMIT 1);
SET @car_q7 = (SELECT id FROM cars WHERE brand = '奥迪' AND model = 'Q7' LIMIT 1);
SET @car_7series = (SELECT id FROM cars WHERE brand = '宝马' AND model = '7系' LIMIT 1);
SET @car_sclass = (SELECT id FROM cars WHERE brand = '奔驰' AND model = 'S级' LIMIT 1);
SET @car_a8l = (SELECT id FROM cars WHERE brand = '奥迪' AND model = 'A8L' LIMIT 1);
SET @car_models = (SELECT id FROM cars WHERE brand = '特斯拉' AND model = 'Model S' LIMIT 1);
SET @car_tang = (SELECT id FROM cars WHERE brand = '比亚迪' AND model = '唐' LIMIT 1);
SET @car_es8 = (SELECT id FROM cars WHERE brand = '蔚来' AND model = 'ES8' LIMIT 1);
SET @car_p7 = (SELECT id FROM cars WHERE brand = '小鹏' AND model = 'P7' LIMIT 1);
SET @car_l7 = (SELECT id FROM cars WHERE brand = '理想' AND model = 'L7' LIMIT 1);
SET @car_001 = (SELECT id FROM cars WHERE brand = '极氪' AND model = '001' LIMIT 1);

-- 2. 添加更多汽车图片
INSERT INTO car_images (car_id, image_url)
VALUES 
(@car_x5, 'https://example.com/bmw-x5-1.jpg'),
(@car_x5, 'https://example.com/bmw-x5-2.jpg'),
(@car_x5, 'https://example.com/bmw-x5-3.jpg'),
(@car_gle, 'https://example.com/mercedes-gle-1.jpg'),
(@car_gle, 'https://example.com/mercedes-gle-2.jpg'),
(@car_q7, 'https://example.com/audi-q7-1.jpg'),
(@car_q7, 'https://example.com/audi-q7-2.jpg'),
(@car_7series, 'https://example.com/bmw-7-series-1.jpg'),
(@car_7series, 'https://example.com/bmw-7-series-2.jpg'),
(@car_sclass, 'https://example.com/mercedes-s-class-1.jpg'),
(@car_sclass, 'https://example.com/mercedes-s-class-2.jpg'),
(@car_a8l, 'https://example.com/audi-a8l-1.jpg'),
(@car_a8l, 'https://example.com/audi-a8l-2.jpg'),
(@car_models, 'https://example.com/tesla-model-s-1.jpg'),
(@car_models, 'https://example.com/tesla-model-s-2.jpg'),
(@car_tang, 'https://example.com/byd-tang-1.jpg'),
(@car_tang, 'https://example.com/byd-tang-2.jpg'),
(@car_es8, 'https://example.com/nio-es8-1.jpg'),
(@car_es8, 'https://example.com/nio-es8-2.jpg'),
(@car_p7, 'https://example.com/xiaopeng-p7-1.jpg'),
(@car_p7, 'https://example.com/xiaopeng-p7-2.jpg'),
(@car_l7, 'https://example.com/lixiang-l7-1.jpg'),
(@car_l7, 'https://example.com/lixiang-l7-2.jpg'),
(@car_001, 'https://example.com/zeeker-001-1.jpg'),
(@car_001, 'https://example.com/zeeker-001-2.jpg');

-- 3. 添加更多汽车特性
INSERT INTO car_features (car_id, feature)
VALUES 
(@car_x5, '全景天窗'),
(@car_x5, '自适应巡航'),
(@car_x5, '自动泊车'),
(@car_x5, '无线充电'),
(@car_x5, 'Harman Kardon音响'),
(@car_gle, '全景天窗'),
(@car_gle, '自适应巡航'),
(@car_gle, '自动泊车'),
(@car_gle, '无线充电'),
(@car_gle, '柏林之声'),
(@car_q7, '全景天窗'),
(@car_q7, '自适应巡航'),
(@car_q7, '自动泊车'),
(@car_q7, '无线充电'),
(@car_q7, 'Bang & Olufsen音响'),
(@car_7series, '全景天窗'),
(@car_7series, '自适应巡航'),
(@car_7series, '自动泊车'),
(@car_7series, '无线充电'),
(@car_7series, 'Harman Kardon音响'),
(@car_sclass, '全景天窗'),
(@car_sclass, '自适应巡航'),
(@car_sclass, '自动泊车'),
(@car_sclass, '无线充电'),
(@car_sclass, '柏林之声'),
(@car_a8l, '全景天窗'),
(@car_a8l, '自适应巡航'),
(@car_a8l, '自动泊车'),
(@car_a8l, '无线充电'),
(@car_a8l, 'Bang & Olufsen音响'),
(@car_models, '全景天窗'),
(@car_models, '自适应巡航'),
(@car_models, '自动泊车'),
(@car_models, '无线充电'),
(@car_models, '高级音响系统'),
(@car_tang, '全景天窗'),
(@car_tang, '自适应巡航'),
(@car_tang, '自动泊车'),
(@car_tang, '无线充电'),
(@car_tang, 'Dirac音响'),
(@car_es8, '全景天窗'),
(@car_es8, '自适应巡航'),
(@car_es8, '自动泊车'),
(@car_es8, '无线充电'),
(@car_es8, 'NIO音响'),
(@car_p7, '全景天窗'),
(@car_p7, '自适应巡航'),
(@car_p7, '自动泊车'),
(@car_p7, '无线充电'),
(@car_p7, 'XNGP音响'),
(@car_l7, '全景天窗'),
(@car_l7, '自适应巡航'),
(@car_l7, '自动泊车'),
(@car_l7, '无线充电'),
(@car_l7, 'Li音响'),
(@car_001, '全景天窗'),
(@car_001, '自适应巡航'),
(@car_001, '自动泊车'),
(@car_001, '无线充电'),
(@car_001, 'ZEEKR音响');

-- 4. 添加更多销售订单
INSERT INTO sales_orders (car_id, car_type, car_brand, car_model, price, order_date, customer_name, customer_phone, status, created_at, updated_at)
VALUES 
(@car_x5, 'SUV', '宝马', 'X5', 650000.0, '2026-02-13 10:00:00', '客户15', '13800138015', '已完成', '2026-02-13 10:00:00', '2026-02-13 10:00:00'),
(@car_gle, 'SUV', '奔驰', 'GLE', 680000.0, '2026-02-13 11:30:00', '客户16', '13900139016', '已完成', '2026-02-13 11:30:00', '2026-02-13 11:30:00'),
(@car_q7, 'SUV', '奥迪', 'Q7', 630000.0, '2026-02-13 14:20:00', '客户17', '13700137017', '已完成', '2026-02-13 14:20:00', '2026-02-13 14:20:00'),
(@car_7series, '轿车', '宝马', '7系', 890000.0, '2026-02-14 09:15:00', '客户18', '13600136018', '已完成', '2026-02-14 09:15:00', '2026-02-14 09:15:00'),
(@car_sclass, '轿车', '奔驰', 'S级', 950000.0, '2026-02-14 16:45:00', '客户19', '13500135019', '已完成', '2026-02-14 16:45:00', '2026-02-14 16:45:00'),
(@car_a8l, '轿车', '奥迪', 'A8L', 820000.0, '2026-02-15 13:20:00', '客户20', '13400134020', '已完成', '2026-02-15 13:20:00', '2026-02-15 13:20:00'),
(@car_models, '新能源', '特斯拉', 'Model S', 799900.0, '2026-02-16 10:50:00', '客户21', '13300133021', '已完成', '2026-02-16 10:50:00', '2026-02-16 10:50:00'),
(@car_tang, '新能源', '比亚迪', '唐', 280000.0, '2026-02-16 15:10:00', '客户22', '13200132022', '已完成', '2026-02-16 15:10:00', '2026-02-16 15:10:00'),
(@car_es8, '新能源', '蔚来', 'ES8', 520000.0, '2026-02-17 11:40:00', '客户23', '13100131023', '已完成', '2026-02-17 11:40:00', '2026-02-17 11:40:00'),
(@car_p7, '新能源', '小鹏', 'P7', 249900.0, '2026-02-17 09:30:00', '客户24', '13000130024', '已完成', '2026-02-17 09:30:00', '2026-02-17 09:30:00'),
(@car_l7, '新能源', '理想', 'L7', 319800.0, '2026-02-18 14:50:00', '客户25', '12900129025', '已完成', '2026-02-18 14:50:00', '2026-02-18 14:50:00'),
(@car_001, '新能源', '极氪', '001', 299000.0, '2026-02-18 16:20:00', '客户26', '12800128026', '已完成', '2026-02-18 16:20:00', '2026-02-18 16:20:00'),
(@car_x5, 'SUV', '宝马', 'X5', 650000.0, '2026-02-19 10:00:00', '客户27', '13800138027', '已完成', '2026-02-19 10:00:00', '2026-02-19 10:00:00'),
(@car_gle, 'SUV', '奔驰', 'GLE', 680000.0, '2026-02-19 11:30:00', '客户28', '13900139028', '已完成', '2026-02-19 11:30:00', '2026-02-19 11:30:00'),
(@car_q7, 'SUV', '奥迪', 'Q7', 630000.0, '2026-02-20 14:20:00', '客户29', '13700137029', '已完成', '2026-02-20 14:20:00', '2026-02-20 14:20:00'),
(@car_7series, '轿车', '宝马', '7系', 890000.0, '2026-02-20 09:15:00', '客户30', '13600136030', '已完成', '2026-02-20 09:15:00', '2026-02-20 09:15:00'),
(@car_sclass, '轿车', '奔驰', 'S级', 950000.0, '2026-02-21 16:45:00', '客户31', '13500135031', '已完成', '2026-02-21 16:45:00', '2026-02-21 16:45:00'),
(@car_a8l, '轿车', '奥迪', 'A8L', 820000.0, '2026-02-21 13:20:00', '客户32', '13400134032', '已完成', '2026-02-21 13:20:00', '2026-02-21 13:20:00'),
(@car_models, '新能源', '特斯拉', 'Model S', 799900.0, '2026-02-22 10:50:00', '客户33', '13300133033', '已完成', '2026-02-22 10:50:00', '2026-02-22 10:50:00'),
(@car_tang, '新能源', '比亚迪', '唐', 280000.0, '2026-02-22 15:10:00', '客户34', '13200132034', '已完成', '2026-02-22 15:10:00', '2026-02-22 15:10:00'),
(@car_es8, '新能源', '蔚来', 'ES8', 520000.0, '2026-02-23 11:40:00', '客户35', '13100131035', '已完成', '2026-02-23 11:40:00', '2026-02-23 11:40:00'),
(@car_p7, '新能源', '小鹏', 'P7', 249900.0, '2026-02-23 09:30:00', '客户36', '13000130036', '已完成', '2026-02-23 09:30:00', '2026-02-23 09:30:00'),
(@car_l7, '新能源', '理想', 'L7', 319800.0, '2026-02-24 14:50:00', '客户37', '12900129037', '已完成', '2026-02-24 14:50:00', '2026-02-24 14:50:00'),
(@car_001, '新能源', '极氪', '001', 299000.0, '2026-02-24 16:20:00', '客户38', '12800128038', '已完成', '2026-02-24 16:20:00', '2026-02-24 16:20:00');

-- 5. 添加历史销售数据（用于统计）
INSERT INTO sales_orders (car_id, car_type, car_brand, car_model, price, order_date, customer_name, customer_phone, status, created_at, updated_at)
VALUES 
(@car_x5, 'SUV', '宝马', 'X5', 650000.0, '2026-01-15 10:00:00', '历史客户11', '13800138011', '已完成', '2026-01-15 10:00:00', '2026-01-15 10:00:00'),
(@car_gle, 'SUV', '奔驰', 'GLE', 680000.0, '2026-01-16 11:30:00', '历史客户12', '13900139012', '已完成', '2026-01-16 11:30:00', '2026-01-16 11:30:00'),
(@car_q7, 'SUV', '奥迪', 'Q7', 630000.0, '2026-01-17 14:20:00', '历史客户13', '13700137013', '已完成', '2026-01-17 14:20:00', '2026-01-17 14:20:00'),
(@car_7series, '轿车', '宝马', '7系', 890000.0, '2026-01-18 09:15:00', '历史客户14', '13600136014', '已完成', '2026-01-18 09:15:00', '2026-01-18 09:15:00'),
(@car_sclass, '轿车', '奔驰', 'S级', 950000.0, '2026-01-19 16:45:00', '历史客户15', '13500135015', '已完成', '2026-01-19 16:45:00', '2026-01-19 16:45:00'),
(@car_a8l, '轿车', '奥迪', 'A8L', 820000.0, '2026-01-20 13:20:00', '历史客户16', '13400134016', '已完成', '2026-01-20 13:20:00', '2026-01-20 13:20:00'),
(@car_models, '新能源', '特斯拉', 'Model S', 799900.0, '2026-01-21 10:50:00', '历史客户17', '13300133017', '已完成', '2026-01-21 10:50:00', '2026-01-21 10:50:00'),
(@car_tang, '新能源', '比亚迪', '唐', 280000.0, '2026-01-22 15:10:00', '历史客户18', '13200132018', '已完成', '2026-01-22 15:10:00', '2026-01-22 15:10:00'),
(@car_es8, '新能源', '蔚来', 'ES8', 520000.0, '2026-01-23 11:40:00', '历史客户19', '13100131019', '已完成', '2026-01-23 11:40:00', '2026-01-23 11:40:00'),
(@car_p7, '新能源', '小鹏', 'P7', 249900.0, '2026-01-24 09:30:00', '历史客户20', '13000130020', '已完成', '2026-01-24 09:30:00', '2026-01-24 09:30:00'),
(@car_l7, '新能源', '理想', 'L7', 319800.0, '2026-01-25 14:50:00', '历史客户21', '12900129021', '已完成', '2026-01-25 14:50:00', '2026-01-25 14:50:00'),
(@car_001, '新能源', '极氪', '001', 299000.0, '2026-01-26 16:20:00', '历史客户22', '12800128022', '已完成', '2026-01-26 16:20:00', '2026-01-26 16:20:00');

-- 6. 添加进行中状态的订单（使用现有汽车ID）
SET @car_3series = (SELECT id FROM cars WHERE brand = '宝马' AND model = '3系' LIMIT 1);
SET @car_glc = (SELECT id FROM cars WHERE brand = '奔驰' AND model = 'GLC' LIMIT 1);
SET @car_model3 = (SELECT id FROM cars WHERE brand = '特斯拉' AND model = 'Model 3' LIMIT 1);

INSERT INTO sales_orders (car_id, car_type, car_brand, car_model, price, order_date, customer_name, customer_phone, status, created_at, updated_at)
VALUES 
(@car_3series, '轿车', '宝马', '3系', 350000.0, '2026-02-24 10:00:00', '潜在客户1', '13800138050', '处理中', '2026-02-24 10:00:00', '2026-02-24 10:00:00'),
(@car_glc, 'SUV', '奔驰', 'GLC', 450000.0, '2026-02-24 11:30:00', '潜在客户2', '13900139051', '待付款', '2026-02-24 11:30:00', '2026-02-24 11:30:00'),
(@car_model3, '新能源', '特斯拉', 'Model 3', 280000.0, '2026-02-24 14:20:00', '潜在客户3', '13700137052', '已下单', '2026-02-24 14:20:00', '2026-02-24 14:20:00'),
(@car_x5, 'SUV', '宝马', 'X5', 650000.0, '2026-02-24 09:15:00', '潜在客户4', '13600136053', '处理中', '2026-02-24 09:15:00', '2026-02-24 09:15:00'),
(@car_models, '新能源', '特斯拉', 'Model S', 799900.0, '2026-02-24 16:45:00', '潜在客户5', '13500135054', '待付款', '2026-02-24 16:45:00', '2026-02-24 16:45:00');

-- 7. 添加不同状态的订单（用于测试状态筛选）
SET @car_cclass = (SELECT id FROM cars WHERE brand = '奔驰' AND model = 'C级' LIMIT 1);
SET @car_a4l = (SELECT id FROM cars WHERE brand = '奥迪' AND model = 'A4L' LIMIT 1);
SET @car_x3 = (SELECT id FROM cars WHERE brand = '宝马' AND model = 'X3' LIMIT 1);
SET @car_q5l = (SELECT id FROM cars WHERE brand = '奥迪' AND model = 'Q5L' LIMIT 1);
SET @car_han = (SELECT id FROM cars WHERE brand = '比亚迪' AND model = '汉' LIMIT 1);

INSERT INTO sales_orders (car_id, car_type, car_brand, car_model, price, order_date, customer_name, customer_phone, status, created_at, updated_at)
VALUES 
(@car_cclass, '轿车', '奔驰', 'C级', 380000.0, '2026-02-20 10:00:00', '状态测试客户1', '13800138060', '已取消', '2026-02-20 10:00:00', '2026-02-20 10:00:00'),
(@car_a4l, '轿车', '奥迪', 'A4L', 320000.0, '2026-02-21 11:30:00', '状态测试客户2', '13900139061', '退款中', '2026-02-21 11:30:00', '2026-02-21 11:30:00'),
(@car_x3, 'SUV', '宝马', 'X3', 420000.0, '2026-02-22 14:20:00', '状态测试客户3', '13700137062', '已完成', '2026-02-22 14:20:00', '2026-02-22 14:20:00'),
(@car_q5l, 'SUV', '奥迪', 'Q5L', 390000.0, '2026-02-23 09:15:00', '状态测试客户4', '13600136063', '处理中', '2026-02-23 09:15:00', '2026-02-23 09:15:00'),
(@car_han, '新能源', '比亚迪', '汉', 220000.0, '2026-02-23 16:45:00', '状态测试客户5', '13500135064', '待付款', '2026-02-23 16:45:00', '2026-02-23 16:45:00');

-- 执行完成信息
SELECT '数据库数据添加完成！' AS message;
SELECT CONCAT('新增汽车数据: ', 12) AS new_car_count;
SELECT CONCAT('新增销售订单: ', 44) AS new_order_count;
SELECT CONCAT('新增汽车图片: ', 24) AS new_image_count;
SELECT CONCAT('新增汽车特性: ', 60) AS new_feature_count;
SELECT CONCAT('总计汽车数据: ', (SELECT COUNT(*) FROM cars)) AS total_car_count;
SELECT CONCAT('总计销售订单: ', (SELECT COUNT(*) FROM sales_orders)) AS total_order_count;
SELECT CONCAT('总计汽车图片: ', (SELECT COUNT(*) FROM car_images)) AS total_image_count;
SELECT CONCAT('总计汽车特性: ', (SELECT COUNT(*) FROM car_features)) AS total_feature_count;
SELECT CONCAT('已完成订单: ', (SELECT COUNT(*) FROM sales_orders WHERE status = '已完成')) AS completed_order_count;
SELECT CONCAT('进行中订单: ', (SELECT COUNT(*) FROM sales_orders WHERE status != '已完成')) AS pending_order_count;
