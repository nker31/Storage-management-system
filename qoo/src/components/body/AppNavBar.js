import "./AppNavBar.css";
import firebaseConfig from "../../config";

function AppNavBar(){
    return(
      <div className="nav-bar">
          
        <div className="profile-box">
          <div className="profile-box-left">
            <img className="profile-icon" src="./images/profile.png"/>

          </div>
          <div className="profile-box-right" >
            <p className="username-text" onClick={() => firebaseConfig.auth().signOut()}>username</p>
            <p className="user-role">role</p>
          </div>
        
       
        </div>
      
      </div>
    )
}
export default AppNavBar;