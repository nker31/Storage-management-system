import './Roboto/Roboto-Regular.ttf'
import './App.css';
import AppSideBar from "./components/AppSideBar";
import AppSideBarEmployee from "./components/AppSideBarEmployee";
import AppDashboard from "./components/AppDashboard";
import AppStock from "./components/AppStock";
// import AppNavBar from './components/AppNavBar';


function App() {
  return (
    <div className="App">
      <AppSideBar/>
      {/* <AppSideBarEmployee/> */}
      {/* <AppDashboard/> */}
      <AppStock/>
      

      
    </div>
  );
}

export default App;
