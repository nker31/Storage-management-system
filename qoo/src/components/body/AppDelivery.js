import "./AppDelivery.css";
import "./AppCustomer.css";
import AppNavBar from "./AppNavBar";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

function AppDelivery(){
    let sheet = 'https://sheet.best/api/sheets/5a12a409-bc6a-44f9-8b1e-85949f930aec';
    const [data, setData] = useState();

    const getData = async () => {
      try {
        const res = await fetch("https://sheet.best/api/sheets/5a12a409-bc6a-44f9-8b1e-85949f930aec?_format=index");
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
          const res = await fetch(`https://sheet.best/api/sheets/5a12a409-bc6a-44f9-8b1e-85949f930aec/${rowIndex}`,
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
            <h1 className="stock-area-header">Delivery</h1>
            <div className="filter-line">
                <div className="search-zone">
                    <label for="" className="prod-text">Tracking number:</label>
                    <input type="text" name="" placeholder="" className="prod-search" required/>
                    <button className="prod-button" type="submit">search</button>
                    <label for="" className="prod-text">Customer name:</label>
                    <input type="text" name="" placeholder="" className="prod-search" required/>
                    <button className="prod-button" type="submit">search</button>
                    <label className="prod-text" for="">Date:</label>
                    <input className="prod-search" type="date" name="saleDate" />
                </div>
                <div className="add-zone">
                    <a href="/adddelivery">
                    <button className="add-button" type="">Add delivery history</button>
                    </a>
                </div>
            </div>
            <div className="table-box">
            <table class= 'table'>
                  <thead className="table-header">
                      <tr>
                        <th scope="col">Tracking</th>
                        <th scope="col">Customer</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Date</th>
                        <th scope="col">Address</th>
                        <th scope="col"></th>
                      </tr>
                    </thead>
                        {data?.map((item, i) => (
                            <tbody key={i}>
                              <tr>
                                <td>{item.Tracking}</td>
                                <td>{item.Customer}</td>
                                <td>{item.Quantity}</td>
                                <td>{item.Date}</td>
                                <td>{item.Address}</td>
                                <span><a href={`/editdelivery/${i}`} style={{ textDecoration: "none" }}> Edit </a>
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
export default AppDelivery;