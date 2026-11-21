declare module '@/components/ui/sonner' {
  export const Toaster: React.FC<any>;
}

declare module '@/components/admin/AdminLayout' {
  export const AdminLayout: React.FC<any>;
}

declare module '@/pages/admin/AdminDashboard' {
  const AdminDashboard: React.FC;
  export default AdminDashboard;
}

declare module '@/pages/admin/CarManagement' {
  const CarManagement: React.FC;
  export default CarManagement;
}

declare module '@/pages/admin/UserManagement' {
  const UserManagement: React.FC;
  export default UserManagement;
}

declare module '@/pages/admin/Analytics' {
  const Analytics: React.FC;
  export default Analytics;
}

declare module '@/pages/admin/Settings' {
  const Settings: React.FC;
  export default Settings;
}
