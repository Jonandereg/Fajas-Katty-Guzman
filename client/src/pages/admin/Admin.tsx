import React, { FunctionComponent } from 'react';
import Navbar from '../../components/navbar/navbar';
import SideMenu from '../../components/adminComponents/SideMenu/sideMenu'
import UsersTable from '../../components/adminComponents/usersTable/usersTable'
import TestTable from '../../components/adminComponents/testTable/testTable'



const AdminPage: FunctionComponent = () => {
  return (
    <>
      <Navbar />
      <div className='Home_Content'>
        <SideMenu />
        <div className='heroContent'>       
        </div>
      </div>      
    </>
  );
};

export default AdminPage;