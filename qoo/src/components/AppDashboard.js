import "./AppDashboard.css";
import AppNavBar from "./AppNavBar";
function AppDashboard(){
    return(
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
                <div className="topic-box">
                  <img className="hot-sale" src="./images/hot-sale.png" />
                  <h4 className="topic-text">สินค้าขายดีประจำวัน</h4>
                </div>
                <div className="detail-box">
                  <p>SC#baremelon 20</p> 
                </div>
              </div>
              <div className="right-box">
                <div className="topic-box">
                  <img className="alert" src="./images/alert.png" />
                  <h4 className="topic-text">สินค้าใกล้หมดในสต็อก</h4>
                </div>
                <div className="detail-box">
                  <p>SC#baremelon 20</p> 
                </div>
              </div>
            </div>
            <div className="under-part">
              <div className="long-box">
                <div className="topic-box">
                  
                  <img className="shipping" src="./images/shipping.png" />
                  <h4 className="topic-text">สินค้าที่ถูกจัดส่งล่าสุด</h4>
                  
                </div>
                <div className="detail-box">
                  <p>SC#baremelon 20</p> 
                </div>
              </div>
            </div>
          </div>
          <div className="right-part">
            <div className="tall-box">
              <div className="topic-box">
                <img className="cart" src="./images/cart.png" />
                <h4 className="topic-text">รายจ่ายสินค้าที่ขายล่าสุด</h4>
                
              </div>
              <div className="detail-box">
                  <p>SC#baremelon 20</p> 
                </div>
            </div>
          </div>
          

          

        </div>
      </div>
    )
}
export default AppDashboard;