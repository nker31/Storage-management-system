import "./AppSideBar.css";

function AppSideBar(){
    return(
        <div className="side-bar">
            <div className="side-bar-logo-box">
                <img className="side-bar-logo" src="./images/Qoo.png" />
            </div>
            <div className="menu-box">
                <div className="menu-box-item">
                   <h4>Dashboard</h4> 
                </div>
                <div className="menu-box-item">
                   <h4>Stock</h4> 
                </div>
                <div className="menu-box-item">
                   <h4>Sale History</h4> 
                </div>
                <div className="menu-box-item">
                   <h4>Customer</h4> 
                </div>
                <div className="menu-box-item">
                   <h4>Delivery</h4> 
                </div>
                <div className="menu-box-item">
                   <h4>Employee</h4> 
                </div>
                <div className="menu-box-item">
                   <h4>Production</h4> 
                </div>
                <div className="menu-box-item">
                   <h4>Report</h4> 
                </div>
            </div>
        </div>
    )
}
export default AppSideBar;