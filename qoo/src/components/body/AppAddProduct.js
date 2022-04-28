import "./AppAddProduct.css";
import AppNavBar from "./AppNavBar";
import React , { useState , useEffect } from 'react'
import axios from "axios";
import { useHistory } from "react-router-dom";
function AppAddProduct(){
    const history = useHistory();
    const [ Pname, setPname] = useState('');
    const [ Price, setPrice] = useState('');
    const [ Quantity, setQuantity] = useState('');
    const [ Cate, setCate] = useState('');
    const [ ProdLot, setLot] = useState('');
    const [ Date, setDate] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        const product = {Pname,Price,Quantity,Cate,ProdLot,Date};

        axios.post('https://sheet.best/api/sheets/670762db-3d19-4d72-8348-85b19e894d9a',product).then(response => {
            console.log(response);
        
        history.replace('/');
        });
    }

    return(
        <div className="right-body">
            <AppNavBar/>
            <h1 className="stock-area-header">Add Product</h1>
            <form onSubmit={handleSubmit}>
                <div className="box-of-top">
                    <div className="cus-data-area">
                        <div className="cus-data-line">
                                <label for="firstname" className="cus-data-text">Product Name:</label>
                                <input type="text" placeholder="" className="cus-data-box" 
                                onChange={(e) => setPname(e.target.value)} required/>
                        </div>
                            <label className="cate-text" for="">Category :</label>
                            <select name="cate" id="" onChange={(e) => setCate(e.target.value)}>
                                <option value="Water tint">Water tint</option>
                                <option value="Essential mist">Essential mist</option>
                                <option value="Liquid ink">Liquid ink</option>
                                <option value="Cleaners">Cleaners</option>
                                <option value="Beauty tools">Beauty tools</option>
                            </select>
                        <div className="cus-data-line">
                            <label for="email" className="cus-data-text">Price:</label>
                            <input type="tel" min  ='0'placeholder="" className="cus-data-box" 
                            onChange={(e) => setPrice(e.target.value)} required/>
                        </div>
                        <div className="cus-data-line">
                            <label for="" className="cus-data-text">Quantity:</label>
                            <input type="number" min ='0'placeholder="" className="cus-data-box"
                            onChange={(e) => setQuantity(e.target.value)} required/>
                        </div>
                        <div className="cus-data-line">
                            <label for="cusAddress" className="cus-data-text">Product order name:</label>
                            <input type="text" placeholder="" className="cus-data-box" 
                            onChange={(e) => setLot(e.target.value)} required/>

                        </div>
                        <div className="cus-data-line">
                            <label for="cusAddress" className="cus-data-text">Expiry date:</label>
                            <input className="prod-search" type="date" name="saleDate" 
                            onChange={(e) => setDate(e.target.value)} required/>
                        </div>
                        <div className="button-box">
                            <button type = 'submit'className="add-button" >Add Product</button>
                            <a href="/"><button className="add-button">cancel</button></a>
                        </div>
                    </div>
                </div>
            </form>
            
        </div>
    )
}
export default AppAddProduct;