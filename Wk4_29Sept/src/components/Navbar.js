import React from "react";
import { NavLink } from 'react-router-dom';

function Navbar(props) {
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
                    </ul>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Navbar;