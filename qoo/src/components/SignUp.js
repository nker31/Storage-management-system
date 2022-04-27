import React, { useReducer, useState } from 'react'
import { Redirect } from 'react-router-dom'
import firebaseConfig from '../config'
import './Login.css'
import './Header.css'
import { Link,useHistory } from 'react-router-dom'
import axios from 'axios'
const formReducer = (state, e) => {
    return {
      ...state,
      [e.name]: e.value
    }
   }

function SignUp ()  {
    const history = useHistory();
    const [currentUser, setCurrentUser] = useState(null);
    const [formData , setFormData] = useReducer(formReducer,{});
    const [ id_card, setCard] = useState('');
    const [ fname, setFname] = useState('');
    const [ lname, setLname] = useState('');
    const [ gender, setGen] = useState('Male');
    const [ birthdate, setDate] = useState('');
    const [ address, setAddress] = useState('');
    const [ phone, setPhone] = useState('');
    
    
    const handleSubmit = (event) => {
        event.preventDefault();
        const { email, password } = event.target.elements;
        firebaseConfig.auth().createUserWithEmailAndPassword(email.value, password.value)
        .then((auth) => {
            history.push("/")
            setCurrentUser(true);
        })
        .catch(e => alert(e.message))

        const employ = {id_card, fname,lname,gender,birthdate,address,phone};

        axios.post('https://sheet.best/api/sheets/ae30387f-67af-4196-b596-e93bab926ac7',employ).then(response => {
            console.log(response);
        });
        
    }
    const handleChange = (e) => {
        setFormData({
            name:e.target.name,
            value:e.target.value,
        });
        console.log(e.target.value)
    }

    if (currentUser) {
        return <Redirect to="/" />
    }
    return (
        <>
        <div className="header-log">
            <div className = "container-log">
                <div className = "header-con-log">
                    <div className = "logo-login"><a href="/">Qoo - Employee Registration Form</a>
                    </div>
                </div>
            </div>
            </div>
                <div className="bg">
                    <div className="container mt-5">
                        <div className ="login-container">
                            <form onSubmit={handleSubmit}>
                            
                            <div className="mb-3">
                                <label for="id_card" className="form-label">ID Card:</label>
                                <input type="tel" name="id_card" min ="0" maxlength="13" className="form-control" onChange={(e) => setCard(e.target.value)}/>
                            </div>
                            <div className="mb-3">
                                <label for="fname" className="form-label">Name:</label>
                                <input type="text" name="fname" className="form-control" id="fname" onChange={(e) => setFname(e.target.value)}/>
                            </div>
                            <div className="mb-3">
                                <label for="lname" className="form-label">Lastname:</label>
                                <input type="text" name="lname" className="form-control" id="lname" onChange={(e) => setLname(e.target.value)}/>
                            </div>
                            <div className="mb-3">
                                <label for="Gender" className="form-label">Gender:</label>
                                <div>
                                    <select id="gender" name="gender" onChange={(e) => setGen(e.target.value)}>
                                        <option value="male" >Male</option>
                                        <option value="female">Female</option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>
                            </div>
                            
                            <div className="mb-3">
                                <label for="birthdate" className="form-label">Birthdate :</label>
                                        <div>
                                            <input type="date" max ="2004-12-31"id="birthdate" name="birthdate" onChange={(e) => setDate(e.target.value)}/>
                                        </div>
                            </div>

                            <div className="mb-3">
                                <label for="address" className="form-label">Address :</label>
                                <input type="text" name="address" className="form-control" id="address" onChange={(e) => setAddress(e.target.value)}/>
                            </div>

                            <div className="mb-3">
                                <label for="phone" className="form-label">Phone number :</label>
                                <input type="tel" name="phone" min ="0" maxlength="10" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e) => setPhone(e.target.value)}/>
                            </div>


                            <div className="mb-3">
                                <label for="exampleInputEmail1" className="form-label">Email :</label>
                                <input type="email" name="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                <div id="emailHelp" className="form-text"></div>
                            </div>
                            <div className="mb-3">
                                <label for="exampleInputPassword1" className="form-label">Password</label>
                                <input type="password" name="password" className="form-control" id="exampleInputPassword1" />
                                <span id="passwordHelpInline" class="form-text"></span>Must be 6-20 characters long.
                            </div>
                            
                            <div className='centered'>
                                <Link to="/employee" type="submit" className="btn btn-secondary">cancel</Link>
                                <button type="submit" className="btn btn-primary">Register</button> 
                            </div>
                            </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SignUp;