import "./AppAddProduct.css";
import AppNavBar from "./AppNavBar";
import React, {useContext, useEffect, useState} from "react";
import axios from "axios";
import { AuthContext } from "../Auth";
import { useHistory } from "react-router-dom";
function AppAddOrder(){
    const history = useHistory();
    const { currentUser } = useContext(AuthContext);
    const [ OrderName, setOrder] = useState('');
    const [ Price, setPrice] = useState('');
    const [ Quantity, setQuantity] = useState('');
    const [ Date, setDate] = useState('');
    const [ Name, setName] = useState(currentUser.email);


    const handleSubmit = (event) => {
        event.preventDefault();
        const product = {OrderName,Price,Quantity,Date,Name}

        axios.post('https://sheet.best/api/sheets/925ca4d8-6106-409d-b521-86206538cbfb',product).then(response => {
            console.log(response);
        
        history.replace('/');
        });
    }

    return(
        <div className="right-body">
            <AppNavBar/>
            <h1 className="stock-area-header">Add Production</h1>
            <form onSubmit={handleSubmit}>
                <div className="box-of-top">
                    <div className="cus-data-area">
                        <div className="cus-data-line">
                            <label for="firstname" className="cus-data-text">Production Order Name:</label>
                            <input type="text" placeholder="" className="cus-data-box" 
                            onChange={(e) => setOrder(e.target.value)} required/>
                        </div>
                        <div className="cus-data-line">
                            <label className="cus-data-text">Price:</label>
                            <input type="tel" min  ='0'placeholder="" className="cus-data-box" 
                            onChange={(e) => setPrice(e.target.value)} required/>
                        </div>
                        <div className="cus-data-line">
                            <label className="cus-data-text">Quantity:</label>
                            <input type="number" min ='0'placeholder="" className="cus-data-box"
                            onChange={(e) => setQuantity(e.target.value)} required/>
                        </div>
                        <div className="cus-data-line">
                            <label className="cus-data-text">Date:</label>
                            <input className="prod-search" type="date" name="Date" 
                            onChange={(e) => setDate(e.target.value)} required/>
                        </div>
                        <div className="button-box">
                            <button type = 'submit'className="add-button" >Add Product</button>
                        
                        </div>
                    </div>
                </div>
            </form>
            
        </div>
    )
}
export default AppAddOrder;