import "./AppCustomer.css";
import AppNavBar from "./AppNavBar";

function AppCustomer(){
    return(
        <div className="right-body">
            <AppNavBar/>
            <h1 className="stock-area-header">Customer</h1>
            <div className="box-of-box">
                <div className="customer-search-box">
                    <h4>Customer Phone number</h4>
                    <input type="text" name="" placeholder="" className="cus-search" required/>
                    <button className="cus-button" type="submit">search</button>
                    <div className="button-box">
                        <button className="add-cus-button"  type="">Add Customer</button>

                    </div>
                </div>
            </div>
            
        </div>
    )
}
export default AppCustomer;