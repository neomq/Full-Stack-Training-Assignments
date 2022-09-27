import React from "react";
import { useEffect, useState } from 'react';

function Navbar(props) {

    const [isLoggedIn,setIsLoggedIn] = useState(false);
    useEffect(() => {
        if (localStorage.getItem("token") != undefined && localStorage.getItem("token") != '') {
            setIsLoggedIn(true);
        } else {
            setIsLoggedIn(false);
        }
    }, [])

    return(
        <React.Fragment>
            <div className="sidebar shadow d-flex flex-column flex-shrink-0 bg-white p-4 rounded-4">
                <p className="m-0 fs-4 p-2 px-3">Assignment</p>
                <hr />
                <ul className="nav nav-pills flex-column mb-auto">
                    <li className="nav-item py-2">
                        <a href="postapi" className={props.activePage==="postapi"?"nav-link py-3 active":"nav-link py-3"}>
                            Post API
                        </a>
                    </li>
                    <li className="nav-item py-2">
                        <a href="getapi" className={props.activePage==="getapi"?"nav-link py-3 active":"nav-link py-3"}>
                            Get API
                        </a>
                    </li>
                    <li className="nav-item py-2">
                        <a href="conditional" className={props.activePage==="conditional"?"nav-link py-3 active":"nav-link py-3"}>
                            Conditional CSS
                        </a>
                    </li>
                </ul>
                <hr />
                {isLoggedIn
                ?<a className="btn btn-primary py-2" href="/" role="button">Logout</a>
                :<a className="btn btn-primary py-2" href="/" role="button">Login</a>}
                
            </div>
        </React.Fragment>
    )
}

export default Navbar;