import "./AppSideBar.css";

function AppSideBar(){
    return(
        <div className="side-bar">
            <div className="side-bar-logo-box">
                <a href="/"><img className="side-bar-logo" src="./images/Qoo.png" /></a>
            </div>
            <div className="menu-box">
            
                <div className="menu-box-item">
                  <a href="/">
                   <img className="menu-icon" src="./images/dashboard.png" />
                   <span className="menu-text">Dashboard</span> 
                  </a>
                </div>

                <div className="menu-box-item">
                <a href="/stock">
                  <img className="menu-icon" src="./images/stock.png" />
                   <span className="menu-text">Stock</span>
                </a>
                </div>
                  <div className="menu-box-item">
                    <a href="/sales">
                    <img className="menu-icon" src="./images/history.png" />
                    <span className="menu-text">Sale History</span>
                    </a>
                  </div>
                <div className="menu-box-item">
                  <a href="/customer">
                    <img className="menu-icon" src="./images/customer.png" />
                    <span className="menu-text">Customer</span>
                   </a>
                </div>
                <div className="menu-box-item">
                  <a href="/delivery">
                  <img className="menu-icon" src="./images/delivery.png" />
                   <span className="menu-text">Delivery</span> 
                   </a>
                </div>
                <div className="menu-box-item">
                  <a href="/employee">
                    <img className="menu-icon" src="./images/employee.png" />
                    <span className="menu-text">Employee</span> 
                  </a>
                </div>
                <div className="menu-box-item">
                  <a href="/production">
                    <img className="menu-icon" src="./images/production.png" />
                    <span className="menu-text">Production</span> 
                  </a>
                </div>
                <div className="menu-box-item">
                  <a href="/report">
                    <img className="menu-icon" src="./images/report.png" />
                    <span className="menu-text">Report</span>
                  </a> 
                </div>
            </div>
        </div>
    )
}
export default AppSideBar;