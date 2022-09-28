import React from "react";
import Navbar from "../components/Navbar";
import PageHeader from "../components/PageHeader";
import ReserveCtn from "../components/ReserveCtn";
import Footer from "../components/Footer";

function Reservation() {

    return(
        <React.Fragment>
            <Navbar/>
            <PageHeader/>
            <ReserveCtn/>
            <Footer/>
        </React.Fragment>
    )
}

export default Reservation;