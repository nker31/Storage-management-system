import React from 'react';
import '../App.css';
import SwitchPage from './body/SwitchPage';
import AppDashboard from './AppDashboard'
import { useEffect, useState } from "react"
function Main()  {

  return (
        <div className="App" >
          <SwitchPage />
          <AppDashboard/>
        </div>
  );
}

export default Main;