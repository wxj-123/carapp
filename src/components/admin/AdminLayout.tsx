import React, { ReactNode } from 'react';
import { Link, useLocation, useNavigate, Outlet } from 'react-router-dom';
import { Car, LayoutDashboard, Users, BarChart3, Settings, LogOut } from 'lucide-react';
import { useAdminAuth } from '../../contexts/AdminAuthContext';

interface AdminLayoutProps {
  children?: ReactNode;
}

export const AdminLayout: React.FC<AdminLayoutProps> = ({ children }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const { username, logout } = useAdminAuth();
  
  const navItems = [
    { name: '首页', path: '/', icon: LayoutDashboard },
    { name: '车辆管理', path: '/cars', icon: Car },
    { name: '用户管理', path: '/users', icon: Users },
    { name: '数据统计', path: '/analytics', icon: BarChart3 },
    { name: '系统设置', path: '/settings', icon: Settings },
  ];

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <div className="flex h-screen bg-gray-50">
      {/* 侧边导航 */}
      <div className="w-64 bg-white border-r border-gray-200">
        <div className="h-16 flex items-center justify-center border-b border-gray-200">
          <div className="flex items-center gap-2">
            <Car className="h-8 w-8 text-primary" />
            <h1 className="text-xl font-bold text-gray-900">智行名车汇管理后台</h1>
          </div>
        </div>
        <nav className="mt-6">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center px-4 py-3 text-sm font-medium transition-colors ${
                  location.pathname === item.path
                    ? 'bg-blue-50 text-blue-600'
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                <Icon className="w-5 h-5 mr-3" />
                <span>{item.name}</span>
              </Link>
            );
          })}
        </nav>
        <div className="absolute bottom-0 w-64 p-4 border-t border-gray-200">
          <div className="flex items-center justify-between mb-4 px-4">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
                <span className="text-sm font-medium text-gray-700">{username?.charAt(0).toUpperCase() || 'AD'}</span>
              </div>
              <span className="ml-2 text-sm font-medium text-gray-700">{username || '管理员'}</span>
            </div>
          </div>
          <button 
            className="flex items-center w-full px-4 py-2 text-sm font-medium text-gray-600 hover:bg-gray-50"
            onClick={handleLogout}
          >
            <LogOut className="w-5 h-5 mr-3" />
            <span>退出登录</span>
          </button>
        </div>
      </div>
      {/* 主内容区 */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* 顶部导航 */}
        <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-6">
          <div className="flex items-center">
            <h2 className="text-lg font-medium text-gray-900">
              {navItems.find((item) => location.pathname === item.path)?.name || '首页'}
            </h2>
          </div>
          <div className="flex items-center space-x-4">
            <button className="text-gray-600 hover:text-gray-900">
              <span className="sr-only">通知</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
            </button>
            <div className="flex items-center">
              <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
                <span className="text-sm font-medium text-gray-700">{username?.charAt(0).toUpperCase() || 'AD'}</span>
              </div>
              <span className="ml-2 text-sm font-medium text-gray-700">{username || '管理员'}</span>
            </div>
          </div>
        </header>
        {/* 内容区 */}
        <main className="flex-1 overflow-y-auto p-6">
          {children || <Outlet />}
        </main>
      </div>
    </div>
  );
};