import React,{ lazy, FunctionComponent } from 'react';
import {Route , Switch, BrowserRouter as Router } from 'react-router-dom';

import  Homepage from '../pages/home/home'
import Register from '../pages/register/register'




const AppRoutes:FunctionComponent = () => {

return (
  <Router> 
  <Switch>
    <Route path='/register' exact={true} component={Register} />
    <Route path='/' exact={true} component={Homepage} />
  </Switch>
  </Router>
)  
}


export default AppRoutes
