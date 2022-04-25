import "./AppAddProduct.css";
import AppNavBar from "./AppNavBar";

function AppAddProduct(){
    return(
        <div className="right-body">
            <AppNavBar/>
            <h1 className="stock-area-header">Add Product</h1>
            <div className="box-of-top">
                <div className="cus-data-area">
                    <div className="cus-data-line">
                            <label for="firstname" className="cus-data-text">Product Name:</label>
                            <input type="text" name="" placeholder="" className="cus-data-box"/>
                    </div>
                    <div className="cus-data-line">
                        <label for="email" className="cus-data-text">Price:</label>
                        <input type="email" name="" placeholder="" className="cus-data-box" />
                    </div>
                    <div className="cus-data-line">
                        <label for="" className="cus-data-text">Quantity:</label>
                        <input type="" name="" placeholder="" className="cus-data-box"/>
                    </div>
                    <div className="cus-data-line">
                        <label for="cusAddress" className="cus-data-text">Production lot:</label>
                        <input type="" name="" placeholder="" className="cus-data-box"/>

                    </div>
                    <div className="cus-data-line">
                        <label for="cusAddress" className="cus-data-text">Expiry date:</label>
                        <input className="prod-search" type="date" name="saleDate" />
                    </div>
                    <div className="button-box">
                        <button className="add-button" type="">Add Product</button>
                        <button className="add-button" type="">cancel</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default AppAddProduct;