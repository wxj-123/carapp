import { Car } from '../types/car';

export const mockCars: Car[] = [
  {
    id: '1',
    brand: '特斯拉',
    model: 'Model S Plaid',
    year: 2024,
    price: 828900,
    type: '新能源',
    fuelType: '纯电',
    transmission: '自动',
    engine: '三电机全轮驱动',
    power: '1020 马力',
    acceleration: '2.1 秒',
    dimensions: '4970 x 1964 x 1445 mm',
    images: [
      'https://miaoda-site-img.cdn.bcebos.com/images/baidu_image_search_cf7f73d6-1f99-45d1-a8b4-679d477c6223.jpg',
      'https://miaoda-site-img.cdn.bcebos.com/images/baidu_image_search_099e478d-053c-44c4-a067-8ec54cf819d4.jpg',
      'https://miaoda-site-img.cdn.bcebos.com/images/baidu_image_search_db455022-3f3a-4db7-a83d-aade176a433c.jpg'
    ],
    features: ['完全自动驾驶能力', '17英寸触摸屏', '全景天窗', '21扬声器高级音响'],
    description: 'Model S Plaid 拥有极其出色的性能和续航表现，是目前世界上加速最快的量产车之一。',
    isRecommended: true
  },
  {
    id: '2',
    brand: '保时捷',
    model: '911 Carrera',
    year: 2024,
    price: 1298000,
    type: '跑车',
    fuelType: '汽油',
    transmission: '自动',
    engine: '3.0T 水平对置六缸',
    power: '385 马力',
    acceleration: '4.2 秒',
    dimensions: '4519 x 1852 x 1298 mm',
    images: [
      'https://miaoda-site-img.cdn.bcebos.com/images/baidu_image_search_e5560833-8f26-48b0-b354-de8385ad8be9.jpg',
      'https://miaoda-site-img.cdn.bcebos.com/images/baidu_image_search_7b7f1f4d-1ff1-4507-8d1c-76c0819c46f0.jpg'
    ],
    features: ['PASM 悬挂系统', '运动排气', '真皮内饰', '矩阵式大灯'],
    description: '永恒的经典设计，无与伦比的驾驶操控，保时捷 911 是每一位驾驶者的梦想。',
    isRecommended: true
  },
  {
    id: '3',
    brand: '奔驰',
    model: 'S级 S 450 L',
    year: 2024,
    price: 1158000,
    type: '轿车',
    fuelType: '混动',
    transmission: '自动',
    engine: '2.5T + 48V 轻混',
    power: '367 马力',
    acceleration: '5.6 秒',
    dimensions: '5290 x 1921 x 1503 mm',
    images: [
      'https://miaoda-site-img.cdn.bcebos.com/images/baidu_image_search_a9e79f00-2187-4a01-8061-734983ee597d.jpg',
      'https://miaoda-site-img.cdn.bcebos.com/images/baidu_image_search_49e45e6a-e100-477c-a0bc-7af96fc1798b.jpg'
    ],
    features: ['柏林之声 4D 音响', '后排独立娱乐系统', '智能魔术车身控制', '裸眼 3D 仪表'],
    description: '奔驰 S 级定义了豪华轿车的标准，为您提供极致的舒适与科技体验。',
    isRecommended: true
  },
  {
    id: '4',
    brand: '宝马',
    model: 'X5 xDrive40Li',
    year: 2024,
    price: 729000,
    type: 'SUV',
    fuelType: '汽油',
    transmission: '自动',
    engine: '3.0T L6',
    power: '381 马力',
    acceleration: '5.5 秒',
    dimensions: '5060 x 2004 x 1776 mm',
    images: [
      'https://miaoda-site-img.cdn.bcebos.com/images/baidu_image_search_71b87409-786c-43b0-b4de-5aa1c360babe.jpg',
      'https://miaoda-site-img.cdn.bcebos.com/images/baidu_image_search_e15281af-2ff9-4cf5-8922-17a668943501.jpg'
    ],
    features: ['空气悬架', '全景星空天窗', '激光大灯', '自动泊车辅助'],
    description: '宝马 X5 将运动性能与豪华 SUV 的多功能性完美融合。',
    isRecommended: false
  },
  {
    id: '5',
    brand: '奥迪',
    model: 'RS 6 Avant',
    year: 2024,
    price: 1453800,
    type: '轿车',
    fuelType: '汽油',
    transmission: '自动',
    engine: '4.0T V8 双增压',
    power: '600 马力',
    acceleration: '3.6 秒',
    dimensions: '4995 x 1951 x 1483 mm',
    images: [
      'https://miaoda-site-img.cdn.bcebos.com/images/baidu_image_search_92c2b69d-0dc3-4376-bd90-2f6c991a70cb.jpg',
      'https://miaoda-site-img.cdn.bcebos.com/images/baidu_image_search_37efb5e8-d7a3-485f-bf43-f9815602df39.jpg'
    ],
    features: ['Quattro 全时四驱', '陶瓷制动系统', 'RS 运动悬架', '瓦罐车顶行李架'],
    description: '地表最强瓦罐，兼具超跑性能与旅行车的实用空间。',
    isRecommended: false
  },
  {
    id: '6',
    brand: '丰田',
    model: '埃尔法',
    year: 2024,
    price: 890000,
    type: 'MPV',
    fuelType: '汽油',
    transmission: '自动',
    engine: '3.5L V6',
    power: '301 马力',
    acceleration: '9.5 秒',
    dimensions: '5015 x 1875 x 1850 mm',
    images: [
      'https://images.unsplash.com/photo-1542362567-b07e54358753?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&h=600&fit=crop'
    ],
    features: ['航空座椅', '电动侧滑门', '全景天窗', '后排娱乐系统'],
    description: '豪华商务MPV的标杆之作，为高端商务人士和家庭用户提供极致舒适的出行体验。',
    isRecommended: true
  },
  {
    id: '7',
    brand: '别克',
    model: 'GL8 陆上公务舱',
    year: 2024,
    price: 289900,
    type: 'MPV',
    fuelType: '汽油',
    transmission: '自动',
    engine: '2.0T 涡轮增压',
    power: '237 马力',
    acceleration: '9.2 秒',
    dimensions: '5219 x 1878 x 1799 mm',
    images: [
      'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1553440569-bcc63803a83d?w=800&h=600&fit=crop'
    ],
    features: ['第二排独立座椅', '智能互联系统', '全景影像', '自动泊车'],
    description: '别克GL8凭借宽敞的空间和舒适的乘坐体验，成为商务接待和家庭出行的理想选择。',
    isRecommended: false
  }
];

export const brands = ['全部', '特斯拉', '保时捷', '奔驰', '宝马', '奥迪', '丰田', '比亚迪'];
export const types = ['全部', '轿车', 'SUV', '跑车', 'MPV', '新能源'];
