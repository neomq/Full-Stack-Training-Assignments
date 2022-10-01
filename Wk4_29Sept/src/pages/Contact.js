import React from "react";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Contact() {
    return(
        <React.Fragment>
            <Navbar activePage="contact"/>
            <Header activePage="contact"/>

            <div id="body" className="contact">
                <div className="body">
                    <div>
                        <div>
                            <img src="images/check-in.png" alt="..."/>
                            <h1>UNIT 0123 , ABC BUILDING, BUSSINESS PARK</h1>
                            <p>If you're having problems editing this website template, then don't hesitate to ask for help on the Forums.</p>
                        </div>
                    </div>
                </div>

                <div className="footer">

                    <div className="contact">
                        <h1>INQUIRY FORM</h1>
                        <form>
                            <input type="text" name="Name" defaultValue="Name"/>
                            <input type="text" name="Email" defaultValue="Email"/>
                            <input type="text" name="Subject" defaultValue="Subject"/>
                            <textarea name="meassage" defaultValue="Share Your Thoughts" cols="50" rows="7"></textarea>
                            <input type="submit" defaultValue="Send" id="submit"/>
                        </form>
                    </div>
                    <div className="section">
                        <h1>WE’D LOVE TO HEAR FROM YOU.</h1>
                        <p>If you're having problems editing this website template, then don't hesitate to ask for help on the Forums.</p>
				    </div>
                </div>
            </div>
                    

            <Footer/>
        </React.Fragment>
    )
}

export default Contact;