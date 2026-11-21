import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  ChevronLeft, 
  Share2, 
  Heart, 
  Info, 
  CheckCircle2, 
  Phone,
  ArrowRight,
  Gauge,
  Zap,
  Settings,
  Maximize
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { mockCars } from '@/data/mockCars';
import { Separator } from '@/components/ui/separator';

const CarDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const car = mockCars.find(c => c.id === id);
  
  // 图片加载状态管理
  const [imageLoadStates, setImageLoadStates] = useState<Record<string, boolean>>({});

  const handleImageLoad = (imageId: string) => {
    setImageLoadStates(prev => ({ ...prev, [imageId]: true }));
  };

  const handleImageError = (imageId: string) => {
    setImageLoadStates(prev => ({ ...prev, [imageId]: false }));
  };

  if (!car) {
    return <div>车辆未找到</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content (Left) */}
        <div className="lg:col-span-2 space-y-8">
          {/* Gallery */}
          <div className="space-y-4">
            <div className="aspect-video rounded-3xl overflow-hidden bg-black shadow-2xl relative">
               <img
                 src={car.images[0]}
                 alt={car.model}
                 className="w-full h-full object-cover"
                 onLoad={() => handleImageLoad(`main-${car.id}`)}
                 onError={() => handleImageError(`main-${car.id}`)}
               />
               {!imageLoadStates[`main-${car.id}`] && (
                 <div className="absolute inset-0 bg-gray-800 flex items-center justify-center">
                   <div className="text-center">
                     <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                     <p className="text-white">图片加载中...</p>
                   </div>
                 </div>
               )}
               <Badge className="absolute bottom-6 right-6 bg-black/60 backdrop-blur px-3 py-1">
                 1 / {car.images.length}
               </Badge>
            </div>
            <div className="grid grid-cols-4 gap-4">
              {car.images.map((img, i) => (
                <div key={i} className={`aspect-[4/3] rounded-xl overflow-hidden cursor-pointer border-2 ${i === 0 ? 'border-primary' : 'border-transparent'}`}>
                  <img 
                    src={img} 
                    alt={`${car.model} ${i}`} 
                    className="w-full h-full object-cover"
                    onLoad={() => handleImageLoad(`thumb-${car.id}-${i}`)}
                    onError={() => handleImageError(`thumb-${car.id}-${i}`)}
                  />
                  {!imageLoadStates[`thumb-${car.id}-${i}`] && (
                    <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
                      <div className="w-4 h-4 border-2 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Title & Stats */}
          <div className="bg-background rounded-3xl p-8 shadow-sm">
             <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
                <div>
                  <Badge variant="secondary" className="mb-2">{car.year}款 · {car.type}</Badge>
                  <h1 className="text-3xl md:text-4xl font-black tracking-tight">{car.brand} {car.model}</h1>
                </div>
                <div className="text-right">
                  <p className="text-sm text-muted-foreground">官方指导价</p>
                  <p className="text-3xl font-black text-blue-600">¥{(car.price / 10000).toFixed(1)}w <span className="text-lg font-normal">起</span></p>
                </div>
             </div>

             <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-6 bg-slate-50 rounded-2xl">
                <div className="space-y-1">
                  <p className="text-xs text-muted-foreground uppercase tracking-wider">0-100km/h</p>
                  <div className="flex items-center gap-2 font-bold text-lg">
                    <Gauge className="h-4 w-4 text-blue-500" /> {car.acceleration}
                  </div>
                </div>
                <div className="space-y-1">
                  <p className="text-xs text-muted-foreground uppercase tracking-wider">最大马力</p>
                  <div className="flex items-center gap-2 font-bold text-lg">
                    <Zap className="h-4 w-4 text-blue-500" /> {car.power}
                  </div>
                </div>
                <div className="space-y-1">
                  <p className="text-xs text-muted-foreground uppercase tracking-wider">驱动形式</p>
                  <div className="flex items-center gap-2 font-bold text-lg">
                    <Settings className="h-4 w-4 text-blue-500" /> {car.engine}
                  </div>
                </div>
                <div className="space-y-1">
                  <p className="text-xs text-muted-foreground uppercase tracking-wider">外廓尺寸</p>
                  <div className="flex items-center gap-2 font-bold text-lg">
                    <Maximize className="h-4 w-4 text-blue-500" /> {car.dimensions.split(' ')[0]}
                  </div>
                </div>
             </div>
          </div>

          {/* Details Tabs */}
          <div className="bg-background rounded-3xl p-8 shadow-sm">
            <Tabs defaultValue="overview">
              <TabsList className="w-full justify-start border-b rounded-none bg-transparent h-auto p-0 mb-6 gap-8">
                <TabsTrigger value="overview" className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent px-0 pb-3 text-base font-bold">概览介绍</TabsTrigger>
                <TabsTrigger value="specs" className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent px-0 pb-3 text-base font-bold">技术规格</TabsTrigger>
                <TabsTrigger value="features" className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent px-0 pb-3 text-base font-bold">亮点配置</TabsTrigger>
              </TabsList>
                
              <TabsContent value="overview" className="mt-0 space-y-4">
                <p className="text-lg leading-relaxed text-muted-foreground">
                  {car.description}
                </p>
                <div className="py-4 space-y-2">
                   <h4 className="font-bold text-lg">车型寄语</h4>
                   <p className="text-muted-foreground">
                     这款 {car.brand} {car.model} 代表了汽车工程的高水准。无论是城市穿梭还是长途旅行，它都能为您提供卓越的驾驶乐趣和无与伦比的舒适体验。精湛的内饰工艺与强大的动力系统相得益彰，是您尊贵身份的完美体现。
                   </p>
                </div>
              </TabsContent>
                
              <TabsContent value="specs" className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4">
                   {[
                     { label: "能源类型", value: car.fuelType },
                     { label: "变速箱", value: car.transmission },
                     { label: "发动机/电机", value: car.engine },
                     { label: "最大功率", value: car.power },
                     { label: "0-100km/h加速", value: car.acceleration },
                     { label: "外廓尺寸", value: car.dimensions },
                     { label: "车型", value: car.type },
                     { label: "上市年份", value: `${car.year}款` },
                   ].map((item, i) => (
                     <div key={i} className="flex justify-between py-3 border-b border-slate-100 last:border-0">
                       <span className="text-muted-foreground">{item.label}</span>
                       <span className="font-medium">{item.value}</span>
                     </div>
                   ))}
                </div>
              </TabsContent>

              <TabsContent value="features" className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {car.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-3 p-4 rounded-xl bg-slate-50">
                      <CheckCircle2 className="h-5 w-5 text-green-500" />
                      <span className="font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>

        {/* Sidebar (Right) */}
        <div className="space-y-6">
          <Card className="rounded-3xl shadow-lg border-none overflow-hidden sticky top-32">
            <div className="bg-primary p-6 text-white text-center">
               <h3 className="text-xl font-bold">预约试驾</h3>
               <p className="text-primary-foreground/70 text-sm mt-1">专属顾问 1 小时内联系您</p>
            </div>
            <CardContent className="p-6 space-y-4">
              <div className="space-y-2">
                 <label className="text-sm font-medium">您的姓名</label>
                 <input type="text" className="w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-primary outline-none" placeholder="请输入姓名" />
              </div>
              <div className="space-y-2">
                 <label className="text-sm font-medium">手机号码</label>
                 <input type="tel" className="w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-primary outline-none" placeholder="请输入手机号" />
              </div>
              <div className="space-y-2">
                 <label className="text-sm font-medium">意向车型</label>
                 <div className="w-full px-4 py-2 rounded-lg bg-slate-50 border font-medium">
                   {car.brand} {car.model}
                 </div>
              </div>
              <Button className="w-full h-12 text-lg font-bold mt-2">
                 立即预约
              </Button>
              <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground mt-4">
                <ShieldCheck className="h-4 w-4" /> 您的个人信息将严格保密
              </div>
            </CardContent>
          </Card>

          <Card className="rounded-3xl border-none shadow-sm p-6 bg-blue-50">
             <h4 className="font-bold flex items-center gap-2 mb-4">
                <Phone className="h-5 w-5 text-blue-600" /> 销售热线
             </h4>
             <p className="text-2xl font-black text-blue-600 mb-2">400-123-4567</p>
             <p className="text-xs text-muted-foreground">服务时间：周一至周日 09:00 - 21:00</p>
             <Separator className="my-4" />
             <Button variant="outline" className="w-full gap-2 border-blue-200 text-blue-600 hover:bg-blue-100">
                在线咨询顾问 <ArrowRight className="h-4 w-4" />
             </Button>
          </Card>
        </div>
      </div>
    </div>
  );
};

const ShieldCheck = ({ className }: { className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="24" 
    height="24" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
    <path d="m9 12 2 2 4-4" />
  </svg>
);

export default CarDetailPage;
