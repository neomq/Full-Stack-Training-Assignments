import React from "react";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Product() {
    return(
        <React.Fragment>
            <Navbar activePage="product"/>
            <Header activePage="product"/>

            <div id="body">
                <div>
                    <ul>
                        <li>
                            <h1>All Time Classic</h1>
                            <p>This website template has been designed by freewebsitetemplates.com for you, for free.</p>
                        </li>
                        <li>
                            <img src="images/kiwi.jpg" alt="..."/>
                                <h2>Kiwi</h2>
                        </li>
                        <li>
                            <img src="images/mango.jpg" alt="..."/>
                                <h2>Mango</h2>
                        </li>
                        <li>
                            <img src="images/cantaloupe.jpg" alt="..."/>
                                <h2>Cantaloupe</h2>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <h1>Berry Special</h1>
                            <p>This website template has been designed by freewebsitetemplates.com for you, for free.</p>
                        </li>
                        <li>
                            <img src="images/blackberry.jpg" alt="..."/>
                                <h2>blackberry</h2>
                        </li>
                        <li>
                            <img src="images/strawberry.jpg" alt="..."/>
                                <h2>Strawberry</h2>
                        </li>
                        <li>
                            <img src="images/blueberry.jpg" alt="..."/>
                                <h2>BLUEBERRY</h2>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <h1>Fruit Blast</h1>
                            <p>This website template has been designed by freewebsitetemplates.com for you, for free.</p>
                        </li>
                        <li>
                            <img src="images/grapes.jpg" alt="..."/>
                                <h2>Grapes</h2>
                        </li>
                        <li>
                            <img src="images/green-apple.jpg" alt="..."/>
                                <h2>Green Apple</h2>
                        </li>
                        <li>
                            <img src="images/pineapple.jpg" alt="..."/>
                                <h2>Pineapple</h2>
                        </li>
                    </ul>
                </div>
            </div>
            <Footer/>
        </React.Fragment>
    )
}

export default Product;