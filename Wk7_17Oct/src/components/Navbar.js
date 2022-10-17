import React from "react";
import { NavLink } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";

const BASE_API_URL = "http://localhost:8080/user";

function Navbar(props) {

    const navigate = useNavigate();
    const [isLoggedIn,setIsLoggedIn] = useState(false);
    useEffect(() => {
        if (localStorage.getItem("token") !== null) {
            setIsLoggedIn(true);
        } else {
            setIsLoggedIn(false);
        }
    }, [])

    const userLogout = async () => {
        let user_id = localStorage.getItem("id"); 
        let token = localStorage.getItem("token");
        
        fetch(BASE_API_URL + "/logout/" + user_id, {
            method: "POST",
            headers: {
                "content-type": "application/json",
                "token": token,
                "user_id": user_id
            }
        }).then(response => {
            if (!response.ok) {
                throw response;
            }
                return response.json();
        }).then(response => {
                localStorage.clear();
                setIsLoggedIn(false);
                navigate("/login");
        }).catch(error => { 
            error.json()
            .then(error => {
                console.log(error)
            });
        })
    }

    return(
        <React.Fragment>
            <div id="header">
                <div>
                    <a href="/" className="logo"><img src="images/logo.png" alt="..."/></a>
                    <ul id="navigation">
                        <li className={props.activePage === "home"? "selected" : "menu"}>
                            <NavLink to="/">Home</NavLink>
                        </li>
                        <li className={props.activePage === "about"? "menu selected" : "menu"}>
                            <a href="/about">About</a>
                            <ul className="primary">
                                <li>
                                    <NavLink to="/product">Product</NavLink>
                                </li>
                            </ul>
                        </li>
                        <li className={props.activePage === "blog"? "selected" : "menu"}>
                            <NavLink to="/blog">Blog</NavLink>
                        </li>
                        <li className={props.activePage === "contact"? "selected" : "menu"}>
                            <NavLink to="/contact">Contact</NavLink>
                        </li>
                        {/* <li className={props.activePage === "login"? "selected" : "menu"}>
                            <NavLink to="/login">Login</NavLink>
                        </li> */}
                        {isLoggedIn
                            ? 
                            <li className="menu">
                                <NavLink onClick={userLogout}>Logout</NavLink>
                            </li>
                            : 
                            <li className={props.activePage === "login" ? "selected" : "menu"}>
                                <NavLink to="/login">Login</NavLink>
                            </li>
                        }
                    </ul>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Navbar;