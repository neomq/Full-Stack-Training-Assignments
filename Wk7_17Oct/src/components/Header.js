import React from "react";

function Header(props) {

    const displayHeaderName = () => {
        return <>
            {props.activePage === "about" ? "About"
            : props.activePage === "product" ? "Product"
            : props.activePage === "blog" ? "Blog"
            : props.activePage === "contact" ? "Contact"
            : props.activePage === "login" ? "Login"
            : null}
            </>
    }

    return(
        <React.Fragment>
            <div id="body">
                <div className="header">
                    <div>
                        <h1>{displayHeaderName()}</h1>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Header;