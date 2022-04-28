import "./AppAddProduct.css";
import AppNavBar from "./AppNavBar";
import React , { useState , useEffect } from 'react'
import axios from "axios";
import { useHistory } from "react-router-dom";
function AppAddProduct(){
    const history = useHistory();
    const [ Tracking, setTracking] = useState('');
    const [ Customer, setCustomer] = useState('');
    const [ Quantity, setQuantity] = useState('');
    const [ Date, setDate] = useState('');
    const [ Address, setAddress] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        const product = {Tracking,Customer,Quantity,Date,Address};

        axios.post('https://sheet.best/api/sheets/5a12a409-bc6a-44f9-8b1e-85949f930aec',product).then(response => {
            console.log(response);
        
        history.replace('/delivery');
        });
    }

    return(

        <div className="right-body">
            <AppNavBar/>
            <h1 className="stock-area-header">Add delivery history</h1>
            <form className="box-of-top" onSubmit={handleSubmit}>
                <div className="cus-data-area">
                    <div className="cus-data-line">
                        <label for="firstname" className="cus-data-text">Tracking Number:</label>
                        <input type="text" placeholder="" className="cus-data-box" 
                        onChange={(e) => setTracking(e.target.value)} required/>
                    </div>
                    <div className="cus-data-line">
                        <label for="lastname" className="cus-data-text">Customer:</label>
                        <input type="text" className="cus-data-box"
                        onChange={(e) => setCustomer(e.target.value)} required></input>
                        
                    </div>
                    <div className="cus-data-line">
                        <label className="cus-data-text">Quantity:</label>
                        <input type="number" name="quantity" placeholder="" className="cus-data-box" 
                        onChange={(e) => setQuantity(e.target.value)} required/>
                    </div>
                    <div className="cus-data-line">
                        <label for="phoneNum" className="cus-data-text">Date:</label>
                        <input type="date" placeholder="" className="cus-data-box"
                        onChange={(e) => setDate(e.target.value)} required/>
                    </div>
                    <div className="cus-data-line">
                        <label for="cusAddress" className="cus-data-text">Address:</label>
                        <input type="text" name="" placeholder="" className="cus-data-box"
                        onChange={(e) => setAddress(e.target.value)} required />
                        <br/>
                    </div>
                    <div className="save-bt-box">
                        <button className="save-button" type="submit">Add Delivery</button> 
                    </div>

                </div>
            </form> 
                
        </div>
    )
}
export default AppAddProduct;