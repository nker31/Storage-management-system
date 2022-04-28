import React from 'react';
import '../App.css';
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