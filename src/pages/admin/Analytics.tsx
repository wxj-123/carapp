import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card';
import { BarChart, Bar, LineChart, Line, PieChart, Pie, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Cell } from 'recharts';

interface SalesTrendData {
  name: string;
  sales: number;
  revenue: number;
}

interface CarTypeData {
  name: string;
  value: number;
}

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8'];

const Analytics: React.FC = () => {
  const [salesData, setSalesData] = useState<SalesTrendData[]>([]);
  const [carTypeData, setCarTypeData] = useState<CarTypeData[]>([]);
  const [revenueData, setRevenueData] = useState<SalesTrendData[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchAnalyticsData();
  }, []);

  const fetchAnalyticsData = async () => {
    try {
      setLoading(true);
      
      const [salesResponse, carTypeResponse, revenueResponse] = await Promise.all([
        fetch('http://localhost:8081/api/analytics/sales-trend'),
        fetch('http://localhost:8081/api/analytics/car-type-distribution'),
        fetch('http://localhost:8081/api/analytics/revenue-trend')
      ]);

      const sales = await salesResponse.json();
      const carTypes = await carTypeResponse.json();
      const revenue = await revenueResponse.json();

      setSalesData(sales);
      setCarTypeData(carTypes);
      setRevenueData(revenue);
    } catch (error) {
      console.error('Failed to fetch analytics data:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="text-lg">加载中...</div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h1 className="text-2xl font-bold text-gray-900">数据统计</h1>
        <p className="text-gray-600">查看平台的数据分析和统计信息</p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* 销售趋势图表 */}
        <Card>
          <CardHeader>
            <CardTitle>销售趋势</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={salesData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="sales" name="销量" fill="#3b82f6" />
                  <Bar dataKey="revenue" name="收入" fill="#10b981" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
        
        {/* 车型分布图表 */}
        <Card>
          <CardHeader>
            <CardTitle>车型分布</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={carTypeData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    outerRadius={100}
                    fill="#8884d8"
                    dataKey="value"
                    label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                  >
                    {carTypeData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
        
        {/* 收入趋势图表 */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>收入趋势</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={revenueData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="revenue" name="收入" stroke="#8884d8" strokeWidth={2} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Analytics;