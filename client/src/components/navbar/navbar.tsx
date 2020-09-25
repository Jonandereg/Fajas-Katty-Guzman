import React, { FunctionComponent } from 'react';
import { Menu, Dropdown, Avatar } from 'antd';
import { DownOutlined, UserOutlined } from '@ant-design/icons';

import './navbar.scss';

const menu1 = (
  <Menu>
    <Menu.Item key='1'>1st menu item</Menu.Item>
    <Menu.Item key='2'>2nd memu item</Menu.Item>
    <Menu.Item key='3'>3rd menu item</Menu.Item>
  </Menu>
);

const menu2 = (
  <Menu>
    <Menu.Item key='1'>1st menu item</Menu.Item>
    <Menu.Item key='2'>trying new stuf</Menu.Item>
  </Menu>
);
const menu3 = (
  <Menu>
    <Menu.Item key='1'>third thing weird menu stuff</Menu.Item>
    <Menu.Item key='2'>trying new stuf</Menu.Item>
  </Menu>
);

const Navbar: FunctionComponent = () => {
  return (
    <>
      <div className='container_nav'>
        <div className='nav_logo'></div>
        <div className='Dmenu'>
          <Dropdown overlay={menu1}>
            <a href='' className='ant-dropdown-link'>
              Menu 1 <DownOutlined />
            </a>
          </Dropdown>
          <Dropdown overlay={menu2}>
            <a href='' className='ant-dropdown-link'>
              Menu 2 <DownOutlined />
            </a>
          </Dropdown>
          <Dropdown overlay={menu3}>
            <a href='' className='ant-dropdown-link'>
              Menu 3<DownOutlined />
            </a>
          </Dropdown>
        </div>
        <div className='avatar'>                   
          <Avatar style={{ backgroundColor: '#034071' }} icon={<UserOutlined />} />
        </div>
      </div>
    </>
  );
};

export default Navbar;
