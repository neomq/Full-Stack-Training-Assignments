import React from "react";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Product() {
    return(
        <React.Fragment>
            <Navbar activePage="product"/>
            <Header activePage="product"/>
            <Footer/>
        </React.Fragment>
    )
}

export default Product;