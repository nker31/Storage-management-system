import "./AppSaleHistory.css";
import AppNavBar from "./AppNavBar";
import React , { useState , useEffect } from 'react'
import axios from "axios";
import { useHistory } from "react-router-dom";

function AppSaleHistory(){
    const [data, setData] = useState();
    const [search,setSearch] = useState('');
    const getData = async () => {
      try {
        const res = await fetch(
          "https://sheet.best/api/sheets/72bdcffc-3da3-4905-b35f-6aaa8d783189?_format=index"
        );
        const data = await res.json();
        setData(Object.keys(data).map((key) => data[key]));
        } catch (error) {
        console.log(error);
        }
    };

    useEffect(() => {
        getData();
      }, []);

    const handleDelete = async (rowIndex) => {
      try {
        const res = await fetch(`https://sheet.best/api/sheets/72bdcffc-3da3-4905-b35f-6aaa8d783189/${rowIndex}`,
          {
            method: "DELETE",
          }
        );
        if (res.ok) {
          const updatedData = data.filter((_, i) => i !== rowIndex);
          setData(updatedData);
        }
      } catch (error) {
        console.log(error);
      }
    };



    return(
        <div className="right-body">
            <AppNavBar/>
            <h1 className="stock-area-header">Sales History</h1>
            <div className="filter-line">
                <form className="search-zone" >
                    <label for="productname" className="prod-text">Product name:</label>
                    <input type="text" name="search" placeholder="" className="prod-search" onChange={(e) => setSearch(e.target.value)}/>
                    <button className="prod-button" type="submit">search</button>
                    <label for="customername" className="prod-text">Customer name:</label>
                    <input type="text" name="cusname" placeholder="" className="prod-search"/>
                    <button className="prod-button" type="submit">search</button>
                    <label className="prod-text" for="saleDate">Date:</label>
                    <input className="prod-search" type="date" name="saleDate" />
                </form>
                <div className="add-zone">
                    <a href='/addsales'><button className="add-button" type="">Add Sale History</button></a>

                </div>
            </div>
            <div className="table-box">
            <table class= 'table'>
                  <thead className="table-header">
                      <tr>
                        <th scope="col">Product</th>
                        <th scope="col">Customer</th>
                        <th scope="col">Category</th>
                        <th scope="col">Price</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Status</th>
                        <th scope="col">Date</th>
                        <th scope="col">Total</th>
                        <th scope="col"></th>
                      </tr>
                    </thead>
                        {data?.map((item, i) => (
                            <tbody key={i}>
                              <tr>
                                <td>{item.Pname}</td>
                                <td>{item.Customer}</td>
                                <td>{item.Cate}</td>
                                <td>{item.Price}</td>
                                <td>{item.Quantity}</td>
                                <td>{item.Status}</td>
                                <td>{item.Date}</td>
                                <td>{item.Total}</td>
                                <span><a href={`/editsale/${i}`} style={{ textDecoration: "none" }}> Edit </a>
                                  <button className="btn btn-sm btn-danger ms-1" onClick={() => handleDelete(i)}> X </button>
                                </span>   
                              </tr>
                            </tbody>
                        ))}
                </table>
                </div>
        </div>
    )
}
export default AppSaleHistory;