import "./AppNavBar.css";

function AppNavBar(){
    return(
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
    )
}
export default AppNavBar;