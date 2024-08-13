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
import { useNavigate } from 'react-router-dom';

type MenuItem = Required<MenuProps>['items'][number];

const MobileMenu: React.FC = () => {
  const navigate = useNavigate();

  const [collapsed, setCollapsed] = useState(false);
  const goToPayment = () => {
    navigate('/payment');
  };

  const items: MenuItem[] = [
    {
      key: '1',
      icon: <AppstoreOutlined />,
      label: 'Menu',
      onClick: goToPayment
    },
    {
      key: '2',
      icon: <DesktopOutlined />,
      label: 'Quartos',
      onClick: goToPayment
    },
    {
      key: '3',
      icon: <ContainerOutlined />,
      label: 'Avaliações',
      onClick: goToPayment
    },
    {
      key: '4',
      label: 'Idioma - Moeda',
      icon: <MailOutlined />,
      // onClick: changeLanguage,
      children: [
        { key: '5', label: 'BRL' },
        { key: '6', label: 'EN' },
        { key: '7', label: 'ES' }
      ]
    },
    {
      key: '8',
      icon: <ContainerOutlined />,
      label: 'Reservas',
      onClick: goToPayment
    }
  ];

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
