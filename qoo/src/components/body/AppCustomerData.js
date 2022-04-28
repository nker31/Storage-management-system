import "./AppCustomerData.css";
import AppNavBar from "./AppNavBar";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
function AppCustomerData(){
    const history = useHistory();
    const [ Name, setName] = useState('');
    const [ Lastname, setLastname] = useState('');
    const [ Email, setEmail] = useState('');
    const [ Phone, setPhone] = useState('');
    const [ Address, setAddress] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        const customer = {Name,Lastname,Email,Phone,Address};

        axios.post('https://sheet.best/api/sheets/00f964f2-635b-4dde-9adf-bb51f439ae75',customer).then(response => {
            console.log(response);
        
        history.replace('/customer');
        });
    }

    return(

        <div className="right-body">
            <AppNavBar/>
            <h1 className="stock-area-header">Customer Registration Form</h1>
            <form className="box-of-top" onSubmit={handleSubmit}>
                <div className="cus-data-area">
                    <div className="cus-data-line">
                        <label for="firstname" className="cus-data-text">Name:</label>
                        <input type="text" placeholder="" className="cus-data-box" 
                        onChange={(e) => setName(e.target.value)} required/>
                    </div>
                    <div className="cus-data-line">
                        <label for="lastname" className="cus-data-text">Lastname:</label>
                        <input type="text" className="cus-data-box"
                        onChange={(e) => setLastname(e.target.value)} required></input>
                        
                    </div>
                    <div className="cus-data-line">
                        <label for="email" className="cus-data-text">Email:</label>
                        <input type="email" name="email" placeholder="" className="cus-data-box" 
                        onChange={(e) => setEmail(e.target.value)} required/>
                    </div>
                    <div className="cus-data-line">
                        <label for="phoneNum" className="cus-data-text">Phone number:</label>
                        <input type="tel" name="" placeholder="" className="cus-data-box"
                        onChange={(e) => setPhone(e.target.value)} required/>
                    </div>
                    <div className="cus-data-line">
                        <label for="cusAddress" className="cus-data-text">Address:</label>
                        <input type="text" name="" placeholder="" className="cus-data-box"
                        onChange={(e) => setAddress(e.target.value)} required/>
                        <br/>
                    </div>
                </div>
                <button className="save-button" type="submit">Register</button>
            </form> 
                
        </div>
    )
}
export default AppCustomerData;