import React, { FunctionComponent,useState,useContext } from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import {  SkinOutlined, PieChartOutlined,  FileOutlined,  TeamOutlined,  UserOutlined,} from '@ant-design/icons';
import UserTable from '../testTable/testTable'
import MeasurementsTable from '../../adminComponents/measurementsTable/measurementsTable'
import './sideMenu.scss'
import UsersTable from '../usersTable/usersTable';
import Measurements from '../../measurementsInput/measurements';

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

const SideMenu:FunctionComponent= ()=> {
  const [collapsed,setCollapsed] = useState(false)
  const [renderedTable,setRenderedTable] = useState(0)

 function onCollapse (collapsed:boolean):void {
   const tryMe:boolean = collapsed
   setCollapsed(tryMe)
 }
  
 function renderTable () {
  if(!renderedTable) return <UsersTable/>
  else if (renderedTable=== 2) {
    return <MeasurementsTable/>
  }
 }

  return(
    <Layout style={{ minHeight: '100vh' }}>
      <div className="Sider">
        <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
          <div className="logo" />
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
            <Menu.Item key="1" icon={<TeamOutlined/>} onClick={()=>setRenderedTable(0)} >
             Users Overview
            </Menu.Item>
            <Menu.Item key="2" icon={<SkinOutlined /> } onClick={()=>setRenderedTable(2)} >
              User Meas
            </Menu.Item>
            <SubMenu key="sub1" icon={<UserOutlined />} title="User">
              <Menu.Item key="3">Tom</Menu.Item>
              <Menu.Item key="4">Bill</Menu.Item>
              <Menu.Item key="5">Alex</Menu.Item>
            </SubMenu>
            <SubMenu key="sub2" icon={<PieChartOutlined/>} title="Charts">
              <Menu.Item key="6">Team 1</Menu.Item>
              <Menu.Item key="8">Team 2</Menu.Item>
            </SubMenu>            
          </Menu>
        </Sider>
        </div>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }} />
          <Content style={{ margin: '0 16px' }}>
            
            <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
            <MeasurementsTable/>
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>Fajas Katty Guzman ©2025 Created by Coffee Overdose Desings</Footer>
        </Layout>
      </Layout>
  )
}



export default SideMenu