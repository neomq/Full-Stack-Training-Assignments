import React from "react";
import { NavLink } from 'react-router-dom';

function PageHeader(props) {

    const displayPageName = () => {
        return <>
            {props.activePage === "about" ? "About Us"
            : props.activePage === "service" ? "Services"
            : props.activePage === "menu" ? "Menu"
            : props.activePage === "reservation" ? "Reservation"
            : props.activePage === "contact" ? "Contact"
            : null}
        </>
    }
        
    return(
        <div className="container-fluid page-header mb-5 position-relative overlay-bottom">
            <div className="d-flex flex-column align-items-center justify-content-center pt-0 pt-lg-5" style={{"minHeight": "400px"}}>
                <h1 className="display-4 mb-3 mt-0 mt-lg-5 text-white text-uppercase">{displayPageName()}</h1>
                <div className="d-inline-flex mb-lg-5">
                    <p className="m-0 text-white">
                        <NavLink className="text-white" to="/home">Home</NavLink>
                    </p>
                    <p className="m-0 text-white px-2">/</p>
                    <p className="m-0 text-white">{displayPageName()}</p>
                </div>
            </div>
        </div>
    )
}

export default PageHeader;