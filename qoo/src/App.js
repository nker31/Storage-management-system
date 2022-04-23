import './App.css';
import React , { useState , useEffect } from 'react'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
//import React, { Component } from 'react';
import Home from './components/Home'
import Dashboard from './components/Dashboard'
import LogIn from './components/Login'
import Signup from './components/SignUp'
import Main from './components/Main'
import { AuthProvider } from './components/Auth'

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <div>
          <Switch>
            <Route exact path = "/"><Main/></Route>
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/login" component={LogIn} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/home" component={Home} />
          </Switch>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
