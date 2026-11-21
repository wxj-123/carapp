import React, { useState } from 'react';
import { 
  Wrench, 
  Calendar, 
  MapPin, 
  User, 
  Phone, 
  Mail, 
  Clock, 
  CheckCircle,
  Car,
  ShieldCheck,
  CreditCard,
  Headphones
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const ServiceAppointmentPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    carBrand: '',
    carModel: '',
    carYear: '',
    licensePlate: '',
    serviceType: '',
    preferredDate: '',
    preferredTime: '',
    location: '上海服务中心',
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
          carBrand: '',
          carModel: '',
          carYear: '',
          licensePlate: '',
          serviceType: '',
          preferredDate: '',
          preferredTime: '',
          location: '上海服务中心',
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
            感谢您的预约，我们的服务顾问将在30分钟内与您联系确认服务详情。
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
        <h1 className="text-4xl md:text-5xl font-bold mb-6">服务预约</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          专业汽车服务预约，我们的技师团队将为您提供高品质的维修保养服务
        </p>
      </section>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Form Section */}
          <div className="lg:col-span-2">
            <Card className="rounded-3xl shadow-xl border-none overflow-hidden">
              <div className="bg-gradient-to-r from-primary to-blue-600 p-8 text-white">
                <h2 className="text-2xl font-bold mb-2">填写服务预约信息</h2>
                <p className="text-primary-foreground/80">
                  专业服务顾问将尽快与您联系确认预约安排
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

                    {/* Vehicle Info */}
                    <div className="space-y-2">
                      <label className="text-sm font-medium flex items-center gap-2">
                        <Car className="h-4 w-4" /> 车辆品牌 *
                      </label>
                      <select
                        name="carBrand"
                        value={formData.carBrand}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-primary outline-none transition-all"
                        required
                      >
                        <option value="">请选择车辆品牌</option>
                        <option value="奔驰">奔驰</option>
                        <option value="宝马">宝马</option>
                        <option value="奥迪">奥迪</option>
                        <option value="保时捷">保时捷</option>
                        <option value="特斯拉">特斯拉</option>
                        <option value="沃尔沃">沃尔沃</option>
                        <option value="雷克萨斯">雷克萨斯</option>
                        <option value="其他">其他品牌</option>
                      </select>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium flex items-center gap-2">
                        <Car className="h-4 w-4" /> 车型 *
                      </label>
                      <input
                        type="text"
                        name="carModel"
                        value={formData.carModel}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-primary outline-none transition-all"
                        placeholder="请输入具体车型"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium flex items-center gap-2">
                        <Calendar className="h-4 w-4" /> 车辆年份
                      </label>
                      <input
                        type="number"
                        name="carYear"
                        value={formData.carYear}
                        onChange={handleInputChange}
                        min="1990"
                        max={new Date().getFullYear()}
                        className="w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-primary outline-none transition-all"
                        placeholder="如：2020"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium flex items-center gap-2">
                        <ShieldCheck className="h-4 w-4" /> 车牌号
                      </label>
                      <input
                        type="text"
                        name="licensePlate"
                        value={formData.licensePlate}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-primary outline-none transition-all"
                        placeholder="请输入车牌号"
                      />
                    </div>

                    {/* Service Type */}
                    <div className="space-y-2 md:col-span-2">
                      <label className="text-sm font-medium flex items-center gap-2">
                        <Wrench className="h-4 w-4" /> 服务类型 *
                      </label>
                      <select
                        name="serviceType"
                        value={formData.serviceType}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-primary outline-none transition-all"
                        required
                      >
                        <option value="">请选择服务类型</option>
                        <option value="定期保养">定期保养</option>
                        <option value="发动机维修">发动机维修</option>
                        <option value="变速箱维修">变速箱维修</option>
                        <option value="刹车系统">刹车系统检修</option>
                        <option value="电气系统">电气系统检修</option>
                        <option value="轮胎服务">轮胎检测与更换</option>
                        <option value="空调维护">空调系统维护</option>
                        <option value="车身维修">车身钣金喷漆</option>
                        <option value="车辆检测">全面车辆检测</option>
                        <option value="其他服务">其他服务</option>
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
                        <MapPin className="h-4 w-4" /> 服务地点 *
                      </label>
                      <select
                        name="location"
                        value={formData.location}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-primary outline-none transition-all"
                        required
                      >
                        <option value="上海服务中心">上海服务中心 - 陆家嘴环路888号</option>
                        <option value="北京服务中心">北京服务中心 - 建国路999号</option>
                        <option value="广州服务中心">广州服务中心 - 珠江新城666号</option>
                        <option value="深圳服务中心">深圳服务中心 - 深南大道1234号</option>
                        <option value="上门取送车">上门取送车服务</option>
                      </select>
                    </div>

                    {/* Message */}
                    <div className="space-y-2 md:col-span-2">
                      <label className="text-sm font-medium">故障描述/备注信息</label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        rows={4}
                        className="w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-primary outline-none transition-all"
                        placeholder="请详细描述车辆问题或特殊需求..."
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
                        '立即预约服务'
                      )}
                    </Button>
                  </div>

                  <p className="text-center text-sm text-muted-foreground pt-4">
                    提交后，我们的服务顾问将在30分钟内联系您确认预约详情
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Info Sidebar */}
          <div className="space-y-6">
            {/* Service Benefits */}
            <Card className="rounded-2xl border-none shadow-lg p-6">
              <h3 className="text-xl font-bold mb-4">服务优势</h3>
              <div className="space-y-4">
                {[
                  { icon: CheckCircle, text: "原厂级专业技师" },
                  { icon: CheckCircle, text: "使用原厂配件" },
                  { icon: CheckCircle, text: "质量保证服务" },
                  { icon: CheckCircle, text: "30分钟快速响应" },
                  { icon: CheckCircle, text: "上门取送车服务" }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <item.icon className="h-5 w-5 text-green-600" />
                    <span className="text-sm">{item.text}</span>
                  </div>
                ))}
              </div>
            </Card>

            {/* Service Types */}
            <Card className="rounded-2xl border-none shadow-lg p-6">
              <h3 className="text-xl font-bold mb-4">主要服务项目</h3>
              <div className="space-y-3">
                {[
                  { icon: Wrench, text: "定期保养维护" },
                  { icon: Car, text: "发动机深度保养" },
                  { icon: ShieldCheck, text: "刹车系统检修" },
                  { icon: Headphones, text: "电气系统诊断" },
                  { icon: CreditCard, text: "保险理赔协助" }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <item.icon className="h-4 w-4 text-primary" />
                    <span className="text-sm">{item.text}</span>
                  </div>
                ))}
              </div>
            </Card>

            {/* Contact Info */}
            <Card className="rounded-2xl border-none shadow-lg p-6 bg-blue-50">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Phone className="h-5 w-5 text-blue-600" /> 服务热线
              </h3>
              <div className="space-y-3">
                <div>
                  <p className="font-semibold text-blue-600">400-123-4567</p>
                  <p className="text-sm text-muted-foreground">24小时服务热线</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">或添加微信客服</p>
                  <p className="font-medium text-blue-600">zhixing_service</p>
                </div>
              </div>
            </Card>

            {/* Process */}
            <Card className="rounded-2xl border-none shadow-lg p-6">
              <h3 className="text-xl font-bold mb-4">服务流程</h3>
              <div className="space-y-4">
                {[
                  { step: "1", title: "在线预约", desc: "填写服务需求" },
                  { step: "2", title: "顾问确认", desc: "30分钟内联系" },
                  { step: "3", title: "到店服务", desc: "专业技师接待" },
                  { step: "4", title: "服务完成", desc: "质量检测交付" }
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

export default ServiceAppointmentPage;