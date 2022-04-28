import { Link, useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";
import AppNavBar from "./AppNavBar";
import React , { useState , useEffect } from 'react'
import "./AppAddProduct.css";


function EditEmployee  () {
  const history = useHistory();
  const { rowIndex } = useParams();
  const [data, setData] = useState({
    fname:'',
    lname:'',
    gender:'',
    birthdate:'',
    address:'',
    phone:'',
    Email:''
  });

  const getData = async () => {
    try {
      const res = await fetch(
        `https://sheet.best/api/sheets/ae30387f-67af-4196-b596-e93bab926ac7/${rowIndex}`
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
        `https://sheet.best/api/sheets/ae30387f-67af-4196-b596-e93bab926ac7/${rowIndex}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );
      if (res.ok) {
        history.replace("/employee");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="right-body">
            <AppNavBar/>
            <h1 className="stock-area-header">Edit Employee</h1>
            <form className="box-of-top" onSubmit={handleSubmit}>
                <div className="cus-data-area">

                    <div className="cus-data-line">
                        <label for="fname" className="cus-data-text">Name:</label>
                        <input type="text" name="fname" className="cus-data-box" id="fname" 
                        value={data.fname} onChange={handleChange} required/>
                    </div>
                    <div className="cus-data-line">
                        <label for="lname" className="cus-data-text">Lastname:</label>
                        <input type="text" name="lname" className="cus-data-box" id="lname" 
                        value={data.lname} onChange={handleChange} required/>
                    </div>
                    <div className="cus-data-line">
                        <label for="Gender" className="cus-data-text">Gender:</label>
                            <select id="gender" name="gender" 
                            value={data.gender} onChange={handleChange} required>
                                <option value="male" >Male</option>
                                <option value="female">Female</option>
                                <option value="other">Other</option>
                            </select>
                    </div>
                    
                    <div className="cus-data-line">
                        <label for="birthdate" className="cus-data-text">Birthdate :</label>
                            <input type="date" max ="2004-12-31"id="birthdate" name="birthdate" 
                            value={data.birthdate} onChange={handleChange} required/>
                    </div>                 
                    <div className="cus-data-line">
                        <label for="address" className="cus-data-text">Address :</label>
                        <input type="text" name="address" className="cus-data-box" id="address" 
                        value={data.address} onChange={handleChange} required/>
                    </div>                 
                    <div className="cus-data-line">
                        <label for="phone" className="cus-data-text">Phone number :</label>
                        <input type="tel" name="phone" min ="0" maxlength="10" className="cus-data-box" 
                        value={data.phone} onChange={handleChange} required />
                    </div>                 
                
                </div>
                <a href="/employee">
                <button className="save-button" type="submit">Edit employee</button>
                </a>
            </form> 
        </div>
    )
};

export default EditEmployee;
