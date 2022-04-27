import { Link, useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";
import AppNavBar from "./AppNavBar";
import React , { useState , useEffect } from 'react'
import "./AppAddProduct.css";


function EditDelivery  () {
  const history = useHistory();
  const { rowIndex } = useParams();
  const [data, setData] = useState({Tracking:'',
  Customer:'',
  Quantity:'',
  Date:'',
  Address:''
  });

  const getData = async () => {
    try {
      const res = await fetch(
        `https://sheet.best/api/sheets/5a12a409-bc6a-44f9-8b1e-85949f930aec/${rowIndex}`
      );
      const data = await res.json();
      setData(data[0]);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const handleChange = (e) =>
    setData({ ...data, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(
        `https://sheet.best/api/sheets/5a12a409-bc6a-44f9-8b1e-85949f930aec/${rowIndex}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );
      if (res.ok) {
        history.replace("/delivery");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="right-body">
            <AppNavBar/>
            <h1 className="stock-area-header">Edit Sale History</h1>
            <form className="box-of-top" onSubmit={handleSubmit}>
                <div className="cus-data-area">
                    <div className="cus-data-line">
                        <label for="firstname" className="cus-data-text">Tracking Number:</label>
                        <input type="text" name='Tracking'className="cus-data-box" 
                        value={data.Tracking} onChange={handleChange} required/>
                    </div>
                    <div className="cus-data-line">
                        <label for="lastname" className="cus-data-text">Customer:</label>
                        <input type="text" className="cus-data-box" name="Customer"
                        value={data.Customer} onChange={handleChange} required></input>
                        
                    </div>
                    <div className="cus-data-line">
                        <label className="cus-data-text">Quantity:</label>
                        <input type="number" name="Quantity" className="cus-data-box" 
                        value={data.Quantity} onChange={handleChange} required/>
                    </div>
                    <div className="cus-data-line">
                        <label for="phoneNum" className="cus-data-text">Date:</label>
                        <input type="date" name='Date'className="cus-data-box"
                        value={data.Date} onChange={handleChange} required/>
                    </div>
                    <div className="cus-data-line">
                        <label for="cusAddress" className="cus-data-text">Address:</label>
                        <input type="text" name="Address"className="cus-data-box"
                        value={data.Address} onChange={handleChange} required/>
                        <br/>
                    </div>
                </div>
                <a href="/delivery">
                <button className="save-button" type="submit">Edit Delivery</button>
                </a>
            </form> 
        </div>
    )
};

export default EditDelivery;
