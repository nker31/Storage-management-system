import "./AppProduction.css";
import AppNavBar from "./AppNavBar";

function AppProduction(){
    return(
        <div className="right-body">
            <AppNavBar/>
            <h1 className="stock-area-header">Production</h1>
            <div className="filter-line">
                <div className="search-zone">
                    <label for="" className="prod-text">Production Order Name:</label>
                    <input type="text" name="" placeholder="" className="prod-search" required/>
                    <button className="prod-button" type="submit">search</button>
                    <label for="" className="prod-text">Employee name:</label>
                    <input type="text" name="" placeholder="" className="prod-search" required/>
                    <button className="prod-button" type="submit">search</button>
                    <label className="prod-text" for="">Date:</label>
                    <input className="prod-search" type="date" name="saleDate" />
                </div>
                <div className="add-zone">
                    <button className="add-button" type="">Add Production History</button>
                </div>
            </div>
            
        </div>
    )
}
export default AppProduction;