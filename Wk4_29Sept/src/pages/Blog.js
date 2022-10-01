import React from "react";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Blog() {
    return(
        <React.Fragment>
            <Navbar activePage="blog"/>
            <Header activePage="blog"/>
            <Footer/>
        </React.Fragment>
    )
}

export default Blog;