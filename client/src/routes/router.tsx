import React, { lazy, FunctionComponent } from 'react';
import { Route, Switch} from 'react-router-dom';

import HomePage from '../pages/home/home';
import RegisterPage from '../pages/register/register';
import ProfilePage from '../pages/userProfile/userProfile'
import AdminPage from '../pages/admin/Admin'
import ProductPage from '../pages/product/product'

const AppRoutes: FunctionComponent = () => {
  return (
    
      <Switch>
        <Route path='/admin'  exact={true} component={AdminPage}/>
        <Route path ='/product/:pid' children ={<ProductPage/>}/>
        <Route path='/register' exact={true} component={RegisterPage} />
        <Route path='/profile' exact={true} component={ProfilePage}/>
        <Route path='/' exact={true} component={HomePage} />
      </Switch>
    
  );
};

export default AppRoutes;
