import "./AppSaleHistory.css";
import AppNavBar from "./AppNavBar";

function AppSaleHistory(){
    return(
        <div className="right-body">
            <AppNavBar/>
            <h1 className="stock-area-header">Sales History</h1>
            <div className="filter-line">
                <div className="search-zone">
                    <label for="productname" className="prod-text">Product name:</label>
                    <input type="text" name="prodname" placeholder="" className="prod-search" required/>
                    <button className="prod-button" type="submit">search</button>
                    <label for="customername" className="prod-text">Customer name:</label>
                    <input type="text" name="cusname" placeholder="" className="prod-search" required/>
                    <button className="prod-button" type="submit">search</button>
                    <label className="prod-text" for="saleDate">Date:</label>
                    <input className="prod-search" type="date" name="saleDate" />
                </div>
                <div className="add-zone">
                    <button className="add-button" type="">Add Sale History</button>

                </div>
            </div>
            
        </div>
    )
}
export default AppSaleHistory;