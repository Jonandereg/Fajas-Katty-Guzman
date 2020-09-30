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
    <Menu.Item key='1'>
     <Link to='/product/2'>Faja a media pierna con espalda</Link> 
    </Menu.Item>
    <Menu.Item key='2'><Link to='/product/3'>Faja con sosten integrado</Link> </Menu.Item>
    <Menu.Item key='3'><Link to='/product/4'>Sosten con soporte en la espalda</Link> </Menu.Item>
  </Menu>
);

const menu2 = (
  <Menu>
    <Menu.Item key='1'>
      <Link to='/product/1'>Faja deportiva</Link>
    </Menu.Item>
    <Menu.Item key='2'>
      {' '}
      <Link to='/product/7'>Faja Moldeadora</Link>
    </Menu.Item>
  </Menu>
);
const menu3 = (
  <Menu>
    <Menu.Item key='1'>guantes para quemados</Menu.Item>  
  </Menu>
);

const Navbar: FunctionComponent = () => {
  const { activeUser } = useContext(UserContext);
  const sayHello = () => {
    if (activeUser && activeUser.email === '') return <h4>hello, Please Log in!</h4>;
    else if (activeUser) return <h4>Welcome Back {activeUser.firstName}!</h4>;
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
        <div className="Hello">
        {sayHello()}    
        </div>

        <div className='avatar'>
          <Login />
        </div>
      </div>
    </>
  );
};

export default Navbar;
