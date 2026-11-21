import React from 'react';
import { Award, Users, Globe, History, Car, Zap, ShieldCheck, Phone, Mail, MapPin, Clock, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';

const AboutPage = () => {
  return (
    <div className="flex flex-col gap-20 py-20">
      {/* Hero Section */}
      <section className="container mx-auto px-4 text-center max-w-4xl">
        <h1 className="text-4xl md:text-6xl font-black mb-8">连接驾驶梦想，定义豪华未来</h1>
        <p className="text-xl text-muted-foreground leading-relaxed mb-10 max-w-3xl mx-auto">
          智行名车汇成立于 2010 年，总部位于上海。我们不仅是一家汽车销售平台，
          更是汽车文化的传播者和高端生活方式的倡导者。
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button size="lg" className="px-8 h-12" asChild>
            <Link to="/cars">立即选车</Link>
          </Button>
          <Button size="lg" variant="outline" className="px-8 h-12" asChild>
            <Link to="/test-drive">预约试驾</Link>
          </Button>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-slate-50 py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: History, label: "16年经验", desc: "深耕高端汽车市场", number: "2010" },
              { icon: Users, label: "5万+客户", desc: "值得信赖的选择", number: "50000+" },
              { icon: Globe, label: "全球货源", desc: "覆盖主流顶奢品牌", number: "20+" },
              { icon: Award, label: "金牌服务", desc: "连续 8 年行业标杆", number: "98%" },
            ].map((stat, i) => (
              <div key={i} className="text-center space-y-3 bg-white p-6 rounded-2xl shadow-sm">
                <div className="mx-auto w-16 h-16 bg-blue-50 rounded-2xl shadow-sm flex items-center justify-center mb-4">
                  <stat.icon className="h-8 w-8 text-blue-600" />
                </div>
                <div className="text-3xl font-bold text-blue-600">{stat.number}</div>
                <h3 className="text-xl font-bold">{stat.label}</h3>
                <p className="text-sm text-muted-foreground">{stat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">我们的核心价值</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            秉承专业、诚信、创新的服务理念，为每一位客户提供超越期待的购车体验
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { 
              icon: ShieldCheck, 
              title: "品质至上", 
              desc: "所有车辆经过 245 项专业检测，确保品质无忧",
              color: "text-green-600" 
            },
            { 
              icon: Zap, 
              title: "效率优先", 
              desc: "极速审批流程，最快当天完成购车手续",
              color: "text-yellow-600" 
            },
            { 
              icon: Star, 
              title: "服务卓越", 
              desc: "7×24小时专属顾问服务，全程贴心陪伴",
              color: "text-purple-600" 
            }
          ].map((value, i) => (
            <Card key={i} className="text-center p-8 hover:shadow-lg transition-shadow">
              <div className={`mx-auto w-16 h-16 ${value.color.replace('text', 'bg').replace('600', '100')} rounded-2xl flex items-center justify-center mb-6`}>
                <value.icon className={`h-8 w-8 ${value.color}`} />
              </div>
              <h3 className="text-2xl font-bold mb-4">{value.title}</h3>
              <p className="text-muted-foreground">{value.desc}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* Digital Innovation */}
      <section className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
           <div className="rounded-3xl overflow-hidden aspect-video shadow-2xl">
              <img src="https://miaoda-site-img.cdn.bcebos.com/images/baidu_image_search_08330045-becd-4ec9-afc1-ab60c63923ed.jpg" alt="Showroom" className="w-full h-full object-cover" />
           </div>
           <div className="space-y-6">
              <h2 className="text-3xl font-bold">数字化展厅革命</h2>
              <p className="text-muted-foreground">
                我们利用最新的 VR 影像技术和实时数据系统，为您提供沉浸式的远程选车体验。每一台进入智行库存的车辆，都经过严格的透明化公示，确保您所见即所得。
              </p>
              <ul className="space-y-4">
                {[
                  "官方直连数据库，参数 100% 准确",
                  "线上预约，全城送车上门试驾",
                  "极速分期方案，最快 1 小时审批",
                  "全生命周期售后服务保障"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                    <span className="font-medium">{item}</span>
                  </li>
                ))}
              </ul>
           </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="bg-muted/30 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">全方位服务体验</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              从选车到用车，我们提供一站式专业服务
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Car, title: "精选车源", desc: "全球主流豪华品牌，品质保证" },
              { icon: Clock, title: "快速交付", desc: "最快当天提车，效率领先" },
              { icon: ShieldCheck, title: "质保服务", desc: "原厂质保，安心无忧" },
              { icon: Phone, title: "专属顾问", desc: "一对一服务，全程陪伴" }
            ].map((service, i) => (
              <Card key={i} className="p-6 text-center hover:shadow-lg transition-shadow">
                <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-bold mb-2">{service.title}</h3>
                <p className="text-sm text-muted-foreground">{service.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="container mx-auto px-4">
        <div className="bg-gradient-to-r from-primary to-blue-600 rounded-3xl p-12 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">开启您的豪华汽车之旅</h2>
          <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            立即联系我们的专业顾问，为您量身定制专属购车方案
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" variant="secondary" className="px-8 h-12" asChild>
              <Link to="/test-drive">预约试驾</Link>
            </Button>
            <Button size="lg" variant="outline" className="px-8 h-12 border-white text-primary hover:bg-white hover:text-primary" asChild>
              <Link to="/service-appointment">预约服务</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
