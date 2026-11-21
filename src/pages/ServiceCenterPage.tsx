import React from 'react';
import { 
  Wrench, 
  ShieldCheck, 
  Clock, 
  MapPin, 
  Phone, 
  Mail,
  Car,
  Calendar,
  CreditCard,
  Headphones
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';

const ServiceCenterPage = () => {
  return (
    <div className="flex flex-col gap-16 py-16">
      {/* Header Section */}
      <section className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">服务中心</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          专业的一站式汽车服务，从保养维修到金融保险，为您提供全方位的贴心保障
        </p>
      </section>

      {/* Services Grid */}
      <section className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              icon: Wrench,
              title: "专业维修",
              desc: "原厂级维修服务，经验丰富的技师团队"
            },
            {
              icon: ShieldCheck,
              title: "质量保障",
              desc: "使用原厂配件，提供质保服务"
            },
            {
              icon: Clock,
              title: "快速响应",
              desc: "24小时紧急救援，快速故障处理"
            },
            {
              icon: Calendar,
              title: "预约服务",
              desc: "在线预约保养，节省您的宝贵时间"
            }
          ].map((service, i) => (
            <Card key={i} className="text-center p-6 hover:shadow-lg transition-shadow">
              <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <service.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
              <p className="text-sm text-muted-foreground">{service.desc}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* Service Categories */}
      <section className="bg-muted/30 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">服务项目</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Maintenance */}
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <Wrench className="h-5 w-5 text-primary" />
                <h3 className="text-xl font-semibold">保养服务</h3>
              </div>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• 定期保养套餐</li>
                <li>• 发动机深度保养</li>
                <li>• 刹车系统检查</li>
                <li>• 轮胎检测与更换</li>
                <li>• 空调系统维护</li>
              </ul>
            </div>

            {/* Repair */}
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <Car className="h-5 w-5 text-primary" />
                <h3 className="text-xl font-semibold">维修服务</h3>
              </div>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• 发动机维修</li>
                <li>• 变速箱维修</li>
                <li>• 电气系统检修</li>
                <li>• 底盘系统维护</li>
                <li>• 车身钣金喷漆</li>
              </ul>
            </div>

            {/* Additional Services */}
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <Headphones className="h-5 w-5 text-primary" />
                <h3 className="text-xl font-semibold">增值服务</h3>
              </div>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• 车辆检测报告</li>
                <li>• 二手车评估</li>
                <li>• 保险理赔协助</li>
                <li>• 金融方案咨询</li>
                <li>• 道路救援服务</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold mb-6">联系我们</h2>
              <p className="text-muted-foreground mb-8">
                我们的服务中心遍布全国主要城市，随时为您提供专业服务
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="mt-1 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">服务地址</h3>
                  <p className="text-sm text-muted-foreground">
                    上海市黄浦区陆家嘴环路 888 号<br />
                    北京市朝阳区建国路 999 号<br />
                    广州市天河区珠江新城 666 号
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="mt-1 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">服务热线</h3>
                  <p className="text-sm text-muted-foreground">
                    400-123-4567 (24小时)<br />
                    021-8888-9999 (上海)
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="mt-1 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">在线咨询</h3>
                  <p className="text-sm text-muted-foreground">
                    service@zhixing.com<br />
                    微信客服：zhixing_service
                  </p>
                </div>
              </div>
            </div>

            <Button size="lg" asChild>
              <Link to="/service-appointment">立即预约服务</Link>
            </Button>
          </div>

          <div className="rounded-3xl overflow-hidden shadow-2xl">
            <img 
              src="https://miaoda-site-img.cdn.bcebos.com/images/baidu_image_search_a724218b-1cf8-4420-9f43-85477fb68060.jpg" 
              alt="Service Center" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Emergency Service */}
      <section className="bg-primary text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">24小时紧急救援</h2>
          <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            无论何时何地，只要您的爱车遇到问题，我们的专业救援团队都会第一时间赶到现场
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="secondary" className="bg-white text-primary hover:bg-white/90">
              <Phone className="h-4 w-4 mr-2" />
              拨打救援电话
            </Button>
            <Button variant="outline" className="border-white text-primary hover:bg-white/10">
              在线申请救援
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceCenterPage;