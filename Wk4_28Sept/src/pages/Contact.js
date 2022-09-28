import React from "react";
import Navbar from "../components/Navbar";
import PageHeader from "../components/PageHeader";
import ContactCtn from "../components/ContactCtn";
import Footer from "../components/Footer";

function Contact() {

    return(
        <React.Fragment>
            <Navbar activePage="contact"/>
            <PageHeader activePage="contact"/>
            <ContactCtn/>
            <Footer/>
        </React.Fragment>
    )
}

export default Contact;