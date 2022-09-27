import React from "react";

function Navbar() {

    return(
        <React.Fragment>
            <div className="sidebar shadow d-flex flex-column flex-shrink-0 bg-white p-4 rounded-4">
                <p className="m-0 fs-4 p-2 px-3">Assignment</p>
                <hr />
                <ul className="nav nav-pills flex-column mb-auto">
                    <li className="nav-item py-2">
                        <a href="postapi" className="nav-link">
                            Post API
                        </a>
                    </li>
                    <li className="nav-item py-2">
                        <a href="getapi"className="nav-link">
                            Get API
                        </a>
                    </li>
                    <li className="nav-item py-2">
                        <a href="conditional" className="nav-link">
                            Conditional CSS
                        </a>
                    </li>
                </ul>
                <hr />
                <a className="btn btn-primary py-2 custom-btn" href="/" role="button">Login</a>
            </div>
        </React.Fragment>
    )
}

export default Navbar;