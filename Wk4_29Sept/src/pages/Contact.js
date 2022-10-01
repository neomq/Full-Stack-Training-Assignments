import React from "react";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Contact() {
    return(
        <React.Fragment>
            <Navbar activePage="contact"/>
            <Header activePage="contact"/>
            <Footer/>
        </React.Fragment>
    )
}

export default Contact;