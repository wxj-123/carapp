# Task: 汽车销售平台开发

## Plan
- [x] 1. 环境配置与样式定义
  - [x] 更新 `index.css` 定义主题色
  - [x] 更新 `tailwind.config.js` 扩展配置
- [x] 2. 数据层建设
  - [x] 定义车辆数据类型 `src/types/car.ts`
  - [x] 创建 Mock 数据 `src/data/mockCars.ts`
- [x] 3. 基础布局与导航
  - [x] 创建 `Layout` 组件
  - [x] 创建 `Navbar` 与 `Footer`
- [x] 4. 页面实现
  - [x] 实现首页 `HomePage` (Hero, Featured Cars, Brands)
  - [x] 实现列表页 `CarListPage` (Filter, Search, Grid)
  - [x] 实现详情页 `CarDetailPage` (Carousel, Specs, Description)
- [x] 5. 路由集成
  - [x] 配置 `src/routes.tsx`
- [x] 6. 图片优化
  - [x] 使用 `image_search` 替换占位图
- [x] 7. 质量检查
  - [x] 运行 `npm run lint`
  - [x] 确保响应式适配

## Notes
- 采用前端纯 Mock 实现，不使用 Supabase。
- 风格：现代、高端、汽车工业感。
