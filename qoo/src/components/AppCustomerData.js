import "./AppCustomerData.css";
import AppNavBar from "./AppNavBar";

function AppCustomerData(){
    return(
        <div className="right-body">
            <AppNavBar/>
            <h1 className="stock-area-header">Customer</h1>
            <div className="box-of-top">
                <div className="cus-data-area">
                    <div className="cus-data-line">
                        <label for="firstname" className="cus-data-text">Name:</label>
                        <input type="text" name="fname" placeholder="" className="cus-data-box"/>
                        <label for="lastname" className="cus-data-text">Lastname:</label>
                        <input type="text" name="lname" className="cus-data-box"></input>
                    </div>
                    <div className="cus-data-line">
                        <label for="email" className="cus-data-text">Email:</label>
                        <input type="email" name="email" placeholder="" className="cus-data-box" />
                    </div>
                    <div className="cus-data-line">
                        <label for="phoneNum" className="cus-data-text">Phone number:</label>
                        <input type="phone" name="" placeholder="" className="cus-data-box"/>
                    </div>
                    <div className="cus-data-line">
                        <label for="cusAddress" className="cus-data-text">Address:</label>
                        <input type="text" name="" placeholder="" className="cus-data-box"/><br/>
                        <input type="text" name="" placeholder="" className="cus-data-box-line2"/>
                    </div>
                </div>
                <div>
                    <button className="save-button" type="">Save</button>
                </div>
            </div>
            
        </div>
    )
}
export default AppCustomerData;