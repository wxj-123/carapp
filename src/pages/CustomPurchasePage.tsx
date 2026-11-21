import React, { useState } from 'react';
import { 
  Car, 
  User, 
  Phone, 
  Mail, 
  Calendar, 
  MapPin, 
  CreditCard, 
  ShieldCheck,
  Zap,
  Star,
  CheckCircle
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const CustomPurchasePage = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    budget: '',
    usage: '',
    familyMembers: '',
    drivingHabits: '',
    preferredBrands: '',
    mustHaveFeatures: '',
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
          budget: '',
          usage: '',
          familyMembers: '',
          drivingHabits: '',
          preferredBrands: '',
          mustHaveFeatures: '',
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
          <h2 className="text-2xl font-bold mb-4">方案定制成功！</h2>
          <p className="text-muted-foreground mb-6">
            感谢您的信息提交，我们的专业购车顾问将在30分钟内与您联系，为您量身定制专属购车方案。
          </p>
          <Button onClick={() => setIsSubmitted(false)} variant="outline">
            返回定制页面
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-16 py-16">
      {/* Header */}
      <section className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">定制购车方案</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          告诉我们您的需求，我们的专业顾问将为您量身定制最合适的购车方案
        </p>
      </section>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Form Section */}
          <div className="lg:col-span-2">
            <Card className="rounded-3xl shadow-xl border-none overflow-hidden">
              <div className="bg-gradient-to-r from-primary to-blue-600 p-8 text-white">
                <h2 className="text-2xl font-bold mb-2">填写您的购车需求</h2>
                <p className="text-primary-foreground/80">
                  专业购车顾问将根据您的具体情况，推荐最适合的车型和购车方案
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

                    {/* Budget and Usage */}
                    <div className="space-y-2">
                      <label className="text-sm font-medium flex items-center gap-2">
                        <CreditCard className="h-4 w-4" /> 预算范围 *
                      </label>
                      <select
                        name="budget"
                        value={formData.budget}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-primary outline-none transition-all"
                        required
                      >
                        <option value="">请选择预算范围</option>
                        <option value="10-20万">10-20万</option>
                        <option value="20-30万">20-30万</option>
                        <option value="30-50万">30-50万</option>
                        <option value="50-80万">50-80万</option>
                        <option value="80-150万">80-150万</option>
                        <option value="150万以上">150万以上</option>
                      </select>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium flex items-center gap-2">
                        <Car className="h-4 w-4" /> 主要用途 *
                      </label>
                      <select
                        name="usage"
                        value={formData.usage}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-primary outline-none transition-all"
                        required
                      >
                        <option value="">请选择主要用途</option>
                        <option value="日常通勤">日常通勤</option>
                        <option value="商务接待">商务接待</option>
                        <option value="家庭出行">家庭出行</option>
                        <option value="长途旅行">长途旅行</option>
                        <option value="性能驾驶">性能驾驶</option>
                        <option value="其他用途">其他用途</option>
                      </select>
                    </div>

                    {/* Family and Habits */}
                    <div className="space-y-2">
                      <label className="text-sm font-medium">家庭成员数量</label>
                      <input
                        type="number"
                        name="familyMembers"
                        value={formData.familyMembers}
                        onChange={handleInputChange}
                        min="1"
                        max="10"
                        className="w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-primary outline-none transition-all"
                        placeholder="如：4人"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium">驾驶习惯</label>
                      <select
                        name="drivingHabits"
                        value={formData.drivingHabits}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-primary outline-none transition-all"
                      >
                        <option value="">请选择驾驶习惯</option>
                        <option value="城市驾驶为主">城市驾驶为主</option>
                        <option value="高速驾驶较多">高速驾驶较多</option>
                        <option value="山路驾驶">山路驾驶</option>
                        <option value="综合路况">综合路况</option>
                      </select>
                    </div>

                    {/* Preferences */}
                    <div className="space-y-2 md:col-span-2">
                      <label className="text-sm font-medium">偏好的汽车品牌</label>
                      <input
                        type="text"
                        name="preferredBrands"
                        value={formData.preferredBrands}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-primary outline-none transition-all"
                        placeholder="如：奔驰、宝马、奥迪等"
                      />
                    </div>

                    <div className="space-y-2 md:col-span-2">
                      <label className="text-sm font-medium">必备功能配置</label>
                      <input
                        type="text"
                        name="mustHaveFeatures"
                        value={formData.mustHaveFeatures}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-primary outline-none transition-all"
                        placeholder="如：全景天窗、自动驾驶、座椅加热等"
                      />
                    </div>

                    {/* Timeline */}
                    <div className="space-y-2 md:col-span-2">
                      <label className="text-sm font-medium flex items-center gap-2">
                        <Calendar className="h-4 w-4" /> 购车时间规划 *
                      </label>
                      <select
                        name="timeline"
                        value={formData.timeline}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-primary outline-none transition-all"
                        required
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
                      <label className="text-sm font-medium">其他特殊需求</label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        rows={4}
                        className="w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-primary outline-none transition-all"
                        placeholder="请详细描述您的特殊需求或关注点..."
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
                        '提交定制需求'
                      )}
                    </Button>
                  </div>

                  <p className="text-center text-sm text-muted-foreground pt-4">
                    提交后，我们的专业购车顾问将在30分钟内联系您
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Info Sidebar */}
          <div className="space-y-6">
            {/* Service Benefits */}
            <Card className="rounded-2xl border-none shadow-lg p-6">
              <h3 className="text-xl font-bold mb-4">定制服务优势</h3>
              <div className="space-y-4">
                {[
                  { icon: CheckCircle, text: "一对一专业顾问服务" },
                  { icon: CheckCircle, text: "多品牌车型对比分析" },
                  { icon: CheckCircle, text: "个性化配置推荐" },
                  { icon: CheckCircle, text: "最优价格谈判支持" },
                  { icon: CheckCircle, text: "全程购车流程指导" }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <item.icon className="h-5 w-5 text-green-600" />
                    <span className="text-sm">{item.text}</span>
                  </div>
                ))}
              </div>
            </Card>

            {/* Process */}
            <Card className="rounded-2xl border-none shadow-lg p-6">
              <h3 className="text-xl font-bold mb-4">服务流程</h3>
              <div className="space-y-4">
                {[
                  { step: "1", title: "需求沟通", desc: "详细了解您的购车需求" },
                  { step: "2", title: "方案定制", desc: "专业顾问制定购车方案" },
                  { step: "3", title: "车型推荐", desc: "精选最适合的车型组合" },
                  { step: "4", title: "价格谈判", desc: "争取最优购车价格" },
                  { step: "5", title: "全程服务", desc: "协助完成购车手续" }
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
                  <p className="font-medium text-blue-600">zhixing_purchase</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomPurchasePage;