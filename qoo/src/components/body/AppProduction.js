import "./AppProduction.css";
import AppNavBar from "./AppNavBar";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

function AppProduction(){
    const [data, setData] = useState();

    const getData = async () => {
      try {
        const res = await fetch(
          "https://sheet.best/api/sheets/925ca4d8-6106-409d-b521-86206538cbfb?_format=index"
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
        const res = await fetch(`https://sheet.best/api/sheets/925ca4d8-6106-409d-b521-86206538cbfb/${rowIndex}`,
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
            <h1 className="stock-area-header">Production</h1>
            <div className="filter-line">
                <div className="search-zone">
                    <label for="" className="prod-text">Production Order Name:</label>
                    <input type="text" name="" placeholder="" className="prod-search" required/>
                    <button className="prod-button" type="submit">search</button>
                    <label for="" className="prod-text">Employee name:</label>
                    <input type="text" name="" placeholder="" className="prod-search" required/>
                    <button className="prod-button" type="submit">search</button>
                    <label className="prod-text" for="">Date:</label>
                    <input className="prod-search" type="date" name="saleDate" />
                </div>
                <div className="add-zone">
                    <button className="add-button" type="">Add Production History</button>
                </div>
            </div>
            
            <table class= 'table'>
                  <thead>
                      <tr>
                        <th scope="col">Product order name</th>
                        <th scope="col">Price</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Date</th>
                        <th scope="col">Order recipient name</th>
                      </tr>
                    </thead>
                        {data?.map((item, i) => (
                            <tbody key={i}>
                              <tr>
                                <td>{item.Product}</td>
                                <td>{item.Price}</td>
                                <td>{item.Quantity}</td>
                                <td>{item.Date}</td>
                                <td>{item.Name}</td>
                                <span><a href={`/editproduction/${i}`} style={{ textDecoration: "none" }}> Edit </a>
                                  <button className="btn btn-sm btn-danger ms-1" onClick={() => handleDelete(i)}> X </button>
                                </span>   
                              </tr>
                            </tbody>
                        ))}
                </table>
        </div>
    )
}
export default AppProduction;