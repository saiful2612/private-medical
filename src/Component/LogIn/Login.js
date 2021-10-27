import React, { useState } from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../Hook/useAuth';
import './Login.css'

const Login = () => {
    const{handleGoogleSignIn, handleCustomLogIn}=useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri= location.state?.from || '/home';

    const[email, setEmail]=useState('');
    const[password, setPassword]=useState('');


    const handleGoogleLogIn = () =>{

        handleGoogleSignIn()
        .then(result =>{
            history.push(redirect_uri);
            //const loggedInUser =result.user;
            //setUser(loggedInUser);
        })
    }

    const handleLogin = e =>{
        e.preventDefault()
        handleCustomLogIn(email, password)
        .then(result =>{
            history.push(redirect_uri);
            //const loggedInUser =result.user;
            //setUser(loggedInUser);
        })
    };

    const handleEMailChange = e =>{
        setEmail(e.target.value);
    };

    const handlePasswordChange = e =>{
        setPassword(e.target.value);
    }



    return (
        <div className="login-form">
            <div>
                <h2>Please Log In</h2>
                <form onSubmit={handleLogin}>
                    <input onBlur={handleEMailChange} type="email" />
                    <br />
                    <input onBlur={handlePasswordChange} type="password" />
                    <br />
                    <input type="Submit" value="log in"/>
                </form>
                <br />
                <p>New to Care? <Link to="/register">Create Account</Link></p>
                <div>--------------------------</div>
                <button className=" btn btn-warning" onClick={handleGoogleLogIn}>Google Sign in</button>
                <br />
            </div>
            
        </div>
    );
};

export default Login;