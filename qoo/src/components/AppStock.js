import "./AppStock.css";
import AppNavBar from "./AppNavBar";

function AppStock(){
    return(
        <div className="right-body">
            <AppNavBar/>
            <h1 className="stock-area-header">Stock</h1>
            <div className="filter-line">
                <div className="search-zone">
                    <label for="productname" className="prod-text">Product name</label>
                    <input type="text" name="prodname" placeholder="" className="prod-search" required/>
                    <button className="prod-button" type="submit">search</button>
                    <label className="cate-text" for="">Category</label>
                    <select className="cate-select" name="cate" id="">
                        <option value="">Water tint</option>
                        <option value="">Essential mist</option>
                        <option value="">Liquid ink</option>
                        <option value="">Cleaners</option>
                        <option value="">Beauty tools</option>
                    </select>
                </div>
                <div className="add-zone">
                    <button className="add-button" type="">Add Product</button>

                </div>
            </div>
            
        </div>
    )
}
export default AppStock;