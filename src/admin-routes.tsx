import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AdminLayout } from '@/components/admin/AdminLayout';
import AdminDashboard from '@/pages/admin/AdminDashboard';
import CarManagement from '@/pages/admin/CarManagement';
import UserManagement from '@/pages/admin/UserManagement';
import Analytics from '@/pages/admin/Analytics';
import Settings from '@/pages/admin/Settings';

export default function AdminApp() {
  return (
    <Router>
      <AdminLayout>
        <Routes>
          <Route path="/" element={<AdminDashboard />} />
          <Route path="/cars" element={<CarManagement />} />
          <Route path="/users" element={<UserManagement />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </AdminLayout>
    </Router>
  );
}