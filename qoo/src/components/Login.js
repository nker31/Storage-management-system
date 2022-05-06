import React, { useContext } from 'react'
import { Redirect } from 'react-router-dom'
import { AuthContext } from './Auth'
import firebaseConfig from '../config'
import './Login.css'
import './Header.css'
import { Link,useHistory } from 'react-router-dom'
import Footer from './Footer'
function LogIn() {
    const history = useHistory();
    const handleSubmit = (event) => {
        const { email, password } = event.target.elements;
        event.preventDefault();
        firebaseConfig.auth().signInWithEmailAndPassword(email.value, password.value)
        .then((auth) => {
            history.push("/")
        })
        .catch(e => alert(e.message))
        
    }
    
    const { currentUser } = useContext(AuthContext);
    // const refresh = window.location.reload();
    if (currentUser) {
        history.replace('/');
        window.location.reload();
                
    }
    return (
        <>
        <div className="header-log">
            <div className = "container-log">
                <div className = "header-con-log">
                    <div className = "logo-login"><a href="/">Qoo - Storage Management System</a>
                    </div>
                </div>
            </div>
        </div>
                <div className="bg">
                    <div className="container mt-5">
                    <div className ="login-container">
                        <h1>Log In</h1>
                        <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label for="exampleInputEmail1" className="form-label">Email </label>
                            <input type="email" name="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            
                    </div>
                        <div className="mb-3">
                            <label for="exampleInputPassword1" className="form-label">Password</label>
                            <input type="password" name="password" className="form-control" id="exampleInputPassword1" />
                            <div id="emailHelp" className="form-text">Must be 6-20 characters long.</div>
                        </div>
                        <button type="submit" className="btn btn-success">Submit</button> 
                        
                        </form>
                    </div>
                </div>
        </div>
        <Footer/>
        </>
    )
}
export default LogIn;
