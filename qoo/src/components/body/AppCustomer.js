import "./AppCustomer.css";
import AppNavBar from "./AppNavBar";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";


function AppCustomer(){
    let sheet = 'https://sheet.best/api/sheets/00f964f2-635b-4dde-9adf-bb51f439ae75';
    const [data, setData] = useState();

    const getData = async () => {
      try {
        const res = await fetch("https://sheet.best/api/sheets/00f964f2-635b-4dde-9adf-bb51f439ae75?_format=index");
        const data = await res.json();
        setData(Object.keys(data).map((key) => data[key]));
      } catch (error) {
        console.log(error);
      }
    };
  
    useEffect(() => {
      getData();
    }, []);
  
    return(
        <div className="right-body">
            <AppNavBar/>            
            <div className="filter-line">
                <div className="search-zone">
                    <label for="productname" className="prod-text">Customer name</label>
                    <input type="text" name="custoname" placeholder="" className="prod-search" required/>
                    <button className="prod-button" type="submit">search</button>

                </div>
                <div className="add-zone">
                    <a href="/addcustomer"><button className="add-button">Add Customer</button></a>
                </div>
            </div>
            <table class= 'table'>
                  <thead>
                      <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Lastname</th>
                        <th scope="col">Email</th>
                        <th scope="col">Phone</th>
                        <th scope="col">Address</th>
                      </tr>
                    </thead>
                        {data?.map((item, i) => (
                            <tbody key={i}>
                              <tr>
                                <td>{item.Name}</td>
                                <td>{item.Lastname}</td>
                                <td>{item.Email}</td>
                                <td>{item.Phone}</td>
                                <td>{item.Address}</td>
                              </tr>
                            </tbody>
                        ))}
                </table>
            
        </div>
    )
}
export default AppCustomer;