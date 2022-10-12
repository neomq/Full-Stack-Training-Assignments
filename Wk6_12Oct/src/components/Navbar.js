import React from "react";
import { NavLink } from 'react-router-dom';

class Navbar extends React.Component{

    render(){
        return(
            <nav className="navbar navbar-expand-lg bg-light">
                <div className="container-fluid">
                    <p className="navbar-brand m-0 p-0 px-3">Navbar</p>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/register">Register</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/login">Login</NavLink>
                            </li>                        
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }

}

export default Navbar;