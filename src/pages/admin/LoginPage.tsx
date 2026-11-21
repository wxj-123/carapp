import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import { Label } from '../../components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card';
import { Alert, AlertDescription } from '../../components/ui/alert';
import { Car } from 'lucide-react';
import { useAdminAuth } from '../../contexts/AdminAuthContext';

const LoginPage: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { login } = useAdminAuth();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    // 模拟登录验证
    setTimeout(() => {
      // 简单的模拟验证，实际项目中应该调用API
      if (username === 'admin' && password === 'admin123') {
        // 使用AdminAuthContext中的login方法
        login(username);
        navigate('/');
      } else {
        setError('用户名或密码错误，请重试');
      }
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md">
        <Card className="shadow-lg">
          <CardHeader className="pb-4">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Car className="h-8 w-8 text-primary" />
              <CardTitle className="text-2xl text-center">智行名车汇管理后台</CardTitle>
            </div>
            <p className="text-center text-gray-500">请登录以访问管理后台</p>
          </CardHeader>
          <CardContent>
            {error && (
              <Alert variant="destructive" className="mb-4">
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}
            <form onSubmit={handleLogin} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="username">用户名</Label>
                <Input
                  id="username"
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="请输入用户名"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">密码</Label>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="请输入密码"
                  required
                />
              </div>
              <Button
                type="submit"
                className="w-full mt-4"
                disabled={loading}
              >
                {loading ? '登录中...' : '登录'}
              </Button>
              <div className="text-center text-sm text-gray-500 mt-4">
                <p>默认用户名: admin</p>
                <p>默认密码: admin123</p>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default LoginPage;