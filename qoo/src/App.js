
import './App.css';
import AppSideBar from "./components/AppSideBar";
function App() {
  return (
    <div className="App">
      <AppSideBar/>
      <div className="right-body">
        <div className="nav-bar">
          
          <div className="profile-box">
            <div className="profile-box-left">
              <img className="profile-icon" src="./images/profile.png"/>

            </div>
            <div className="profile-box-right">
              <p className="username-text">username</p>
              <p className="user-role">role</p>
            </div>
            
           
          </div>
          
        </div>
        <h1 className="db-area-header">Dashboard</h1>
        <div className="db-area">
          <div className="left-part">
            <div className="two-in-one">
              <div className="left-box">

              </div>
              <div className="right-box">

              </div>
            </div>
            <div className="under-part">
              <div className="long-box">

              </div>
            </div>
          </div>
          <div className="right-part">
            <div className="tall-box">

            </div>
          </div>
          

          

        </div>
      </div>
      
    </div>
  );
}

export default App;
