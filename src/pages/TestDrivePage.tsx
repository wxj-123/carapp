import React, { useState } from 'react';
import { Car, Calendar, MapPin, User, Phone, Mail, Clock, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { mockCars } from '@/data/mockCars';

const TestDrivePage = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    carModel: '',
    preferredDate: '',
    preferredTime: '',
    location: '上海体验中心',
    message: ''
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // 模拟提交延迟
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
      // 3秒后重置表单
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          name: '',
          phone: '',
          email: '',
          carModel: '',
          preferredDate: '',
          preferredTime: '',
          location: '上海体验中心',
          message: ''
        });
      }, 3000);
    }, 1500);
  };

  if (isSubmitted) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] py-16">
        <div className="text-center max-w-md">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="h-10 w-10 text-green-600" />
          </div>
          <h2 className="text-2xl font-bold mb-4">预约成功！</h2>
          <p className="text-muted-foreground mb-6">
            感谢您的预约，我们的专属顾问将在30分钟内与您联系确认试驾详情。
          </p>
          <Button onClick={() => setIsSubmitted(false)} variant="outline">
            返回预约页面
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-16 py-16">
      {/* Header */}
      <section className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">预约试驾</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          亲身体验梦想座驾，我们的专业顾问将为您提供一对一的试驾服务
        </p>
      </section>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Form Section */}
          <div className="lg:col-span-2">
            <Card className="rounded-3xl shadow-xl border-none overflow-hidden">
              <div className="bg-gradient-to-r from-primary to-blue-600 p-8 text-white">
                <h2 className="text-2xl font-bold mb-2">填写预约信息</h2>
                <p className="text-primary-foreground/80">
                  专属顾问将尽快与您联系确认试驾安排
                </p>
              </div>
              
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Personal Info */}
                    <div className="space-y-2">
                      <label className="text-sm font-medium flex items-center gap-2">
                        <User className="h-4 w-4" /> 您的姓名 *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-primary outline-none transition-all"
                        placeholder="请输入您的姓名"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium flex items-center gap-2">
                        <Phone className="h-4 w-4" /> 手机号码 *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-primary outline-none transition-all"
                        placeholder="请输入手机号码"
                        required
                      />
                    </div>

                    <div className="space-y-2 md:col-span-2">
                      <label className="text-sm font-medium flex items-center gap-2">
                        <Mail className="h-4 w-4" /> 电子邮箱
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-primary outline-none transition-all"
                        placeholder="请输入电子邮箱"
                      />
                    </div>

                    {/* Car Selection */}
                    <div className="space-y-2 md:col-span-2">
                      <label className="text-sm font-medium flex items-center gap-2">
                        <Car className="h-4 w-4" /> 意向车型 *
                      </label>
                      <select
                        name="carModel"
                        value={formData.carModel}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-primary outline-none transition-all"
                        required
                      >
                        <option value="">请选择您想试驾的车型</option>
                        {mockCars.map(car => (
                          <option key={car.id} value={`${car.brand} ${car.model}`}>
                            {car.brand} {car.model} - ¥{(car.price / 10000).toFixed(1)}万
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Date and Time */}
                    <div className="space-y-2">
                      <label className="text-sm font-medium flex items-center gap-2">
                        <Calendar className="h-4 w-4" /> 预约日期 *
                      </label>
                      <input
                        type="date"
                        name="preferredDate"
                        value={formData.preferredDate}
                        onChange={handleInputChange}
                        min={new Date().toISOString().split('T')[0]}
                        className="w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-primary outline-none transition-all"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium flex items-center gap-2">
                        <Clock className="h-4 w-4" /> 预约时间 *
                      </label>
                      <select
                        name="preferredTime"
                        value={formData.preferredTime}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-primary outline-none transition-all"
                        required
                      >
                        <option value="">请选择时间段</option>
                        <option value="09:00-11:00">09:00 - 11:00</option>
                        <option value="11:00-13:00">11:00 - 13:00</option>
                        <option value="13:00-15:00">13:00 - 15:00</option>
                        <option value="15:00-17:00">15:00 - 17:00</option>
                        <option value="17:00-19:00">17:00 - 19:00</option>
                      </select>
                    </div>

                    {/* Location */}
                    <div className="space-y-2 md:col-span-2">
                      <label className="text-sm font-medium flex items-center gap-2">
                        <MapPin className="h-4 w-4" /> 试驾地点 *
                      </label>
                      <select
                        name="location"
                        value={formData.location}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-primary outline-none transition-all"
                        required
                      >
                        <option value="上海体验中心">上海体验中心 - 陆家嘴环路888号</option>
                        <option value="北京体验中心">北京体验中心 - 建国路999号</option>
                        <option value="广州体验中心">广州体验中心 - 珠江新城666号</option>
                        <option value="深圳体验中心">深圳体验中心 - 深南大道1234号</option>
                        <option value="上门试驾">上门试驾服务</option>
                      </select>
                    </div>

                    {/* Message */}
                    <div className="space-y-2 md:col-span-2">
                      <label className="text-sm font-medium">备注信息</label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        rows={4}
                        className="w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-primary outline-none transition-all"
                        placeholder="请告诉我们您的特殊需求或备注信息..."
                      />
                    </div>
                  </div>

                  <div className="pt-4">
                    <Button 
                      type="submit" 
                      className="w-full h-14 text-lg font-bold"
                      disabled={isLoading}
                    >
                      {isLoading ? (
                        <span className="flex items-center gap-2">
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                          提交中...
                        </span>
                      ) : (
                        '立即预约试驾'
                      )}
                    </Button>
                  </div>

                  <p className="text-center text-sm text-muted-foreground pt-4">
                    提交后，我们的顾问将在30分钟内联系您确认预约详情
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Info Sidebar */}
          <div className="space-y-6">
            {/* Benefits */}
            <Card className="rounded-2xl border-none shadow-lg p-6">
              <h3 className="text-xl font-bold mb-4">试驾服务优势</h3>
              <div className="space-y-4">
                {[
                  { icon: CheckCircle, text: "专业顾问一对一服务" },
                  { icon: CheckCircle, text: "多种车型现场体验" },
                  { icon: CheckCircle, text: "上门试驾服务可选" },
                  { icon: CheckCircle, text: "30分钟快速响应" },
                  { icon: CheckCircle, text: "全程安全保障" }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <item.icon className="h-5 w-5 text-green-600" />
                    <span className="text-sm">{item.text}</span>
                  </div>
                ))}
              </div>
            </Card>

            {/* Contact Info */}
            <Card className="rounded-2xl border-none shadow-lg p-6 bg-blue-50">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Phone className="h-5 w-5 text-blue-600" /> 联系我们
              </h3>
              <div className="space-y-3">
                <div>
                  <p className="font-semibold text-blue-600">400-123-4567</p>
                  <p className="text-sm text-muted-foreground">服务时间：09:00 - 21:00</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">或添加微信客服</p>
                  <p className="font-medium text-blue-600">zhixing_testdrive</p>
                </div>
              </div>
            </Card>

            {/* Process */}
            <Card className="rounded-2xl border-none shadow-lg p-6">
              <h3 className="text-xl font-bold mb-4">预约流程</h3>
              <div className="space-y-4">
                {[
                  { step: "1", title: "在线预约", desc: "填写基本信息" },
                  { step: "2", title: "顾问联系", desc: "30分钟内确认" },
                  { step: "3", title: "到店试驾", desc: "专业服务体验" },
                  { step: "4", title: "购车咨询", desc: "专属方案定制" }
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold">
                      {item.step}
                    </div>
                    <div>
                      <h4 className="font-medium">{item.title}</h4>
                      <p className="text-sm text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestDrivePage;