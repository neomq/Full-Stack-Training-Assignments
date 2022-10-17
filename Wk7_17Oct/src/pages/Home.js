import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { NavLink } from 'react-router-dom';

function Home() {
    return(
        <React.Fragment>
            <Navbar activePage="home"/>
            
            <div id="body" className="home">
                <div className="header">
                    <img src="images/bg-home.jpg" alt="..."/>
                        <div>
                            <NavLink to="/product">Freeze Delight</NavLink>
                        </div>
                </div>
                <div className="body">
                    <div>
                        <div>
                            <h1>NEW PRODUCT</h1>
                            <h2>The Twist of Healthy Yogurt</h2>
                            <p>This website template has been designed by freewebsitetemplates.com for you, for free. You can replace all this text with your own text.</p>
                        </div>
                        <img src="images/yogurt.jpg" alt="..."/>
                    </div>
                </div>
                <div className="footer">
                    <div>
                        <ul>
                            <li>
                                <NavLink to="/product" className="banner product"></NavLink>
                                <h1>PRODUCTS</h1>
                            </li>
                            <li>
                                <NavLink to="/about" className="banner about"></NavLink>
                                <h1>OUR STORY</h1>
                            </li>
                            <li>
                                <NavLink to="/product" className="banner flavor"></NavLink>
                                <h1>FLAVORS</h1>
                            </li>
                            <li>
                                <NavLink to="/contact" className="banner contact"></NavLink>
                                <h1>OUR LOCATION</h1>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <Footer/>
        </React.Fragment>
    )
}

export default Home;