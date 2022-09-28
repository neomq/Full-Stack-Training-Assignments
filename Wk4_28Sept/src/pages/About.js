import React from "react";
import Navbar from "../components/Navbar";
import PageHeader from "../components/PageHeader";
import AboutCtn from "../components/AboutCtn";
import Footer from "../components/Footer";

function About() {

    return(
        <React.Fragment>
            <Navbar activePage="about"/>
            <PageHeader activePage="about"/>
            <AboutCtn/>
            <Footer/>
        </React.Fragment>
    )
}

export default About;