import './Roboto/Roboto-Regular.ttf'
import './App.css';
import AppSideBar from "./components/AppSideBar";
import AppSideBarEmployee from "./components/AppSideBarEmployee";
import AppDashboard from "./components/AppDashboard";
import AppStock from "./components/AppStock";
import AppSaleHistory from './components/AppSaleHistory';
import AppDelivery from './components/AppDelivery';
import AppEmployee from './components/AppEmployee';
import AppProduction from './components/AppProduction';
// import AppNavBar from './components/AppNavBar';


function App() {
  return (
    <div className="App">
      <AppSideBar/>
      {/* <AppSideBarEmployee/> */}
      {/* <AppDashboard/> */}
      {/* <AppStock/> */}
      {/* <AppSaleHistory/> */}
      {/* <AppDelivery/>*/}
      {/* <AppEmployee/> */}
      <AppProduction/>

      
    </div>
  );
}

export default App;
