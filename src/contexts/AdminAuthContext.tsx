import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface AdminAuthContextType {
  isLoggedIn: boolean;
  username: string | null;
  login: (username: string) => void;
  logout: () => void;
}

const AdminAuthContext = createContext<AdminAuthContextType | undefined>(undefined);

export const useAdminAuth = () => {
  const context = useContext(AdminAuthContext);
  if (!context) {
    throw new Error('useAdminAuth must be used within an AdminAuthProvider');
  }
  return context;
};

interface AdminAuthProviderProps {
  children: ReactNode;
}

export const AdminAuthProvider: React.FC<AdminAuthProviderProps> = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState<string | null>(null);

  // 初始化时检查localStorage中的登录状态
  useEffect(() => {
    const loggedIn = localStorage.getItem('adminLoggedIn') === 'true';
    const savedUsername = localStorage.getItem('adminUsername');
    if (loggedIn && savedUsername) {
      setIsLoggedIn(true);
      setUsername(savedUsername);
    }
  }, []);

  const login = (username: string) => {
    localStorage.setItem('adminLoggedIn', 'true');
    localStorage.setItem('adminUsername', username);
    setIsLoggedIn(true);
    setUsername(username);
  };

  const logout = () => {
    localStorage.removeItem('adminLoggedIn');
    localStorage.removeItem('adminUsername');
    setIsLoggedIn(false);
    setUsername(null);
  };

  return (
    <AdminAuthContext.Provider value={{ isLoggedIn, username, login, logout }}>
      {children}
    </AdminAuthContext.Provider>
  );
};