import React, {useContext, useRef, useState} from "react";
import { Alert } from "react-bootstrap"
import {Redirect, useHistory ,Link} from "react-router-dom";
import { AuthContext  } from "./Auth";
import firebaseConfig from "../config";
import firebase from "../config";
import './Header.css'
import './Dashboard.css'

function Dashboard()  {
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
    const history = useHistory()
    const { currentUser,updatePassword } = useContext(AuthContext);

    if (!currentUser) {
        return <Redirect to="/login"/>;
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if (passwordRef.current.value !== passwordConfirmRef.current.value) {
            return setError("Passwords do not match")
          }
      
          const promises = []
          setLoading(true)
          setError("")
      
          if (passwordRef.current.value) {
            promises.push(updatePassword(passwordRef.current.value))
          }
      
          Promise.all(promises)
            .then(() => {
              history.push("/")
              window.location.reload();
            })
            .catch(() => {
              setError("Failed to update password")
            })
            .finally(() => {
              setLoading(false)
            })
    }

    return (
        <div className="header">
            <div className = "container">
                <div className = "header-con">
                    <div className = "logo-container">
                        <a href="/">Qoo - Welcome </a>
                        
                    </div>
                        <div className = "menu-logout">
                        <a href="/login" onClick={() => firebaseConfig.auth().signOut()} className="logout">Log out</a>
                        </div>
                    </div>
                            <div className= "dashboard">
                                <h1>Welcome {currentUser.email}</h1>
                                <p>This is your profile </p>
                                {error && <Alert variant="danger">{error}</Alert>}
                                <form onSubmit={handleSubmit}>
                                    <div className="mb-3">
                                        <label for="exampleInputPassword1" className="form-label">New Password </label>
                                        <input type="password" ref={passwordRef} className="form-control" id="exampleInputPassword1" required/>
                                        
                                    </div>
                                    <div className="mb-3">
                                        <label for="exampleInputPassword1" className="form-label">Confirm Password</label>
                                        <input type="password" ref={passwordConfirmRef} className="form-control" id="exampleInputPassword1" required/>
                                        <div id="emailHelp" className="form-text">Must be 6-20 characters long.</div>
                                    </div>
                                    <button type="submit" disabled={loading} className="btn btn-success">Change Password</button> 
                                </form>
                            </div>
                </div>
            </div>
    )
}
export default Dashboard;