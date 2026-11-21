import HomePage from './pages/HomePage.tsx';
import CarListPage from './pages/CarListPage.tsx';
import CarDetailPage from './pages/CarDetailPage.tsx';
import AboutPage from './pages/AboutPage.tsx';
import SamplePage from './pages/SamplePage.tsx';
import ServiceCenterPage from './pages/ServiceCenterPage.tsx';
import CarCategoryPage from './pages/CarCategoryPage.tsx';
import TestDrivePage from './pages/TestDrivePage.tsx';
import ServiceAppointmentPage from './pages/ServiceAppointmentPage.tsx';
import CustomPurchasePage from './pages/CustomPurchasePage.tsx';
import DedicatedAdvisorPage from './pages/DedicatedAdvisorPage.tsx';
import NotFound from './pages/NotFound.tsx';
import type { ReactNode } from 'react';

interface RouteConfig {
  name: string;
  path: string;
  element: ReactNode;
  visible?: boolean;
}

const routes: RouteConfig[] = [
  {
    name: '首页',
    path: '/',
    element: <HomePage />
  },
  {
    name: '选车中心',
    path: '/cars',
    element: <CarListPage />
  },
  {
    name: '车辆详情',
    path: '/cars/:id',
    element: <CarDetailPage />,
    visible: false
  },
  {
    name: '关于我们',
    path: '/about',
    element: <AboutPage />
  },
  {
    name: '示例页面',
    path: '/sample',
    element: <SamplePage />
  },
  {
    name: '服务中心',
    path: '/service',
    element: <ServiceCenterPage />
  },
  {
    name: '车辆分类',
    path: '/categories',
    element: <CarCategoryPage />
  },
  {
    name: '预约试驾',
    path: '/test-drive',
    element: <TestDrivePage />
  },
  {
    name: '服务预约',
    path: '/service-appointment',
    element: <ServiceAppointmentPage />
  },
  {
    name: '定制购车方案',
    path: '/custom-purchase',
    element: <CustomPurchasePage />
  },
  {
    name: '专属顾问',
    path: '/dedicated-advisor',
    element: <DedicatedAdvisorPage />
  },
  {
    name: '404',
    path: '*',
    element: <NotFound />,
    visible: false
  }
];

export default routes;
