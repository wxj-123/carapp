import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck, Zap, Award, Gauge, Settings } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { mockCars } from '@/data/mockCars';

const HomePage = () => {
  const recommendedCars = mockCars.filter(car => car.isRecommended);
  const [imageLoadStates, setImageLoadStates] = useState<Record<string, boolean>>({});

  // 备用本地图片URL
  const fallbackImages = {
    hero: '/images/placeholder/hero-car.svg',
    car: '/images/placeholder/car-placeholder.svg'
  };

  const handleImageLoad = (imageId: string) => {
    setImageLoadStates(prev => ({ ...prev, [imageId]: true }));
  };

  const handleImageError = (imageId: string, fallbackUrl?: string) => {
    console.log(`图片加载失败: ${imageId}`, fallbackUrl);
    setImageLoadStates(prev => ({ ...prev, [imageId]: false }));
  };

  // 生成备用图片URL
  const getImageWithFallback = (originalUrl: string, imageId: string, type: 'hero' | 'car' = 'car') => {
    const isLoaded = imageLoadStates[imageId];
    if (isLoaded === false) {
      // 如果已知加载失败，直接使用备用图片
      return fallbackImages[type] || originalUrl;
    }
    return originalUrl;
  };

  return (
    <div className="flex flex-col gap-16 pb-16">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden bg-slate-900 text-white">
        <div className="absolute inset-0 z-0">
          <img
            src={getImageWithFallback("https://miaoda-site-img.cdn.bcebos.com/images/baidu_image_search_477eb2f8-29cc-4b16-87bd-c48508f0403a.jpg", 'hero', 'hero')}
            alt="Hero Car"
            className="w-full h-full object-cover opacity-60"
            onLoad={() => handleImageLoad('hero')}
            onError={() => handleImageError('hero', fallbackImages.hero)}
          />
          {imageLoadStates['hero'] === false && (
            <div className="absolute inset-0 bg-gradient-to-r from-slate-900 to-slate-800 flex items-center justify-center">
              <div className="text-center">
                <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                <p className="text-slate-300">正在尝试备用图片...</p>
              </div>
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/40 to-transparent" />
        </div>
        
        <div className="container relative z-10 mx-auto px-4">
          <div className="max-w-2xl space-y-6">
            <Badge variant="secondary" className="bg-blue-600 text-white border-none px-4 py-1">
              2026 年度新款上市
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-tight">
              开启您的<br />
              <span className="text-blue-500">非凡驾驶</span>之旅
            </h1>
            <p className="text-lg md:text-xl text-slate-300 max-w-lg">
              探索顶级豪华车型，体验最前沿的汽车科技。从经典跑车到纯电未来，您的理想座驾就在这里。
            </p>
            <div className="flex gap-4 pt-4">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 h-12 px-8" asChild>
                <Link to="/cars">立即选车</Link>
              </Button>
              <Button size="lg" variant="secondary" className="h-12 px-8 bg-slate-800/50 text-slate-100 border border-slate-700 hover:bg-slate-700/50 transition-colors" asChild>
                <Link to="/about">了解更多</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Recommended Cars */}
      <section className="container mx-auto px-4">
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold">精选推荐</h2>
            <p className="text-muted-foreground mt-2">为您挑选的全球最受欢迎的热门车型</p>
          </div>
          <Button variant="ghost" className="hidden md:flex items-center gap-2" asChild>
            <Link to="/cars">查看全部 <ArrowRight className="h-4 w-4" /></Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {recommendedCars.map((car) => (
            <Card key={car.id} className="group overflow-hidden border-none shadow-lg hover:shadow-xl transition-all">
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={getImageWithFallback(car.images[0], car.id)}
                  alt={`${car.brand} ${car.model}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <Badge className="absolute top-4 left-4 bg-black/60 backdrop-blur text-white border-none">
                  {car.type}
                </Badge>
              </div>
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <p className="text-sm font-medium text-blue-600 mb-1">{car.brand}</p>
                    <h3 className="text-xl font-bold">{car.model}</h3>
                  </div>
                  <p className="text-xl font-bold text-primary">
                    ¥{(car.price / 10000).toFixed(1)}w<span className="text-xs text-muted-foreground font-normal ml-1">起</span>
                  </p>
                </div>
                <div className="flex gap-4 mt-4 py-4 border-y text-xs text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Gauge className="h-3 w-3" /> {car.acceleration} (0-100)
                  </div>
                  <div className="flex items-center gap-1">
                    <Zap className="h-3 w-3" /> {car.power}
                  </div>
                  <div className="flex items-center gap-1">
                    {car.fuelType}
                  </div>
                </div>
                <Button className="w-full mt-6" variant="secondary" asChild>
                  <Link to={`/cars/${car.id}`}>查看详情</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="bg-muted/50 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4">为什么选择智行名车汇？</h2>
            <p className="text-muted-foreground">
              我们不仅销售汽车，更致力于为您提供全方位的管家式服务。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { icon: ShieldCheck, title: "品质保证", desc: "所有车辆经过 245 项专业严苛检测" },
              { icon: Award, title: "权威认证", desc: "官方品牌授权经销商，正品保障" },
              { icon: Zap, title: "极速交付", desc: "专属顾问一对一服务，最快当天提车" },
              { icon: Gauge, title: "性能优化", desc: "原厂级改装支持，释放座驾极致性能" },
            ].map((feature, i) => (
              <div key={i} className="flex flex-col items-center text-center space-y-4 p-6 bg-background rounded-2xl shadow-sm border">
                <div className="p-4 bg-blue-50 rounded-full">
                  <feature.icon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4">
        <div className="bg-primary rounded-[2rem] p-8 md:p-16 relative overflow-hidden text-white">
           <div className="relative z-10 max-w-xl">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">准备好开启您的梦想之旅了吗？</h2>
              <p className="text-primary-foreground/80 mb-8 text-lg">
                立即预约线下试驾，亲身感受卓越性能与豪华内饰的完美契合。
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" variant="secondary" className="px-8 h-12" asChild>
                   <Link to="/test-drive">预约到店试驾</Link>
                </Button>
                <Button size="lg" variant="ghost" className="text-white border-white border px-8 h-12" asChild>
                   <Link to="/dedicated-advisor">联系专属顾问</Link>
                </Button>
              </div>
           </div>
           <div className="absolute top-1/2 right-0 -translate-y-1/2 w-1/2 h-full opacity-20 hidden lg:block">
              <img src="https://miaoda-site-img.cdn.bcebos.com/images/baidu_image_search_a724218b-1cf8-4420-9f43-85477fb68060.jpg" alt="Wheel" className="w-full h-full object-contain" />
           </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
