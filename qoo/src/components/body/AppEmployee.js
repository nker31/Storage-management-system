import "./AppEmployee.css";
import AppNavBar from "./AppNavBar";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

function AppEmployee(){
    const [data, setData] = useState();

    const getData = async () => {
      try {
        const res = await fetch(
          "https://sheet.best/api/sheets/ae30387f-67af-4196-b596-e93bab926ac7?_format=index"
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
        const res = await fetch(`https://sheet.best/api/sheets/ae30387f-67af-4196-b596-e93bab926ac7/${rowIndex}`,
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
            <h1 className="stock-area-header">Employee</h1>
            <div className="filter-line">
                <div className="search-zone">
                    <label for="" className="prod-text">Employee ID:</label>
                    <input type="text" name="" placeholder="" className="prod-search" required/>
                    
                </div>
                <div className="add-zone">
                    <a href="/addemployee">
                        <button className="add-button" type="">Add Employee</button>
                    </a>

                </div>
            </div>
            
            <table class= 'table'>
                  <thead>
                      <tr>
                        <th scope="col">Employee ID</th>
                        <th scope="col">Firstname</th>
                        <th scope="col">Lastname</th>
                        <th scope="col">ID Card</th>
                        <th scope="col">Phone number</th>
                      </tr>
                    </thead>
                        {data?.map((item, i) => (
                            <tbody key={i}>
                              <tr>
                                <td>{item.fname}.{item.lname[0]}</td>
                                <td>{item.fname}</td>
                                <td>{item.lname}</td>
                                <td>{item.id_card}</td>
                                <td>{item.phone}</td>
                                <span><a href={`/editemployee/${i}`} style={{ textDecoration: "none" }}> Edit </a>
                                  <button className="btn btn-sm btn-danger ms-1" onClick={() => handleDelete(i)}> X </button>
                                </span>   
                              </tr>
                            </tbody>
                        ))}
                </table>
        </div>
    )
}
export default AppEmployee;