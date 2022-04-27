import { Link, useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";
import AppNavBar from "./AppNavBar";
import React , { useState , useEffect } from 'react'
import "./AppAddProduct.css";


function Edit  () {
  const history = useHistory();
  const { rowIndex } = useParams();
  const [data, setData] = useState({
    Pname:"",
    Price:"",
    Quantity:"",
    Cate:"",
    ProdLot:"",
    Date:""
  });

  const getData = async () => {
    try {
      const res = await fetch(
        `https://sheet.best/api/sheets/670762db-3d19-4d72-8348-85b19e894d9a/${rowIndex}`
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
        `https://sheet.best/api/sheets/670762db-3d19-4d72-8348-85b19e894d9a/${rowIndex}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );
      if (res.ok) {
        history.replace("/");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="right-body">
            <AppNavBar/>
            <h1 className="stock-area-header">Edit Product</h1>
            <form onSubmit={handleSubmit}>
                <div className="box-of-top">
                    <div className="cus-data-area">
                        <div className="cus-data-line">
                                <label for="firstname" className="cus-data-text">Product Name:</label>
                                <input type="text" className="cus-data-box" name="Pname" value ={data.Pname} onChange={handleChange}/>
                        </div>
                            <label className="cate-text" for="">Category :</label>
                            <select name="Cate" value ={data.Cate} onChange={handleChange} >
                                <option value="Water tint">Water tint</option>
                                <option value="Essential mist">Essential mist</option>
                                <option value="Liquid ink">Liquid ink</option>
                                <option value="Cleaners">Cleaners</option>
                                <option value="Beauty tools">Beauty tools</option>
                            </select>
                        <div className="cus-data-line">
                            <label for="email" className="cus-data-text">Price:</label>
                            <input type="tel" min  ='0' className="cus-data-box" name ="Price" value ={data.Price} onChange={handleChange}/>
                        </div>
                        <div className="cus-data-line">
                            <label for="" className="cus-data-text">Quantity:</label>
                            <input type="number" min ='0' className="cus-data-box" name ="Quantity" value ={data.Quantity} onChange={handleChange}/>
                        </div>
                        <div className="cus-data-line">
                            <label for="cusAddress" className="cus-data-text">Production lot:</label>
                            <input className="cus-data-box" name="ProdLot" value ={data.ProdLot} onChange={handleChange}/>

                        </div>
                        <div className="cus-data-line">
                            <label for="cusAddress" className="cus-data-text">Expiry date:</label>
                            <input className="prod-search" type="date" name="Date" value ={data.Date} onChange={handleChange}/>
                        </div>
                        <div className="button-box">
                            <button className="add-button" >Add Product</button>
                            <a href='/'>
                              <button className="add-button" >cancel</button>
                            </a>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
};

export default Edit;
