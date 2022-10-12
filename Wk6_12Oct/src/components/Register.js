import React from "react";
import Navbar from "./Navbar";

const API_BASE_URL = "http://localhost:8080/user/register";

class Register extends React.Component{
    constructor(){
        super();
        this.state = {
            "name": "",
            "email": "",
            "address": "",
            "mobile": "",
            "password": ""
        }
    }

registerUser = () => {
        let params = {
            "name": this.state.name,
            "email": this.state.email,
            "address": this.state.address,
            "mobile": this.state.mobile,
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
                
                <div className="row justify-content-center">
                    <div className="col-5">
                        <h1 className="mt-4 py-3 text-center">Register</h1>
                        <div className="form-floating mb-3">
                            <input type="text" 
                                    onChange={(e)=>{
                                        this.setState({
                                            "name":e.target.value
                                        })
                                    }}
                                    value={this.state.name}
                                    className="form-control" id="name" placeholder="Name" autoComplete="off"/>
                                <label htmlFor="name">Your Name</label>
                        </div>
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
                            <input type="text"
                                    onChange={(e)=>{
                                        this.setState({
                                            "address":e.target.value
                                        })
                                    }}
                                    value={this.state.address}
                                    className="form-control" id="address" placeholder="Address" autoComplete="off"/>
                                <label htmlFor="address">Home Address</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input type="text"
                                    onChange={(e)=>{
                                        this.setState({
                                            "mobile":e.target.value
                                        })
                                    }}
                                    value={this.state.mobile}
                                    className="form-control" id="mobile" placeholder="Mobile" autoComplete="off"/>
                                <label htmlFor="mobile">Mobile Number</label>
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
                        <div className="d-grid mt-3">
                            <input className="btn btn-primary py-2"
                                        type="button" 
                                        onClick={this.registerUser} 
                                        value="Register"
                            />
                        </div>
                    </div>
                </div>
                

            </React.Fragment>
        )
    }

}

export default Register;