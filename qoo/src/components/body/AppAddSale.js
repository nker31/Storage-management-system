import "./AppSaleHistory.css";
import "./AppAddProduct.css";
import AppNavBar from "./AppNavBar";
import React , { useState , useEffect } from 'react'
import axios from "axios";
import { useHistory } from "react-router-dom";

function AppAddSale(){
    const history = useHistory();
    const [data, setData] = useState();
    const [data1, setData1] = useState();
    const [Quant, setQuant] = useState();

    const [ Pname, setPname] = useState('');
    const [ Customer, setCustomer] = useState('');
    const [ Cate, setCate] = useState('Water tint');
    const [ Quantity, setQuantity] = useState('');
    const [ Status, setStatus] = useState('Pending');
    const [ Date, setDate] = useState('');
    const [ Total, setTotal] = useState('');
    
    const handleSubmit = (event) => {
        event.preventDefault();
        const product = {Pname,Customer,Cate,Quantity,Status,Date,Total};

        axios.post('https://sheet.best/api/sheets/72bdcffc-3da3-4905-b35f-6aaa8d783189',product).then(response => {
            console.log(response);
        history.replace('/sales');
        window.location.reload();
        });
    }


    
    const getData1 = async () => {
        try {
            const res = await fetch(
                "https://sheet.best/api/sheets/670762db-3d19-4d72-8348-85b19e894d9a?_format=index"
            );
            const data1 = await res.json();
            setData1(Object.keys(data1).map((key) => data1[key]));

            const renData1 = data1.map(function(element){
                    return `${element.Pname}`;
            });
            setPname(renData1[0]);

            const renDataQuan = data1.map(function(element){
                return `${element.Quantity}`;
            });
            setQuant(renDataQuan);

            console.log(Quant);

            } catch (error) {
            console.log(error);
            }
      };
    
    const getData = async () => {
        try {
            const res = await fetch("https://sheet.best/api/sheets/eb49899d-2f4e-486b-89ae-2e0b62fe96ba?_format=index");
            const data = await res.json();
            setData(Object.keys(data).map((key) => data[key]));

            const renData = data.map(function(element){
                return `${element.Name}`;
            });
            setCustomer(renData[0]);

            } catch (error) {
            console.log(error);
            }

    };
    console.log(Quant);
    useEffect(() => {
        getData();
        getData1();
      }, []);
   
    return (
    <div className="right-body">
        <AppNavBar/>
        <h1 className="stock-area-header">Add Sale History</h1>
        <form onSubmit={handleSubmit}>
            <div className="box-of-top">
                <div className="cus-data-area">
                    <div className="cus-data-line">
                            <label for="firstname" className="cus-data-text">Product Name:</label>
                            <select name='Productname' onChange={(e) => setPname(e.target.value)}>
                                {data1?.map((item) => (
                                    <option key={item.value} value={item.Pname}>
                                        {item.Pname}
                                    </option>
                                    
                                ))}
                            </select>
                    </div>
                    <div className="cus-data-line">
                            <label for="firstname" className="cus-data-text">Customer Name:</label>
                            <select name='Customer' onChange={(e) => setCustomer(e.target.value)}>
                                {data?.map((item) => (
                                    <option key={item.value} value={item.Name}>
                                        {item.Name}
                                    </option>
                                ))}
                            </select>
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
                        <label for="" className="cus-data-text">Quantity:</label>
                        <input type="number" min ='0' max={Quant} placeholder="" className="cus-data-box" 
                        onChange={(e) => setQuantity(e.target.value)} required/>
                    </div>

                    <div className="cus-data-line">
                        <label for="cusAddress" className="cus-data-text">Status:</label>
                        <select className="cus-data-box" 
                        onChange={(e) => setStatus(e.target.value)} required>
                            <option value="Water tint">Pending</option>
                            <option value="Essential mist">Finished</option>
                            <option value="Liquid ink">Cancelled</option>
                        </select>
                    </div>

                    <div className="cus-data-line">
                        <label for="cusAddress" className="cus-data-text">Date:</label>
                        <input className="prod-search" type="date" name="saleDate" 
                        onChange={(e) => setDate(e.target.value)} required/>
                    </div>
                    <div className="cus-data-line">
                        <label for="cusAddress" className="cus-data-text">Total:</label>
                        <input className="prod-search" name="Quantity" 
                        onChange={(e) => setTotal(e.target.value)}
                        />
                    </div>
                    <div className="button-box">
                        <button type = 'submit'className="add-button" >Add Sale History</button> 
                    </div>
                </div>
            </div>
        </form>
        
    </div>
    )
}

export default AppAddSale;