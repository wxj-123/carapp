export interface Car {
  id: string;
  brand: string;
  model: string;
  year: number;
  price: number;
  type: '轿车' | 'SUV' | '跑车' | 'MPV' | '新能源';
  fuelType: '汽油' | '柴油' | '纯电' | '混动';
  transmission: '自动' | '手动';
  engine: string;
  power: string;
  acceleration: string; // 0-100km/h
  dimensions: string; // L x W x H
  images: string[];
  features: string[];
  description: string;
  isRecommended?: boolean;
}

export type CarFilter = {
  brand?: string;
  type?: string;
  minPrice?: number;
  maxPrice?: number;
  fuelType?: string;
  search?: string;
};
