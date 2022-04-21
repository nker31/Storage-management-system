import "./AppSideBar.css";

function AppSideBarEmployee(){
    return(
        <div className="side-bar">
            <div className="side-bar-logo-box">
                <img className="side-bar-logo" src="./images/Qoo.png" />
            </div>
            <div className="menu-box">
                <div className="menu-box-item">
                   <img className="menu-icon" src="./images/dashboard.png" />
                   <span className="menu-text">Dashboard</span> 
                </div>
                <div className="menu-box-item">
                  <img className="menu-icon" src="./images/stock.png" />
                   <span className="menu-text">Stock</span> 
                </div>
                <div className="menu-box-item">
                  <img className="menu-icon" src="./images/history.png" />
                   <span className="menu-text">Sale History</span> 
                </div>
                <div className="menu-box-item">
                  <img className="menu-icon" src="./images/customer.png" />
                   <span className="menu-text">Customer</span> 
                </div>
                <div className="menu-box-item">
                  <img className="menu-icon" src="./images/delivery.png" />
                   <span className="menu-text">Delivery</span> 
                </div>
                
                <div className="menu-box-item">
                  <img className="menu-icon" src="./images/production.png" />
                   <span className="menu-text">Production</span> 
                </div>
                
            </div>
        </div>
    )
}
export default AppSideBarEmployee;