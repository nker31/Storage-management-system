import React, {useContext} from "react";
import {Redirect} from "react-router-dom";
import { AuthContext } from "./Auth";
import firebaseConfig from "../config";
import './Header.css'
import './Dashboard.css'

function Dashboard()  {
    const { currentUser } = useContext(AuthContext);
    if (!currentUser) {
        return <Redirect to="/login"/>;
    
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
                            </div>
                </div>
            </div>
    )
}
export default Dashboard;