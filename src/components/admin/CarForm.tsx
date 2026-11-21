import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { useForm } from 'react-hook-form';

interface CarFormProps {
  car?: any;
  onSubmit: (car: any) => void;
}

interface CarFormData {
  brand: string;
  model: string;
  year: number;
  price: number;
  type: string;
  fuelType: string;
  transmission: string;
  engine: string;
  power: string;
  acceleration: string;
  dimensions: string;
  images: string[];
  features: string[];
  description: string;
  isRecommended: boolean;
}

export const CarForm: React.FC<CarFormProps> = ({ car, onSubmit }) => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<CarFormData>({
    defaultValues: {
      brand: '',
      model: '',
      year: new Date().getFullYear(),
      price: 0,
      type: '轿车',
      fuelType: '汽油',
      transmission: '自动',
      engine: '',
      power: '',
      acceleration: '',
      dimensions: '',
      images: [],
      features: [],
      description: '',
      isRecommended: false,
    },
  });

  useEffect(() => {
    if (car) {
      Object.keys(car).forEach((key) => {
        setValue(key as keyof CarFormData, car[key]);
      });
    }
  }, [car, setValue]);

  const handleFormSubmit = (data: CarFormData) => {
    onSubmit({ ...car, ...data });
  };

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)} className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="brand">品牌</Label>
          <Input id="brand" {...register('brand', { required: '请输入品牌' })} />
          {errors.brand && <p className="text-sm text-red-600">{errors.brand.message}</p>}
        </div>
        <div className="space-y-2">
          <Label htmlFor="model">型号</Label>
          <Input id="model" {...register('model', { required: '请输入型号' })} />
          {errors.model && <p className="text-sm text-red-600">{errors.model.message}</p>}
        </div>
        <div className="space-y-2">
          <Label htmlFor="year">年份</Label>
          <Input id="year" type="number" {...register('year', { required: '请输入年份' })} />
          {errors.year && <p className="text-sm text-red-600">{errors.year.message}</p>}
        </div>
        <div className="space-y-2">
          <Label htmlFor="price">价格</Label>
          <Input id="price" type="number" {...register('price', { required: '请输入价格' })} />
          {errors.price && <p className="text-sm text-red-600">{errors.price.message}</p>}
        </div>
        <div className="space-y-2">
          <Label htmlFor="type">类型</Label>
          <Select {...register('type')}>
            <SelectTrigger>
              <SelectValue placeholder="选择类型" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="轿车">轿车</SelectItem>
              <SelectItem value="SUV">SUV</SelectItem>
              <SelectItem value="跑车">跑车</SelectItem>
              <SelectItem value="MPV">MPV</SelectItem>
              <SelectItem value="新能源">新能源</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2">
          <Label htmlFor="fuelType">燃料类型</Label>
          <Select {...register('fuelType')}>
            <SelectTrigger>
              <SelectValue placeholder="选择燃料类型" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="汽油">汽油</SelectItem>
              <SelectItem value="柴油">柴油</SelectItem>
              <SelectItem value="纯电">纯电</SelectItem>
              <SelectItem value="混动">混动</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2">
          <Label htmlFor="transmission">变速箱</Label>
          <Select {...register('transmission')}>
            <SelectTrigger>
              <SelectValue placeholder="选择变速箱" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="自动">自动</SelectItem>
              <SelectItem value="手动">手动</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2">
          <Label htmlFor="engine">发动机</Label>
          <Input id="engine" {...register('engine')} />
        </div>
        <div className="space-y-2">
          <Label htmlFor="power">马力</Label>
          <Input id="power" {...register('power')} />
        </div>
        <div className="space-y-2">
          <Label htmlFor="acceleration">加速时间</Label>
          <Input id="acceleration" {...register('acceleration')} />
        </div>
        <div className="space-y-2">
          <Label htmlFor="dimensions">尺寸</Label>
          <Input id="dimensions" {...register('dimensions')} />
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="description">描述</Label>
        <Textarea id="description" {...register('description')} rows={4} />
      </div>
      <div className="flex justify-end space-x-4 pt-4">
        <Button type="button" variant="secondary" onClick={() => window.history.back()}>
          取消
        </Button>
        <Button type="submit">
          {car ? '更新' : '添加'}
        </Button>
      </div>
    </form>
  );
};