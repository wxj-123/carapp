import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Search, SlidersHorizontal, ChevronDown, LayoutGrid, List } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { mockCars, brands, types } from '@/data/mockCars';
import { Car } from '@/types/car';

const CarListPage = () => {
  const [selectedBrand, setSelectedBrand] = useState('全部');
  const [selectedType, setSelectedType] = useState('全部');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('default');
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  
  // 图片加载状态管理
  const [imageLoadStates, setImageLoadStates] = useState<Record<string, boolean>>({});
  
  // 备用本地图片URL
  const fallbackImages = {
    car: '/images/placeholder/car-placeholder.svg'
  };

  const handleImageLoad = (imageId: string) => {
    setImageLoadStates(prev => ({ ...prev, [imageId]: true }));
  };

  const handleImageError = (imageId: string) => {
    console.log(`图片加载失败: ${imageId}`);
    setImageLoadStates(prev => ({ ...prev, [imageId]: false }));
  };

  const getImageWithFallback = (originalUrl: string, imageId: string) => {
    const isLoaded = imageLoadStates[imageId];
    if (isLoaded === false) {
      return fallbackImages.car;
    }
    return originalUrl;
  };

  const filteredCars = useMemo(() => {
    return mockCars
      .filter((car) => {
        const matchesSearch = 
          car.model.toLowerCase().includes(searchTerm.toLowerCase()) ||
          car.brand.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesBrand = selectedBrand === '全部' || car.brand === selectedBrand;
        const matchesType = selectedType === '全部' || car.type === selectedType;
        const matchesPrice = 
          (minPrice === '' || car.price >= parseInt(minPrice) * 10000) &&
          (maxPrice === '' || car.price <= parseInt(maxPrice) * 10000);
        
        return matchesSearch && matchesBrand && matchesType && matchesPrice;
      })
      .sort((a, b) => {
        if (sortBy === 'price-asc') return a.price - b.price;
        if (sortBy === 'price-desc') return b.price - a.price;
        return 0;
      });
  }, [searchTerm, selectedBrand, selectedType, sortBy, minPrice, maxPrice]);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col gap-8">
        {/* Header & Search */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">选车中心</h1>
            <p className="text-muted-foreground mt-1">共找到 {filteredCars.length} 款符合条件的车型</p>
          </div>
          
          <div className="flex items-center gap-2 max-w-md w-full">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="搜索车型或品牌..."
                className="pl-10 h-10"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" className="md:hidden">
                  <SlidersHorizontal className="h-4 w-4" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <SheetHeader>
                  <SheetTitle>筛选条件</SheetTitle>
                  <SheetDescription>调整以下参数以缩小搜索范围</SheetDescription>
                </SheetHeader>
                <div className="py-6 space-y-6">
                   <div className="space-y-2">
                      <label className="text-sm font-medium">品牌</label>
                      <Select value={selectedBrand} onValueChange={setSelectedBrand}>
                        <SelectTrigger>
                          <SelectValue placeholder="选择品牌" />
                        </SelectTrigger>
                        <SelectContent>
                          {brands.map(b => <SelectItem key={b} value={b}>{b}</SelectItem>)}
                        </SelectContent>
                      </Select>
                   </div>
                   <div className="space-y-2">
                      <label className="text-sm font-medium">车型</label>
                      <Select value={selectedType} onValueChange={setSelectedType}>
                        <SelectTrigger>
                          <SelectValue placeholder="选择车型" />
                        </SelectTrigger>
                        <SelectContent>
                          {types.map(t => <SelectItem key={t} value={t}>{t}</SelectItem>)}
                        </SelectContent>
                      </Select>
                   </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>

        {/* Filters Desktop & Sorting */}
        <div className="flex flex-col md:flex-row items-start gap-8">
          {/* Sidebar Filter Desktop */}
          <aside className="hidden md:block w-64 space-y-8 shrink-0">
            <div className="space-y-4">
              <h3 className="font-semibold text-lg">品牌</h3>
              <div className="flex flex-wrap gap-2">
                {brands.map((brand) => (
                  <Button
                    key={brand}
                    variant={selectedBrand === brand ? "default" : "outline"}
                    size="sm"
                    className="h-8"
                    onClick={() => setSelectedBrand(brand)}
                  >
                    {brand}
                  </Button>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="font-semibold text-lg">车型</h3>
              <div className="flex flex-col gap-2">
                {types.map((type) => (
                  <div
                    key={type}
                    className={`px-3 py-2 rounded-md cursor-pointer text-sm transition-colors ${
                      selectedType === type ? 'bg-primary text-primary-foreground' : 'hover:bg-muted'
                    }`}
                    onClick={() => setSelectedType(type)}
                  >
                    {type}
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t">
              <Button 
                variant="ghost" 
                className="w-full justify-start text-muted-foreground"
                onClick={() => {
                  setSelectedBrand('全部');
                  setSelectedType('全部');
                  setSearchTerm('');
                }}
              >
                清空所有筛选
              </Button>
            </div>
          </aside>

          {/* Main Content */}
          <div className="flex-1 w-full space-y-6">
            <div className="flex items-center justify-between py-2 border-b">
               <div className="flex items-center gap-4">
                  <span className="text-sm text-muted-foreground">排序方式:</span>
                  <Select value={sortBy} onValueChange={setSortBy}>
                    <SelectTrigger className="w-[140px] border-none bg-transparent h-8 focus:ring-0">
                      <SelectValue placeholder="默认排序" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="default">默认排序</SelectItem>
                      <SelectItem value="price-asc">价格从低到高</SelectItem>
                      <SelectItem value="price-desc">价格从高到低</SelectItem>
                    </SelectContent>
                  </Select>
               </div>
               <div className="flex items-center gap-2">
                  <Button variant="ghost" size="icon" className="h-8 w-8 bg-muted">
                    <LayoutGrid className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="icon" className="h-8 w-8">
                    <List className="h-4 w-4" />
                  </Button>
               </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredCars.length > 0 ? (
                filteredCars.map((car) => (
                  <Card key={car.id} className="group overflow-hidden hover:ring-2 hover:ring-primary/20 transition-all border-none shadow-sm bg-card/50 backdrop-blur">
                    <Link to={`/cars/${car.id}`}>
                      <div className="relative aspect-[16/10] overflow-hidden">
                        <img
                          src={getImageWithFallback(car.images[0], `car-${car.id}`)}
                          alt={car.model}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          onLoad={() => handleImageLoad(`car-${car.id}`)}
                          onError={() => handleImageError(`car-${car.id}`)}
                        />
                        {imageLoadStates[`car-${car.id}`] === false && (
                          <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
                            <div className="text-center">
                              <div className="w-8 h-8 border-2 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto mb-2"></div>
                              <p className="text-xs text-gray-500">使用备用图片</p>
                            </div>
                          </div>
                        )}
                      </div>
                      <CardContent className="p-5">
                        <div className="flex justify-between items-start mb-3">
                          <div>
                            <p className="text-xs font-semibold text-blue-600 uppercase tracking-wider mb-1">
                              {car.brand}
                            </p>
                            <h3 className="text-lg font-bold truncate max-w-[150px]">
                              {car.model}
                            </h3>
                          </div>
                          <p className="text-lg font-bold text-primary">
                            ¥{(car.price / 10000).toFixed(1)}w
                          </p>
                        </div>
                        
                        <div className="grid grid-cols-2 gap-y-2 text-xs text-muted-foreground pt-3 border-t">
                          <div className="flex items-center gap-1.5">
                            <span className="w-1 h-1 rounded-full bg-blue-500" />
                            {car.type}
                          </div>
                          <div className="flex items-center gap-1.5">
                            <span className="w-1 h-1 rounded-full bg-blue-500" />
                            {car.fuelType}
                          </div>
                          <div className="flex items-center gap-1.5">
                            <span className="w-1 h-1 rounded-full bg-blue-500" />
                            {car.transmission}
                          </div>
                          <div className="flex items-center gap-1.5">
                            <span className="w-1 h-1 rounded-full bg-blue-500" />
                            {car.year}款
                          </div>
                        </div>
                        
                        <Button className="w-full mt-5 bg-muted text-foreground hover:bg-primary hover:text-primary-foreground group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                           查看详情
                        </Button>
                      </CardContent>
                    </Link>
                  </Card>
                ))
              ) : (
                <div className="col-span-full py-20 text-center">
                   <p className="text-muted-foreground">暂无符合条件的车型，尝试调整筛选条件。</p>
                   <Button variant="link" onClick={() => {
                     setSelectedBrand('全部');
                     setSelectedType('全部');
                     setSearchTerm('');
                   }}>
                     重置所有条件
                   </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarListPage;
