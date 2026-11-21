import React, { useState } from 'react';
import { 
  User, 
  Phone, 
  Mail, 
  MessageCircle, 
  Clock, 
  MapPin, 
  Star,
  CheckCircle,
  Headphones,
  Zap
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const DedicatedAdvisorPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    consultationType: '',
    carInterest: '',
    budget: '',
    timeline: '',
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
          consultationType: '',
          carInterest: '',
          budget: '',
          timeline: '',
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
          <h2 className="text-2xl font-bold mb-4">联系成功！</h2>
          <p className="text-muted-foreground mb-6">
            感谢您的联系，我们的专属顾问将在30分钟内与您取得联系，为您提供一对一专业服务。
          </p>
          <Button onClick={() => setIsSubmitted(false)} variant="outline">
            返回联系页面
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-16 py-16">
      {/* Header */}
      <section className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">联系专属顾问</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          享受一对一专业购车咨询服务，我们的资深顾问将根据您的需求提供个性化解决方案
        </p>
      </section>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Form Section */}
          <div className="lg:col-span-2">
            <Card className="rounded-3xl shadow-xl border-none overflow-hidden">
              <div className="bg-gradient-to-r from-primary to-blue-600 p-8 text-white">
                <h2 className="text-2xl font-bold mb-2">填写联系信息</h2>
                <p className="text-primary-foreground/80">
                  专属顾问将尽快与您联系，为您提供专业购车咨询服务
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

                    {/* Consultation Type */}
                    <div className="space-y-2">
                      <label className="text-sm font-medium flex items-center gap-2">
                        <MessageCircle className="h-4 w-4" /> 咨询类型 *
                      </label>
                      <select
                        name="consultationType"
                        value={formData.consultationType}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-primary outline-none transition-all"
                        required
                      >
                        <option value="">请选择咨询类型</option>
                        <option value="购车咨询">购车咨询</option>
                        <option value="车型推荐">车型推荐</option>
                        <option value="价格谈判">价格谈判</option>
                        <option value="金融服务">金融服务</option>
                        <option value="售后服务">售后服务</option>
                        <option value="其他咨询">其他咨询</option>
                      </select>
                    </div>

                    {/* Car Interest */}
                    <div className="space-y-2">
                      <label className="text-sm font-medium">感兴趣的车型</label>
                      <input
                        type="text"
                        name="carInterest"
                        value={formData.carInterest}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-primary outline-none transition-all"
                        placeholder="如：奔驰S级、宝马X5等"
                      />
                    </div>

                    {/* Budget and Timeline */}
                    <div className="space-y-2">
                      <label className="text-sm font-medium">购车预算</label>
                      <select
                        name="budget"
                        value={formData.budget}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-primary outline-none transition-all"
                      >
                        <option value="">请选择预算范围</option>
                        <option value="20万以下">20万以下</option>
                        <option value="20-30万">20-30万</option>
                        <option value="30-50万">30-50万</option>
                        <option value="50-80万">50-80万</option>
                        <option value="80-150万">80-150万</option>
                        <option value="150万以上">150万以上</option>
                      </select>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium flex items-center gap-2">
                        <Clock className="h-4 w-4" /> 购车时间规划
                      </label>
                      <select
                        name="timeline"
                        value={formData.timeline}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-primary outline-none transition-all"
                      >
                        <option value="">请选择购车时间</option>
                        <option value="尽快购车">尽快购车（1个月内）</option>
                        <option value="短期计划">短期计划（1-3个月）</option>
                        <option value="中期计划">中期计划（3-6个月）</option>
                        <option value="长期规划">长期规划（6个月以上）</option>
                      </select>
                    </div>

                    {/* Message */}
                    <div className="space-y-2 md:col-span-2">
                      <label className="text-sm font-medium flex items-center gap-2">
                        <MessageCircle className="h-4 w-4" /> 咨询内容
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        rows={5}
                        className="w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-primary outline-none transition-all"
                        placeholder="请详细描述您想咨询的内容或特殊需求..."
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
                        '联系专属顾问'
                      )}
                    </Button>
                  </div>

                  <p className="text-center text-sm text-muted-foreground pt-4">
                    提交后，我们的专属顾问将在30分钟内与您联系
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Info Sidebar */}
          <div className="space-y-6">
            {/* Advisor Benefits */}
            <Card className="rounded-2xl border-none shadow-lg p-6">
              <h3 className="text-xl font-bold mb-4">专属顾问服务</h3>
              <div className="space-y-4">
                {[
                  { icon: CheckCircle, text: "一对一专业服务" },
                  { icon: CheckCircle, text: "7×24小时在线咨询" },
                  { icon: CheckCircle, text: "个性化购车方案" },
                  { icon: CheckCircle, text: "价格谈判支持" },
                  { icon: CheckCircle, text: "全程购车指导" }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <item.icon className="h-5 w-5 text-green-600" />
                    <span className="text-sm">{item.text}</span>
                  </div>
                ))}
              </div>
            </Card>

            {/* Service Features */}
            <Card className="rounded-2xl border-none shadow-lg p-6">
              <h3 className="text-xl font-bold mb-4">服务特色</h3>
              <div className="space-y-4">
                {[
                  { icon: Star, title: "资深专家", desc: "10年以上行业经验" },
                  { icon: Headphones, title: "全程陪伴", desc: "从选车到提车" },
                  { icon: Zap, title: "快速响应", desc: "30分钟内回复" },
                  { icon: MapPin, title: "全国服务", desc: "线上线下结合" }
                ].map((feature, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="mt-1">
                      <feature.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium">{feature.title}</h4>
                      <p className="text-sm text-muted-foreground">{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Contact Info */}
            <Card className="rounded-2xl border-none shadow-lg p-6 bg-blue-50">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Phone className="h-5 w-5 text-blue-600" /> 联系方式
              </h3>
              <div className="space-y-3">
                <div>
                  <p className="font-semibold text-blue-600">400-123-4567</p>
                  <p className="text-sm text-muted-foreground">服务时间：09:00 - 21:00</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">微信客服</p>
                  <p className="font-medium text-blue-600">zhixing_advisor</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">在线客服</p>
                  <p className="font-medium text-blue-600">点击右下角在线客服</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DedicatedAdvisorPage;