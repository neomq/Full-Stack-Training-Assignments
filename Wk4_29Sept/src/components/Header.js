import React from "react";

function Header(props) {

    const displayHeaderName = () => {
        return <>
            {props.activePage === "about" ? "About"
            : props.activePage === "product" ? "Product"
            : props.activePage === "blog" ? "Blog"
            : props.activePage === "contact" ? "Contact"
            : null}
            </>
    }

    return(
        <React.Fragment>
            <div id="body">
                <div class="header">
                    <div>
                        <h1>{displayHeaderName()}</h1>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Header;