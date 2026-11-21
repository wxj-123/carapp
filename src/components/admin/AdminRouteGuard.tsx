import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAdminAuth } from '../../contexts/AdminAuthContext';

interface AdminRouteGuardProps {
  requiresAuth?: boolean;
}

export const AdminRouteGuard: React.FC<AdminRouteGuardProps> = ({ requiresAuth = true }) => {
  const { isLoggedIn } = useAdminAuth();

  if (requiresAuth && !isLoggedIn) {
    return <Navigate to="/login" replace />;
  }

  if (!requiresAuth && isLoggedIn) {
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
};