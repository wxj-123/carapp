import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { StatCard } from '../../components/admin/StatCard';

// Mock数据
const salesData = [
  { name: '1月', sales: 1200 },
  { name: '2月', sales: 1900 },
  { name: '3月', sales: 1500 },
  { name: '4月', sales: 2100 },
  { name: '5月', sales: 1800 },
  { name: '6月', sales: 2500 },
];

const AdminDashboard: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h1 className="text-2xl font-bold text-gray-900">首页</h1>
        <p className="text-gray-600">欢迎回来，管理员！这里是您的系统概览。</p>
      </div>
      
      {/* 统计卡片 */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard title="总车辆数" value="128" icon="🚗" color="bg-blue-100 text-blue-600" />
        <StatCard title="总用户数" value="2,543" icon="👥" color="bg-green-100 text-green-600" />
        <StatCard title="本月销量" value="42" icon="📊" color="bg-purple-100 text-purple-600" />
        <StatCard title="总收入" value="¥1,245,000" icon="💰" color="bg-yellow-100 text-yellow-600" />
      </div>
      
      {/* 销售图表 */}
      <Card>
        <CardHeader>
          <CardTitle>半年销售趋势</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={salesData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="sales" fill="#3b82f6" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
      
      {/* 最近活动 */}
      <Card>
        <CardHeader>
          <CardTitle>最近活动</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 rounded-full bg-green-500 mt-2" />
              <div>
                <p className="text-sm font-medium text-gray-900">新用户注册</p>
                <p className="text-xs text-gray-500">张三 10分钟前</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 rounded-full bg-blue-500 mt-2" />
              <div>
                <p className="text-sm font-medium text-gray-900">车辆信息更新</p>
                <p className="text-xs text-gray-500">管理员 30分钟前</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 rounded-full bg-purple-500 mt-2" />
              <div>
                <p className="text-sm font-medium text-gray-900">预约试驾</p>
                <p className="text-xs text-gray-500">李四 1小时前</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 rounded-full bg-yellow-500 mt-2" />
              <div>
                <p className="text-sm font-medium text-gray-900">服务预约</p>
                <p className="text-xs text-gray-500">王五 2小时前</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminDashboard;