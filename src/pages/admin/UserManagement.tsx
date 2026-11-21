import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { DataTable } from '../../components/admin/DataTable';
import { Edit, Trash2, UserPlus } from 'lucide-react';

// Mock数据
const mockUsers = [
  { id: 1, name: '张三', email: 'zhangsan@example.com', role: '用户', createdAt: '2024-01-15' },
  { id: 2, name: '李四', email: 'lisi@example.com', role: '用户', createdAt: '2024-01-16' },
  { id: 3, name: '王五', email: 'wangwu@example.com', role: '用户', createdAt: '2024-01-17' },
  { id: 4, name: '赵六', email: 'zhaoliu@example.com', role: '管理员', createdAt: '2024-01-18' },
  { id: 5, name: '钱七', email: 'qianqi@example.com', role: '用户', createdAt: '2024-01-19' },
];

const UserManagement: React.FC = () => {
  const [users, setUsers] = useState(mockUsers);

  const handleDeleteUser = (id: number) => {
    setUsers(users.filter(user => user.id !== id));
  };

  const columns = [
    { key: 'id', label: 'ID' },
    { key: 'name', label: '姓名' },
    { key: 'email', label: '邮箱' },
    { key: 'role', label: '角色' },
    { key: 'createdAt', label: '创建时间' },
    { 
      key: 'actions', 
      label: '操作', 
      render: (user: any) => (
        <div className="flex space-x-2">
          <Button 
            size="sm" 
            variant="secondary"
          >
            <Edit className="w-4 h-4 mr-1" />
            编辑
          </Button>
          <Button 
            size="sm" 
            variant="destructive"
            onClick={() => handleDeleteUser(user.id)}
          >
            <Trash2 className="w-4 h-4 mr-1" />
            删除
          </Button>
        </div>
      )
    }
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">用户管理</h1>
          <p className="text-gray-600">管理平台上的所有用户账号</p>
        </div>
        <Button>
          <UserPlus className="w-4 h-4 mr-2" />
          添加用户
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>用户列表</CardTitle>
        </CardHeader>
        <CardContent>
          <DataTable columns={columns} data={users} />
        </CardContent>
      </Card>
    </div>
  );
};

export default UserManagement;