import "./AppEmployee.css";
import AppNavBar from "./AppNavBar";

function AppEmployee(){
    return(
        <div className="right-body">
            <AppNavBar/>
            <h1 className="stock-area-header">Employee</h1>
            <div className="filter-line">
                <div className="search-zone">
                    <label for="" className="prod-text">Employee ID:</label>
                    <input type="text" name="" placeholder="" className="prod-search" required/>
                    
                </div>
                <div className="add-zone">
                    <button className="add-button" type="">Add Employee</button>

                </div>
            </div>
            
        </div>
    )
}
export default AppEmployee;