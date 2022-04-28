import React, { useReducer, useState } from 'react'
import { Redirect } from 'react-router-dom'
import firebaseConfig from '../../config'
import { Link,useHistory } from 'react-router-dom'
import axios from 'axios'
import "./AppAddProduct.css";
import AppNavBar from "./AppNavBar";

function SignUp ()  {
    const history = useHistory();
    const [currentUser, setCurrentUser] = useState(null);
    const [ id_card, setCard] = useState('');
    const [ fname, setFname] = useState('');
    const [ lname, setLname] = useState('');
    const [ gender, setGen] = useState('Male');
    const [ birthdate, setDate] = useState('');
    const [ address, setAddress] = useState('');
    const [ phone, setPhone] = useState('');
    const [ Email, setEmail] = useState('');
    
    
    const handleSubmit = (event) => {
        event.preventDefault();
        const { email, password } = event.target.elements;
        firebaseConfig.auth().createUserWithEmailAndPassword(email.value, password.value)
        .then((auth) => {
            history.push("/employee")
            setCurrentUser(true);
        })
        .catch(e => alert(e.message))

        const employ = {id_card, fname,lname,gender,birthdate,address,phone,Email};

        axios.post('https://sheet.best/api/sheets/ae30387f-67af-4196-b596-e93bab926ac7',employ).then(response => {
            console.log(response);
        });
        
    }

    if (currentUser) {
        return <Redirect to="/employee" />
    }
    return (
        
        <div className="right-body">
            <AppNavBar/>
            <h1 className="stock-area-header">Qoo - Employee Registration Form </h1>
                <form className="box-of-top" onSubmit={handleSubmit}>     
                <div className="cus-data-area">
                    <div className="cus-data-line">
                        <label for="id_card" className="cus-data-text">ID Card:</label>
                        <input type="tel" name="id_card" min ="0" maxlength="13" className="cus-data-box" 
                        onChange={(e) => setCard(e.target.value)} required/>
                    </div>
                    <div className="cus-data-line">
                        <label for="fname" className="cus-data-text">Name:</label>
                        <input type="text" name="fname" className="cus-data-box" id="fname" 
                        onChange={(e) => setFname(e.target.value)} required/>
                    </div>
                    <div className="cus-data-line">
                        <label for="lname" className="cus-data-text">Lastname:</label>
                        <input type="text" name="lname" className="cus-data-box" id="lname" 
                        onChange={(e) => setLname(e.target.value)} required/>
                    </div>
                    <div className="cus-data-line">
                        <label for="Gender" className="cus-data-text">Gender:</label>
                            <select id="gender" name="gender" 
                            onChange={(e) => setGen(e.target.value)} required>
                                <option value="male" >Male</option>
                                <option value="female">Female</option>
                                <option value="other">Other</option>
                            </select>
                    </div>
                    
                    <div className="cus-data-line">
                        <label for="birthdate" className="cus-data-text">Birthdate :</label>
                                    <input type="date" max ="2004-12-31"id="birthdate" name="birthdate" 
                                    onChange={(e) => setDate(e.target.value)} required/>
                    </div>                 
                    <div className="cus-data-line">
                        <label for="address" className="cus-data-text">Address :</label>
                        <input type="text" name="address" className="cus-data-box" id="address" 
                        onChange={(e) => setAddress(e.target.value)} required/>
                    </div>                 
                    <div className="cus-data-line">
                        <label for="phone" className="cus-data-text">Phone number :</label>
                        <input type="tel" name="phone" min ="0" maxlength="10" className="cus-data-box" id="exampleInputEmail1" 
                        aria-describedby="emailHelp" onChange={(e) => setPhone(e.target.value)} required />
                    </div>                 
                    <div className="cus-data-line">
                        <label for="exampleInputEmail1" className="cus-data-text">Email :</label>
                        <input type="email" name="email" className="cus-data-box" id="exampleInputEmail1" aria-describedby="emailHelp" 
                        onChange={(e) => setEmail(e.target.value)} required/>
                        <div id="emailHelp" className="form-text"></div>
                    </div>
                    <div className="cus-data-line">
                        <label for="exampleInputPassword1" className="cus-data-text">Password</label>
                        <input type="password" name="password" className="cus-data-box" id="exampleInputPassword1" required/>
                        <span id="passwordHelpInline" class="form-text"></span>Must be 6-20 characters long.
                    </div>
                    <div className='centered'>
                        <Link to="/employee" type="submit" className="btn btn-secondary">cancel</Link>
                        <button type="submit" className="btn btn-primary">Register</button> 
                    </div>
                </div>
            </form>
        </div>
    )
}

export default SignUp;
