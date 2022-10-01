import React from "react";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Footer from "../components/Footer";

function About() {
    return(
        <React.Fragment>
            <Navbar activePage="blogpost"/>
            <Header activePage="blogpost"/>       
            <Footer/>
        </React.Fragment>
    )
}

export default About;