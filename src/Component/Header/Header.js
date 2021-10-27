import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../Hook/useAuth';
import './Header.css';

const Header = () => {
    const{user, logout}=useAuth();
    console.log(user.displayName);
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/home">CARE</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav nav-element">
                        <Link className="nav-link" aria-current="page" to="/home">Home</Link>
                        <Link className="nav-link" to="services">Facilities</Link>
                        <Link className="nav-link" to="/about">Why We</Link>
                        <Link className="nav-link" to="/specialCare">Special Care</Link>
                        <Link style={{fontWeight:600, color:'white'}} className="nav-link" to="/home">{user.displayName}</Link>
                    {!user.email ?<Link className="nav-link" to="/login">Login</Link>
                        :<button onClick={logout} className="btn btn-light">Log Out</button>}

                    </div>
                </div>
  </div>
</nav>
        </div>
    );
};

export default Header;