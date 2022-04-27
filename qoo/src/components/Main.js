import React from 'react';
import '../App.css';
import AppSideBarEmployee from './AppSideBarEmployee'
import { Route, Switch ,Router} from 'react-router-dom';
import AppStock from './body/AppStock';
import AppAddProduct from './body/AppAddProduct';
import Edit from './body/Edit';
import SwitchPage from './body/SwitchPage';
import AppDashboard from './AppDashboard'
function Main()  {
  return (
        <div className="App">
          <SwitchPage/>
          <AppDashboard/>
        </div>
  );
}

export default Main;