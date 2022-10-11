import React from "react";

function Navbar(props) {

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
                </ul>
            </div>
        </React.Fragment>
    )
}

export default Navbar;