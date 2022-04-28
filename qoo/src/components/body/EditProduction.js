import { Link, useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";
import AppNavBar from "./AppNavBar";
import React , { useState , useEffect } from 'react'
import "./AppAddProduct.css";


function EditProduction  () {
  const history = useHistory();
  const { rowIndex } = useParams();
  const [data, setData] = useState({
    OrderName:'',
    Price:'',
    Quantity:'',
    Date:''
  });

  const getData = async () => {
    try {
      const res = await fetch(
        `https://sheet.best/api/sheets/925ca4d8-6106-409d-b521-86206538cbfb/${rowIndex}`
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
        `https://sheet.best/api/sheets/925ca4d8-6106-409d-b521-86206538cbfb/${rowIndex}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );
      if (res.ok) {
        history.replace("/production");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="right-body">
            <AppNavBar/>
            <h1 className="stock-area-header">Edit Production</h1>
            <form className="box-of-top" onSubmit={handleSubmit}>
                <div className="cus-data-area">
                    <div className="cus-data-line">
                        <label for="firstname" className="cus-data-text">Production Order Name:</label>
                        <input type="text" placeholder="" className="cus-data-box"  name="OrderName"
                        value={data.OrderName} onChange={handleChange} required/>
                    </div>
                    <div className="cus-data-line">
                        <label className="cus-data-text">Price:</label>
                        <input type="tel" min  ='0'placeholder="" className="cus-data-box"  name='Price'
                        value={data.Price} onChange={handleChange} required></input>
                        
                    </div>
                    <div className="cus-data-line">
                        <label className="cus-data-text">Quantity:</label>
                        <input type="number" min ='0'placeholder="" className="cus-data-box" name='Quantity'
                        value={data.Quantity} onChange={handleChange} required/>
                    </div>
                    <div className="cus-data-line">
                        <label for="phoneNum" className="cus-data-text">Date:</label>
                        <input type="date" name='Date'className="cus-data-box" 
                        value={data.Date} onChange={handleChange} required/>
                    </div>
                </div>
                <a href="/production">
                <button className="save-button" type="submit">Edit Production</button>
                </a>
            </form> 
        </div>
    )
};

export default EditProduction;
