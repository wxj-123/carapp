import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Car, 
  Zap, 
  Mountain,
  Users,
  Battery,
  Gauge
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { mockCars } from '@/data/mockCars';

const CarCategoryPage = () => {
  const categories = [
    {
      id: 'luxury',
      name: '豪华轿车',
      icon: Car,
      description: '尊贵舒适，商务出行首选',
      features: ['奢华内饰', '静谧空间', '智能科技'],
      bgColor: 'bg-blue-50',
      textColor: 'text-blue-600'
    },
    {
      id: 'sports',
      name: '运动跑车',
      icon: Gauge,
      description: '极致性能，驾驭激情',
      features: ['强劲动力', '精准操控', '动感设计'],
      bgColor: 'bg-red-50',
      textColor: 'text-red-600'
    },
    {
      id: 'suv',
      name: '全境 SUV',
      icon: Mountain,
      description: '空间宽敞，适应各种路况',
      features: ['高通过性', '大空间', '多功能性'],
      bgColor: 'bg-green-50',
      textColor: 'text-green-600'
    },
    {
      id: 'mpv',
      name: '商务 MPV',
      icon: Users,
      description: '家庭出行，商务接待理想选择',
      features: ['超大空间', '舒适座椅', '实用配置'],
      bgColor: 'bg-purple-50',
      textColor: 'text-purple-600'
    },
    {
      id: 'electric',
      name: '新能源汽车',
      icon: Battery,
      description: '绿色环保，未来出行方式',
      features: ['零排放', '低能耗', '智能互联'],
      bgColor: 'bg-emerald-50',
      textColor: 'text-emerald-600'
    },
    {
      id: 'hybrid',
      name: '混动车型',
      icon: Zap,
      description: '燃油经济性与动力性能的完美平衡',
      features: ['省油环保', '强劲动力', '静音舒适'],
      bgColor: 'bg-amber-50',
      textColor: 'text-amber-600'
    }
  ];

  const getCategoryCars = (categoryId: string) => {
    switch(categoryId) {
      case 'luxury':
        return mockCars.filter(car => car.type === '轿车');
      case 'sports':
        return mockCars.filter(car => car.type === '跑车');
      case 'suv':
        return mockCars.filter(car => car.type === 'SUV');
      case 'mpv':
        return mockCars.filter(car => car.type === 'MPV');
      case 'electric':
        return mockCars.filter(car => car.type === '新能源');
      case 'hybrid':
        return mockCars.filter(car => car.fuelType === '混动');
      default:
        return mockCars.slice(0, 3);
    }
  };

  return (
    <div className="flex flex-col gap-16 py-16">
      {/* Header */}
      <section className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">车辆分类</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          探索不同类型的豪华汽车，找到最适合您需求的理想座驾
        </p>
      </section>

      {/* Category Grid */}
      <section className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category) => {
            const categoryCars = getCategoryCars(category.id);
            return (
              <Card key={category.id} className="overflow-hidden hover:shadow-lg transition-all">
                <div className={`${category.bgColor} p-6 text-center`}>
                  <div className="mx-auto w-16 h-16 rounded-full bg-white flex items-center justify-center mb-4">
                    <category.icon className={`h-8 w-8 ${category.textColor}`} />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{category.name}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{category.description}</p>
                  <div className="flex flex-wrap justify-center gap-2">
                    {category.features.map((feature, i) => (
                      <span 
                        key={i} 
                        className={`text-xs px-2 py-1 rounded-full ${category.bgColor.replace('50', '200')} ${category.textColor.replace('600', '800')}`}
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <h4 className="font-semibold mb-4">热门车型</h4>
                  <div className="space-y-3 mb-6">
                    {categoryCars.slice(0, 2).map((car) => (
                      <div key={car.id} className="flex items-center gap-3">
                        <img 
                          src={car.images[0]} 
                          alt={car.model}
                          className="w-12 h-12 rounded-lg object-cover"
                        />
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium truncate">{car.brand} {car.model}</p>
                          <p className="text-xs text-muted-foreground">¥{(car.price / 10000).toFixed(1)}w起</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <Link to={`/cars?type=${category.id}`}>
                    <Button variant="outline" className="w-full">
                      查看全部车型
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>

      {/* Featured Categories */}
      <section className="bg-muted/30 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">精选推荐</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Luxury Sedans */}
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <Car className="h-6 w-6 text-blue-600" />
                <h3 className="text-2xl font-bold">豪华轿车系列</h3>
              </div>
              <p className="text-muted-foreground">
                专为商务精英和追求品质生活的用户打造，提供无与伦比的舒适性和豪华感。
              </p>
              <div className="grid grid-cols-2 gap-4">
                {mockCars.filter(car => car.type === '轿车').slice(0, 4).map(car => (
                  <div key={car.id} className="bg-white p-4 rounded-lg shadow-sm">
                    <img 
                      src={car.images[0]} 
                      alt={car.model}
                      className="w-full h-24 object-cover rounded-md mb-3"
                    />
                    <p className="text-sm font-medium">{car.brand} {car.model}</p>
                    <p className="text-xs text-muted-foreground">¥{(car.price / 10000).toFixed(1)}w起</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Electric Vehicles */}
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <Battery className="h-6 w-6 text-emerald-600" />
                <h3 className="text-2xl font-bold">新能源系列</h3>
              </div>
              <p className="text-muted-foreground">
                引领未来出行方式，环保节能的同时不妥协性能和豪华体验。
              </p>
              <div className="grid grid-cols-2 gap-4">
                {mockCars.filter(car => car.type === '新能源').map(car => (
                  <div key={car.id} className="bg-white p-4 rounded-lg shadow-sm">
                    <img 
                      src={car.images[0]} 
                      alt={car.model}
                      className="w-full h-24 object-cover rounded-md mb-3"
                    />
                    <p className="text-sm font-medium">{car.brand} {car.model}</p>
                    <p className="text-xs text-muted-foreground">¥{(car.price / 10000).toFixed(1)}w起</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 text-center">
        <div className="bg-gradient-to-r from-primary to-blue-600 rounded-3xl p-12 text-white">
          <h2 className="text-3xl font-bold mb-4">找不到心仪的车型？</h2>
          <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            我们的专业顾问团队可以根据您的具体需求，为您推荐最适合的车型组合
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="secondary" size="lg" className="bg-white text-primary hover:bg-white/90">
              联系专业顾问
            </Button>
            <Button variant="outline" size="lg" className="border-white text-primary hover:bg-white/10" asChild>
              <Link to="/custom-purchase">定制购车方案</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CarCategoryPage;