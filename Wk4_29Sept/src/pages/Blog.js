import React from "react";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { NavLink } from 'react-router-dom';
// import { useState } from 'react';

function Blog() {

    const blogPost = [
        {
            "title": "NEW CHILLS FOR SUMMER",
            "author": "Admin",
            "date": "November 28, 2023",
            "image": "images/new-chills.png",
            "short": "This website template has been designed by Free Website Templates for you, for free. You can replace all this text with your own text. This website template has been designed by Free Website Templates for you, for free. You can replace all this text with your own text. This website template has been designed by Free Website Templates for you, for free.",
            "content": "You can replace all this text with your own text. You can remove any link to our website from this website template, you're free to use this website template without linking back to us. If you're having problems editing this website template, then don't hesitate to ask for help on the forum. You can replace all this text with your own text. You can remove any link to our website from this website template, you're free to use this website template without linking back to us. If you're having problems editing this website template, then don't hesitate to ask for help on the forum."
        },
        {
            "title": "BERRIES ON THE GROVE",
            "author": "Admin",
            "date": "November 28, 2023",
            "image": "images/berries.png",
            "short": "This website template has been designed by Free Website Templates for you, for free. You can replace all this text with your own text. This website template has been designed by Free Website Templates for you, for free. You can replace all this text with your own text. This website template has been designed by Free Website Templates for you, for free.",
            "content": "You can replace all this text with your own text. You can remove any link to our website from this website template, you're free to use this website template without linking back to us. If you're having problems editing this website template, then don't hesitate to ask for help on the forum. You can replace all this text with your own text. You can remove any link to our website from this website template, you're free to use this website template without linking back to us. If you're having problems editing this website template, then don't hesitate to ask for help on the forum."
        }
    ]

    return(
        <React.Fragment>
            <Navbar activePage="blog"/>
            <Header activePage="blog"/>
            <div id="body">
                <div className="blog">
                    <div className="featured">
                        <ul>
                            {blogPost.map((blog, idx) => {
                                return (
                                    <li key={idx}>
                                        <img src={blog.image} alt="..." />
                                        <div>
                                            <h1>{blog.title}</h1>
                                            <span>By {blog.author} on {blog.date}</span>
                                            <p>{blog.short}</p>
                                            <NavLink to="/blogpost" className="more">Read More</NavLink>
                                        </div>
                                    </li>
                                )
                            })}
                        </ul>
                        <a href="blog.html" className="load">Load More</a>
                    </div>
                    <div className="sidebar">
                        <h1>Recent Posts</h1>
                        <img src="images/on-diet.png" alt="..."/>
                            <h2>ON THE DIET</h2>
                            <span>By Admin on November 28, 2023</span>
                            <p>You can replace all this text with your own text. You can remove any link to our website from this website template.</p>
                            <a href="singlepost.html" className="more">Read More</a>
                    </div>
                </div>
            </div>
            <Footer/>
        </React.Fragment>
    )
}

export default Blog;