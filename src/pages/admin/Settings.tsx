import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import { Label } from '../../components/ui/label';
import { Switch } from '../../components/ui/switch';
import { Textarea } from '../../components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../../components/ui/select';

const Settings: React.FC = () => {
  const [settings, setSettings] = useState({
    siteName: '汽车销售平台',
    siteDescription: '一个专业的汽车销售和服务平台',
    contactEmail: 'contact@example.com',
    contactPhone: '123-456-7890',
    enableRegistration: true,
    enableTestDrive: true,
    enableServiceAppointment: true,
    defaultLanguage: 'zh-CN',
    timezone: 'Asia/Shanghai',
  });

  const handleSettingChange = (key: string, value: any) => {
    setSettings(prev => ({
      ...prev,
      [key]: value
    }));
  };

  const handleSaveSettings = () => {
    // 保存设置的逻辑
    console.log('保存设置:', settings);
    // 显示成功消息
    alert('设置保存成功！');
  };

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h1 className="text-2xl font-bold text-gray-900">系统设置</h1>
        <p className="text-gray-600">配置平台的基本设置和功能</p>
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle>基本设置</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="siteName">网站名称</Label>
            <Input 
              id="siteName" 
              value={settings.siteName} 
              onChange={(e) => handleSettingChange('siteName', e.target.value)} 
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="siteDescription">网站描述</Label>
            <Textarea 
              id="siteDescription" 
              value={settings.siteDescription} 
              onChange={(e) => handleSettingChange('siteDescription', e.target.value)} 
              rows={3} 
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="contactEmail">联系邮箱</Label>
            <Input 
              id="contactEmail" 
              type="email" 
              value={settings.contactEmail} 
              onChange={(e) => handleSettingChange('contactEmail', e.target.value)} 
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="contactPhone">联系电话</Label>
            <Input 
              id="contactPhone" 
              value={settings.contactPhone} 
              onChange={(e) => handleSettingChange('contactPhone', e.target.value)} 
            />
          </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle>功能设置</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center space-x-2">
            <Switch 
              id="enableRegistration" 
              checked={settings.enableRegistration} 
              onCheckedChange={(checked) => handleSettingChange('enableRegistration', checked)} 
            />
            <Label htmlFor="enableRegistration">启用用户注册</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Switch 
              id="enableTestDrive" 
              checked={settings.enableTestDrive} 
              onCheckedChange={(checked) => handleSettingChange('enableTestDrive', checked)} 
            />
            <Label htmlFor="enableTestDrive">启用预约试驾</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Switch 
              id="enableServiceAppointment" 
              checked={settings.enableServiceAppointment} 
              onCheckedChange={(checked) => handleSettingChange('enableServiceAppointment', checked)} 
            />
            <Label htmlFor="enableServiceAppointment">启用服务预约</Label>
          </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle>区域设置</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="defaultLanguage">默认语言</Label>
            <Select 
              value={settings.defaultLanguage} 
              onValueChange={(value) => handleSettingChange('defaultLanguage', value)} 
            >
              <SelectTrigger>
                <SelectValue placeholder="选择语言" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="zh-CN">简体中文</SelectItem>
                <SelectItem value="en-US">English</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="timezone">时区</Label>
            <Select 
              value={settings.timezone} 
              onValueChange={(value) => handleSettingChange('timezone', value)} 
            >
              <SelectTrigger>
                <SelectValue placeholder="选择时区" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Asia/Shanghai">中国标准时间</SelectItem>
                <SelectItem value="America/New_York">美国东部时间</SelectItem>
                <SelectItem value="Europe/London">英国标准时间</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>
      
      <div className="flex justify-end">
        <Button onClick={handleSaveSettings}>
          保存设置
        </Button>
      </div>
    </div>
  );
};

export default Settings;