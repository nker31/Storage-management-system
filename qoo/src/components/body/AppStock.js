import "./AppStock.css";
import AppNavBar from "./AppNavBar";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

function AppStock(){
    const [data, setData] = useState();

    const getData = async () => {
      try {
        const res = await fetch(
          "https://sheet.best/api/sheets/670762db-3d19-4d72-8348-85b19e894d9a?_format=index"
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
        const res = await fetch(`https://sheet.best/api/sheets/670762db-3d19-4d72-8348-85b19e894d9a/${rowIndex}`,
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
            <h1 className="stock-area-header">Stock</h1>
            <div className="filter-line">
                <div className="search-zone">
                    <label for="productname" className="prod-text">Product name</label>
                    <input type="text" name="prodname" placeholder="" className="prod-search" required/>
                    <button className="prod-button" type="submit">search</button>
                    <label className="cate-text" for="">Category</label>
                    <select className="cate-select" name="cate" id="">
                        <option value="">Water tint</option>
                        <option value="">Essential mist</option>
                        <option value="">Liquid ink</option>
                        <option value="">Cleaners</option>
                        <option value="">Beauty tools</option>
                    </select>
                </div>
                <div className="add-zone">
                    <a href="/add"><button className="add-button">Add Product</button></a>

                </div>
            </div>
            <div className="table-box">
              <table class= 'table'  >
                  <thead className="table-header">
                      <tr >
                        <th scope="col">Product</th>
                        <th scope="col">Price</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Category</th>
                        <th scope="col">Product lot</th>
                        <th scope="col">Expiry Date</th>
                        <th scope="col"></th>
                      </tr>
                    </thead>
                        {data?.map((item, i) => (
                            <tbody key={i}>
                              <tr>
                                <td>{item.Pname}</td>
                                <td>{item.Price}</td>
                                <td>{item.PriceUpdate}</td>
                                <td>{item.Cate}</td>
                                <td>{item.ProdLot}</td>
                                <td>{item.Date}</td>
                                <span><a href={`/edit/${i}`} style={{ textDecoration: "none" }}> Edit </a>
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
export default AppStock;
