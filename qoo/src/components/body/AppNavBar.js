import React, {useContext} from "react";
import "./AppNavBar.css";
import { AuthContext } from "../Auth";

function AppNavBar(){
    const { currentUser } = useContext(AuthContext);
    return(
      <div className="nav-bar">
          
        <div className="profile-box">
          <div className="profile-box-left">
            <img className="profile-icon" src="./images/profile.png"/>

          </div>
          <a href = '/dashboard'>
          <div className="profile-box-right" >
            <p className="username-text" >{currentUser.email}</p>
          </div>

          </a>
        
       
        </div>
      
      </div>
    )
}
export default AppNavBar;