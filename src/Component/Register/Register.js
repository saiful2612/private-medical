import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react/cjs/react.development';
import useAuth from '../../Hook/useAuth';

const Register = () => {
    const{handleGoogleSignIn, handleCustomRegistration}=useAuth();
    const[email, setEmail]=useState('');
    const[password, setPassword]=useState('')


    const handleRegistration = e =>{
        e.preventDefault()
        handleCustomRegistration(email, password);
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
                <h2>Please Register</h2>
                <form onSubmit={ handleRegistration}>
                    <input onBlur={handleEMailChange} type="email" />
                    <br />
                    <input onBlur={handlePasswordChange} type="password" />
                    <br />
                    <input type="submit" value="Submit" />
                </form>
                <br />
                <p>Already a member? <Link to="/login">Go to login</Link></p>
                <div>-------------------------</div>
                <button onClick={handleGoogleSignIn}>Google Sign In</button>
                <br />
                
            </div>
        </div>
    );
};

export default Register;