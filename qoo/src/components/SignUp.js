import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'
import firebaseConfig from '../config'
import './Login.css'
import './Header.css'
import { Link,useHistory } from 'react-router-dom'
function SignUp ()  {
    const history = useHistory();
    const [currentUser, setCurrentUser] = useState(null);

    const handleSubmit = (event) => {
        event.preventDefault();
        const { email, password } = event.target.elements;
        firebaseConfig.auth().createUserWithEmailAndPassword(email.value, password.value)
        .then((auth) => {
            history.push("/")
            setCurrentUser(true);
        })
        .catch(e => alert(e.message))
    }
    if (currentUser) {
        return <Redirect to="/" />
    }
    return (
        <>
        <div className="header-log">
            <div className = "container-log">
                <div className = "header-con-log">
                    <div className = "logo-login"><a href="/">Qoo - Sign in</a>
                    </div>
                </div>
            </div>
            </div>
                <div className="bg">
                    <div className="container mt-5">
                        <div className ="login-container">
                            <h1>Sign Up</h1>
                            <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <label for="exampleInputEmail1" className="form-label">Email address</label>
                                <input type="email" name="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                            </div>
                            <div className="mb-3">
                                <label for="exampleInputPassword1" className="form-label">Password</label>
                                <input type="password" name="password" className="form-control" id="exampleInputPassword1" />
                                <span id="passwordHelpInline" class="form-text"></span>Must be 6-20 characters long.
                            </div>
                            <button type="submit" className="btn btn-success">SignUp</button> 
                            <h5 className="form-text">If you have Email You can</h5> 
                            <Link to="/login" type="submit" className="btn btn-primary">Login</Link>
                            </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SignUp;
