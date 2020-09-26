import React, { lazy, FunctionComponent } from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';

import Homepage from '../pages/home/home';
import Registerpage from '../pages/register/register';

const AppRoutes: FunctionComponent = () => {
  return (
    
      <Switch>
        <Route path='/register' exact={true} component={Registerpage} />
        <Route path='/' exact={true} component={Homepage} />
      </Switch>
    
  );
};

export default AppRoutes;
