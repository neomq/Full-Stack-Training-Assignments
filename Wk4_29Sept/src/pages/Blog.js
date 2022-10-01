import React from "react";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Blog() {
    return(
        <React.Fragment>
            <Navbar activePage="blog"/>
            <Header activePage="blog"/>

            <div id="body">
                <div class="blog">
                    <div class="featured">
                        <ul>
                            <li>
                                <img src="images/new-chills.png" alt="..."/>
                                    <div>
                                        <h1>NEW CHILLS FOR SUMMER</h1>
                                        <span>By Admin on November 28, 2023</span>
                                        <p>You can replace all this text with your own text. You can remove any link to our website from this website template, you're free to use this website template without linking back to us. If you're having problems editing this website template.</p>
                                        <a href="singlepost.html" class="more">Read More</a>
                                    </div>
                            </li>
                            <li>
                                <img src="images/berries.png" alt="..."/>
                                    <div>
                                        <h1>BERRIES ON THE GROVE</h1>
                                        <span>By Admin on November 28, 2023</span>
                                        <p>You can replace all this text with your own text. You can remove any link to our website from this website template, you're free to use this website template without linking back to us. If you're having problems editing this website template.</p>
                                        <a href="singlepost.html" class="more">Read More</a>
                                    </div>
                            </li>
                        </ul>
                        <a href="blog.html" class="load">Load More</a>
                    </div>
                    <div class="sidebar">
                        <h1>Recent Posts</h1>
                        <img src="images/on-diet.png" alt="..."/>
                            <h2>ON THE DIET</h2>
                            <span>By Admin on November 28, 2023</span>
                            <p>You can replace all this text with your own text. You can remove any link to our website from this website template.</p>
                            <a href="singlepost.html" class="more">Read More</a>
                    </div>
                </div>
            </div>
            <Footer/>
        </React.Fragment>
    )
}

export default Blog;