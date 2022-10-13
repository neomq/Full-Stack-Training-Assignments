import React from "react";
import Navbar from "./Navbar";

const API_BASE_URL = "http://localhost:8080/user/login";

class Login extends React.Component{
    constructor(){
        super();
        this.state = {
            "email": "",
            "password": ""
        }
    }

    loginUser = () => {
        let params = {
            "email": this.state.email,
            "password": this.state.password
        };

        fetch(API_BASE_URL, {
            method: "POST",
            body: JSON.stringify(params),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(response => response.json())
            .then(response => {
                console.log(response)
            })
    }

    render(){
        return(
            <React.Fragment>
                <Navbar/>

                <div className="row container-fluid justify-content-center">
                    <div className="form">
                        <h1 className="text-center mb-4">Login</h1>
                        <div className="form-floating mb-3">
                            <input type="text"
                                    onChange={(e)=>{
                                        this.setState({
                                            "email":e.target.value
                                        })
                                    }}
                                    value={this.state.email}
                                    className="form-control" id="emailaddress" placeholder="Email" autoComplete="off"/>
                                <label htmlFor="emailaddress">Email Address</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input type="password"
                                    className="form-control"
                                    onChange={(e)=>{
                                        this.setState({
                                            "password":e.target.value
                                        })
                                    }}
                                    value={this.state.password}
                                    id="password" placeholder="Password"/>
                                <label htmlFor="password">Password</label>
                        </div>
                        <div className="d-grid mt-4">
                            <input className="btn btn-primary py-2"
                                        type="button" 
                                        onClick={this.loginUser} 
                                        value="Login"
                            />
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }

}

export default Login;