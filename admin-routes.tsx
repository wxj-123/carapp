import AdminDashboard from './src/pages/admin/AdminDashboard';
import CarManagement from './src/pages/admin/CarManagement';
import UserManagement from './src/pages/admin/UserManagement';
import Analytics from './src/pages/admin/Analytics';
import Settings from './src/pages/admin/Settings';
import LoginPage from './src/pages/admin/LoginPage';
import type { ReactNode } from 'react';

interface RouteConfig {
  name: string;
  path: string;
  element: ReactNode;
  visible?: boolean;
  requiresAuth?: boolean;
}

const routes: RouteConfig[] = [
  { name: '登录', path: '/login', element: <LoginPage />, visible: false, requiresAuth: false },
  { name: '首页', path: '/', element: <AdminDashboard />, requiresAuth: true },
  { name: '车辆管理', path: '/cars', element: <CarManagement />, requiresAuth: true },
  { name: '用户管理', path: '/users', element: <UserManagement />, requiresAuth: true },
  { name: '数据统计', path: '/analytics', element: <Analytics />, requiresAuth: true },
  { name: '系统设置', path: '/settings', element: <Settings />, requiresAuth: true }
];

export default routes;