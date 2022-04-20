import './Roboto/Roboto-Regular.ttf'
import './App.css';
import AppSideBar from "./components/AppSideBar";
import AppSideBarEmployee from "./components/AppSideBarEmployee";
import AppDashboard from "./components/AppDashboard";
function App() {
  return (
    <div className="App">
      {/* <AppSideBar/> */}
      <AppSideBarEmployee/>
      <AppDashboard/>
      
      
    </div>
  );
}

export default App;
