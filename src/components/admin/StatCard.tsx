import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

interface StatCardProps {
  title: string;
  value: string;
  icon: string;
  color: string;
}

export const StatCard: React.FC<StatCardProps> = ({ title, value, icon, color }) => {
  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-gray-500">{title}</p>
            <p className="text-2xl font-bold text-gray-900 mt-1">{value}</p>
          </div>
          <div className={`w-12 h-12 rounded-full ${color} flex items-center justify-center text-2xl`}>
            {icon}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};