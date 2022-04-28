import './App.css';
import React , { useState , useEffect ,useContext} from 'react'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import Home from './components/Home'
import Dashboard from './components/Dashboard'
import LogIn from './components/Login'
import Signup from './components/SignUp'
import Main from './components/Main'
import { AuthProvider } from './components/Auth'
import AppStock from './components/body/AppStock'
import AppAddProduct from './components/body/AppAddProduct';
import Edit from './components/body/Edit';
import AppNavBar from './components/body/AppNavBar';
import AppSideBarEmployee from './components/AppSideBarEmployee';
import AppSideBar from './components/AppSideBar';
import SwitchPage from './components/body/SwitchPage';
import AppSaleHistory from './components/body/AppSaleHistory';
import AppAddSale from './components/body/AppAddSale';
import EditSales from './components/body/EditSales';
import AppCustomerData from './components/body/AppCustomerData';
import AppCustomer from './components/body/AppCustomer';
import AppDelivery from './components/body/AppDelivery';
import AppAddDelivery from './components/body/AppAddDelivery';
import EditDelivery from './components/body/EditDelivery';

import AppEmployee from './components/body/AppEmployee';
import AppProduction from './components/body/AppProduction';
import AppReportMenu from './components/body/AppReportMenu';
import AppAddEmployee from './components/body/AppAddEmployee';
import EditEmployee from './components/body/EditEmployee';
import AppAddOrder from './components/body/AppAddOrder';
import EditProduction from './components/body/EditProduction';
import AppReportType from './components/body/AppReportType';

function App () {

  return (
    <AuthProvider>
      <Router>
        <div>
          <Switch>
            <Route exact path = "/"><Main/></Route>
            <Route exact path="/main" component={Main} />
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/login" component={LogIn} />
            <Route exact path="/home" component={Home} />
            <div className='App'>
              <AppSideBar/>
              <Switch>
                <Route exact path="/stock" component={AppStock} />
                <Route exact path="/add" component={AppAddProduct} />
                <Route exact path="/edit/:rowIndex" component={Edit} />
                <Route exact path='/sales' component={AppSaleHistory} />
                <Route exact path='/addsales' component={AppAddSale} />

                <Route exact path="/editsale/:rowIndex" component={EditSales} />
                <Route exact path='/customer' component={AppCustomer} />
                <Route exact path='/addcustomer' component={AppCustomerData} />

                <Route exact path='/delivery' component={AppDelivery} />
                <Route exact path='/adddelivery' component={AppAddDelivery} />
                <Route exact path="/editdelivery/:rowIndex" component={EditDelivery} />

                <Route exact path='/employee' component={AppEmployee} />
                <Route exact path='/addemployee' component={AppAddEmployee} />
                <Route exact path="/editemployee/:rowIndex" component={EditEmployee} />

                <Route exact path='/production' component={AppProduction} />
                <Route exact path='/addorder' component={AppAddOrder} />
                <Route exact path="/editproduction/:rowIndex" component={EditProduction} />

                <Route exact path='/report' component={AppReportMenu} />
                <Route exact path='/reporttype' component={AppReportType} />
              </Switch>
            </div>
          </Switch>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
