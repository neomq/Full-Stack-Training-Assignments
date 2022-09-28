import React from "react";
import { NavLink } from 'react-router-dom';

function Navbar() {
    return(
        <div className="container-fluid p-0 nav-bar">
            <nav className="navbar navbar-expand-lg bg-none navbar-dark py-3">
                <NavLink to="/home" className="navbar-brand px-lg-4 m-0">
                    <h1 className="m-0 display-4 text-uppercase text-white">KOPPEE</h1>
                </NavLink>
                <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                    <div className="navbar-nav ml-auto p-4">
                        <NavLink to="/home" className="nav-item nav-link active">Home</NavLink>
                        <NavLink to="/about" className="nav-item nav-link">About</NavLink>
                        <NavLink to="/service" className="nav-item nav-link">Service</NavLink>
                        <NavLink to="/menu" className="nav-item nav-link">Menu</NavLink>
                        <NavLink to="/reservation" className="nav-item nav-link">Reservation</NavLink>
                        <NavLink to="/contact" className="nav-item nav-link">Contact</NavLink>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;