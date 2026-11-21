import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Toaster } from './src/components/ui/sonner';

import routes from './admin-routes';

import { AdminLayout } from './src/components/admin/AdminLayout';
import { AdminRouteGuard } from './src/components/admin/AdminRouteGuard';
import { AdminAuthProvider } from './src/contexts/AdminAuthContext';

const App: React.FC = () => {
  return (
    <Router>
      <AdminAuthProvider>
        <Routes>
          {/* 登录页面不需要布局 */}
          <Route path="/login" element={routes.find(route => route.path === '/login')?.element} />
          
          {/* 需要认证的路由 */}
          <Route element={<AdminRouteGuard />}>
            <Route element={<AdminLayout />}>
              {routes
                .filter(route => route.path !== '/login' && route.requiresAuth)
                .map((route, index) => (
                  <Route
                    key={index}
                    path={route.path}
                    element={route.element}
                  />
                ))
              }
              <Route path="*" element={<Navigate to="/" replace />} />
            </Route>
          </Route>
        </Routes>
        <Toaster />
      </AdminAuthProvider>
    </Router>
  );
};

export default App;