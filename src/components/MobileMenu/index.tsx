import React, { useState } from 'react';
import {
  AppstoreOutlined,
  ContainerOutlined,
  DesktopOutlined,
  MailOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Button, Menu } from 'antd';
import './styles.scss';

type MenuItem = Required<MenuProps>['items'][number];

const items: MenuItem[] = [
  { key: '1', icon: <AppstoreOutlined />, label: 'Menu' },
  { key: '2', icon: <DesktopOutlined />, label: 'Quartos' },
  { key: '3', icon: <ContainerOutlined />, label: 'Avaliações' },
  {
    key: '4',
    label: 'Idioma - Moeda',
    icon: <MailOutlined />,
    children: [
      { key: '5', label: 'BRL' },
      { key: '6', label: 'EN' },
      { key: '7', label: 'ES' }
    ]
  },
  { key: '8', icon: <ContainerOutlined />, label: 'Reservas' }
];

const MobileMenu: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div className={'mobile-menu'}>
      <Button
        size="small"
        onClick={toggleCollapsed}
        className="menu-root__button"
      >
        {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
      </Button>
      <Menu
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode="inline"
        inlineCollapsed={collapsed}
        items={items}
      />
    </div>
  );
};

export default MobileMenu;
