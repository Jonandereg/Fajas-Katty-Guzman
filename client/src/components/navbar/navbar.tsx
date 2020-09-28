import React, { FunctionComponent, useContext } from 'react';
import { BrowserRouter as Router, Link, Redirect } from 'react-router-dom';
import { Menu, Dropdown, Avatar, Button } from 'antd';
import { DownOutlined, UserOutlined } from '@ant-design/icons';
import Login from '../login pop up/login';
import User from '../../types/user';

import './navbar.scss';
import { UserContext } from '../../App';

function handleclick() {
  return <Redirect to='/register' />;
}

const menu1 = (
  <Menu>
    <Menu.Item key='1' onClick={handleclick}>
      1st menu item
    </Menu.Item>
    <Menu.Item key='2'>2nd memu item</Menu.Item>
    <Menu.Item key='3'>3rd menu item</Menu.Item>
  </Menu>
);

const menu2 = (
  <Menu>
    <Menu.Item key='1'>
      <Link to='/'>just go home you are drunk</Link>
    </Menu.Item>
    <Menu.Item key='2'>
      {' '}
      <Link to='/register'>trying new stuf</Link>
    </Menu.Item>
  </Menu>
);
const menu3 = (
  <Menu>
    <Menu.Item key='1'>third thing weird menu stuff</Menu.Item>
    <Menu.Item key='2'>trying new stuf</Menu.Item>
  </Menu>
);

const Navbar: FunctionComponent = () => {
  const { activeUser } = useContext(UserContext);
  const sayHello = () => {
    if (activeUser && activeUser.email === '') return <h1>hello</h1>;
    else if (activeUser) return <h1>{activeUser.firstName}</h1>;
  };

  return (
    <>
      <div className='container_nav'>
        <Link to='/'>
          <div className='nav_logo'></div>
        </Link>
        <div className='Dmenu'>
          <Dropdown overlay={menu1}>
            <a href='' className='ant-dropdown-link' onClick={e => e.preventDefault()}>
              Cosmetic Surgery <DownOutlined />
            </a>
          </Dropdown>
          <Dropdown overlay={menu2}>
            <a href='' className='ant-dropdown-link'onClick={e => e.preventDefault()}>
              Slim <DownOutlined />
            </a>
          </Dropdown>
          <Dropdown overlay={menu3}>
            <a href='' className='ant-dropdown-link'onClick={e => e.preventDefault()}>
              Burns<DownOutlined />
            </a>
          </Dropdown>
        </div>
        {sayHello()}        
        <div className='avatar'>
          <Login />
        </div>
      </div>
    </>
  );
};

export default Navbar;
