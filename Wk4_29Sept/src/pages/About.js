import React from "react";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Footer from "../components/Footer";

function About() {
    return(
        <React.Fragment>
            <Navbar activePage="about"/>
            <Header activePage="about"/>
            <Footer/>
        </React.Fragment>
    )
}

export default About;