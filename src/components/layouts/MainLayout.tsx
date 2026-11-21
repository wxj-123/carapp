import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Car, Menu, X, Search, Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

interface MainLayoutProps {
  children: React.ReactNode;
}

const Navbar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = React.useState(false);

  const navLinks = [
    { name: '首页', path: '/' },
    { name: '选车中心', path: '/cars' },
    { name: '服务中心', path: '/service' },
    { name: '关于我们', path: '/about' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-2">
          <Link to="/" className="flex items-center gap-2">
            <Car className="h-8 w-8 text-primary" />
            <span className="text-xl font-bold tracking-tighter">智行名车汇</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActive(link.path) ? 'text-primary' : 'text-muted-foreground'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <div className="flex items-center gap-2 border-l pl-8">
             <Button variant="ghost" size="icon">
                <Search className="h-5 w-5" />
             </Button>
             <Button asChild>
                <Link to="/test-drive">预约试驾</Link>
             </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <div className="flex flex-col gap-8 pt-10">
                <div className="flex items-center gap-2">
                  <Car className="h-8 w-8 text-primary" />
                  <span className="text-xl font-bold tracking-tighter">智行名车汇</span>
                </div>
                <div className="flex flex-col gap-4">
                  {navLinks.map((link) => (
                    <Link
                      key={link.path}
                      to={link.path}
                      onClick={() => setIsOpen(false)}
                      className={`text-lg font-medium transition-colors hover:text-primary ${
                        isActive(link.path) ? 'text-primary' : 'text-muted-foreground'
                      }`}
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
                <div className="flex flex-col gap-3">
                  <Button className="w-full" asChild>
                    <Link to="/test-drive">预约试驾</Link>
                  </Button>
                  <Button variant="outline" className="w-full" asChild>
                    <Link to="/service-appointment">预约服务</Link>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

const Footer = () => {
  return (
    <footer className="border-t bg-muted/30">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Car className="h-6 w-6 text-primary" />
              <span className="text-lg font-bold tracking-tighter">智行名车汇</span>
            </div>
            <p className="text-sm text-muted-foreground">
              致力于为客户提供全球顶尖品质的汽车选择，打造尊贵的购车与用车体验。
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">快捷链接</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/">首页</Link></li>
              <li><Link to="/cars">选车中心</Link></li>
              <li><Link to="/about">关于我们</Link></li>
              <li><Link to="/service">服务中心</Link></li>
              <li><Link to="/service-appointment">服务预约</Link></li>
              <li><Link to="/custom-purchase">定制购车</Link></li>
              <li><Link to="/dedicated-advisor">专属顾问</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">车辆分类</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/categories">豪华轿车</Link></li>
              <li><Link to="/categories">运动跑车</Link></li>
              <li><Link to="/categories">全境 SUV</Link></li>
              <li><Link to="/categories">商务 MPV</Link></li>
              <li><Link to="/categories">新能源汽车</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">联系我们</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4" /> 400-123-4567
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4" /> contact@zhixing.com
              </li>
              <li>地址：上海市黄浦区陆家嘴环路 888 号</li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t text-center text-sm text-muted-foreground">
          &copy; 2026 智行名车汇. 保留所有权利。
        </div>
      </div>
    </footer>
  );
};

export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
};
