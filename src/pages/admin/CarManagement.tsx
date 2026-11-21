import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { DataTable } from '../../components/admin/DataTable';
import { CarForm } from '../../components/admin/CarForm';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '../../components/ui/dialog';
import { Plus, Edit, Trash2 } from 'lucide-react';

// Mock数据
const mockCars = [
  { id: 1, brand: '特斯拉', model: 'Model S Plaid', year: 2024, price: 828900, type: '新能源', fuelType: '纯电' },
  { id: 2, brand: '保时捷', model: '911 Carrera', year: 2024, price: 1298000, type: '跑车', fuelType: '汽油' },
  { id: 3, brand: '奔驰', model: 'S级 S 450 L', year: 2024, price: 1158000, type: '轿车', fuelType: '混动' },
  { id: 4, brand: '宝马', model: 'X5 xDrive40Li', year: 2024, price: 729000, type: 'SUV', fuelType: '汽油' },
  { id: 5, brand: '奥迪', model: 'RS 6 Avant', year: 2024, price: 1453800, type: '轿车', fuelType: '汽油' },
];

const CarManagement: React.FC = () => {
  const [cars, setCars] = useState(mockCars);
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [selectedCar, setSelectedCar] = useState<any>(null);

  const handleAddCar = (car: any) => {
    const newCar = {
      id: cars.length + 1,
      ...car
    };
    setCars([...cars, newCar]);
    setIsAddDialogOpen(false);
  };

  const handleEditCar = (updatedCar: any) => {
    setCars(cars.map(car => 
      car.id === updatedCar.id ? updatedCar : car
    ));
    setIsEditDialogOpen(false);
    setSelectedCar(null);
  };

  const handleDeleteCar = (id: number) => {
    setCars(cars.filter(car => car.id !== id));
  };

  const columns = [
    { key: 'id', label: 'ID' },
    { key: 'brand', label: '品牌' },
    { key: 'model', label: '型号' },
    { key: 'year', label: '年份' },
    { key: 'price', label: '价格', formatter: (value: number) => `¥${value.toLocaleString()}` },
    { key: 'type', label: '类型' },
    { key: 'fuelType', label: '燃料类型' },
    { 
      key: 'actions', 
      label: '操作', 
      render: (car: any) => (
        <div className="flex space-x-2">
          <Button 
            size="sm" 
            variant="secondary" 
            onClick={() => {
              setSelectedCar(car);
              setIsEditDialogOpen(true);
            }}
          >
            <Edit className="w-4 h-4 mr-1" />
            编辑
          </Button>
          <Button 
            size="sm" 
            variant="destructive" 
            onClick={() => handleDeleteCar(car.id)}
          >
            <Trash2 className="w-4 h-4 mr-1" />
            删除
          </Button>
        </div>
      )
    }
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">车辆管理</h1>
          <p className="text-gray-600">管理平台上的所有车辆信息</p>
        </div>
        <Button onClick={() => setIsAddDialogOpen(true)}>
          <Plus className="w-4 h-4 mr-2" />
          添加车辆
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>车辆列表</CardTitle>
        </CardHeader>
        <CardContent>
          <DataTable columns={columns} data={cars} />
        </CardContent>
      </Card>

      {/* 添加车辆对话框 */}
      <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
        <DialogTrigger asChild>
          <Button className="hidden">添加车辆</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[600px]">
          <DialogHeader>
            <DialogTitle>添加车辆</DialogTitle>
          </DialogHeader>
          <CarForm onSubmit={handleAddCar} />
        </DialogContent>
      </Dialog>

      {/* 编辑车辆对话框 */}
      <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
        <DialogTrigger asChild>
          <Button className="hidden">编辑车辆</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[600px]">
          <DialogHeader>
            <DialogTitle>编辑车辆</DialogTitle>
          </DialogHeader>
          {selectedCar && (
            <CarForm 
              car={selectedCar} 
              onSubmit={handleEditCar} 
            />
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default CarManagement;