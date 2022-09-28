import React from "react";
import Navbar from "../components/Navbar";
import Carousel from "../components/Carousel";
import AboutCtn from "../components/AboutCtn";
import ServiceCtn from "../components/ServiceCtn";
import Offer from "../components/Offer";
import MenuCtn from "../components/MenuCtn";
import ReserveCtn from "../components/ReserveCtn";
import Footer from "../components/Footer";

function Home() {
    return(
        <React.Fragment>
            <Navbar/>
            <Carousel/>
            <AboutCtn/>
            <ServiceCtn/>
            <Offer/>
            <MenuCtn/>
            <ReserveCtn/>
            <Footer/>
        </React.Fragment>
    )
}

export default Home;