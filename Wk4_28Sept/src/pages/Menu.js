import React from "react";
import Navbar from "../components/Navbar";
import PageHeader from "../components/PageHeader";
import MenuCtn from "../components/MenuCtn";
import Footer from "../components/Footer";

function Menu() {

    return(
        <React.Fragment>
            <Navbar/>
            <PageHeader/>
            <MenuCtn/>
            <Footer/>
        </React.Fragment>
    )
}

export default Menu;