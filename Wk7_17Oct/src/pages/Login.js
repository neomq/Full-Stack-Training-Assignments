import React from "react";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import axios from "axios";

const BASE_API_URL = "http://localhost:8080/user";

function Login() {
    const[email, setEmail] = useState();
    const[password, setPassword] = useState();
    const navigate = useNavigate();

    const userLogin = async () => {
        let req = {
            "email": email,
            "password": password
        }
        const response = await axios.post(BASE_API_URL + "/login", req);
        console.log("Logging in", response)

        if (response.status === 200) {
            localStorage.setItem("token", response.data.token);
            localStorage.setItem("id", response.data.id);
            navigate('/home');
        } else {
            alert("There was an error while logging in. Please ensure username and password is correct.");
        }
    }

    return(
        <React.Fragment>
            <Navbar activePage="login"/>
            <Header activePage="login"/>

            <div id="body">
              
                <div className="footer">
                    <div className="login">
                        <h1>Welcome Back</h1>
                        <p>Please log in to your account.</p>
                        <form>
                            <input type="email" id="email" name="email" placeholder="Email Address"
                                    defaultValue={email} onChange={(e) => setEmail(e.target.value)} autoComplete="off"/>
                            <input type="password" id="pass" name="password" placeholder="Password"
                                    defaultValue={password} onChange={(e) => setPassword(e.target.value)} autoComplete="off"/>
                            <input type="button" defaultValue="Log In" id="submit" onClick={userLogin}/>
                        </form>
                    </div>
                </div>
            </div>


            <Footer/>
        </React.Fragment>
    )
}

export default Login;