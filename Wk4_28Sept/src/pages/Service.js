import React from "react";
import Navbar from "../components/Navbar";
import PageHeader from "../components/PageHeader";
import ServiceCtn from "../components/ServiceCtn";
import Footer from "../components/Footer";

function Service() {

    return(
        <React.Fragment>
            <Navbar activePage="service"/>
            <PageHeader activePage="service"/>
            <ServiceCtn/>
            <Footer/>
        </React.Fragment>
    )
}

export default Service;