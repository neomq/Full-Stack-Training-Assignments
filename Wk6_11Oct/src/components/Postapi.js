import React from "react";
import Navbar from "./Navbar";

// const API_BASE_URL = "https://reqres.in/api/users";
const API_BASE_URL = "http://localhost:8080/users/login";

class Postapi extends React.Component{
    constructor(){
        super();
        this.state = {
            "username": "",
            "password": ""
        }
    }

    postApi = () => {
        // validation
        if (this.state.username === "" || this.state.password === "") {
            this.setState({
                "error": true
            })
        } else {
            // clear error message
            this.setState({
                "error": false
            })

            let params = {
                "username": this.state.username,
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

        // reset state
        this.setState({
            "username": "",
            "password": ""
        })
    }

    resetField = () => {
        this.setState({
            "username": "",
            "password": "",
            "error": false
        })
    }

    render(){
        return(
            <div className="page d-flex">
                <div className="p-4">
                    <Navbar activePage="postapi"/>
                </div>

                <div className="w-100">
                    <h1 className="page-heading p-5 m-0">Post API</h1>
                   
                    <form className="col-6 px-5">
                        <div className="mb-3">
                        <input className="form-control"
                                    onChange={(e)=>{
                                        this.setState({
                                            "username":e.target.value
                                        })
                                    }}
                                    value={this.state.username}
                                    id="username"
                                    type="text"
                                    placeholder="Username"
                                    autoComplete="off"
                            />
                        </div>
                        <div className="mb-3">
                            <input className="form-control"
                                        onChange={(e)=>{
                                            this.setState({
                                                "password":e.target.value
                                            })
                                        }}
                                        value={this.state.password}
                                        id="password"
                                        type="password"
                                        placeholder="Password"
                                        autoComplete="off"
                                />
                        </div>
                        {/* Display Error Message  */}
                        {this.state.error &&
                            <div className="col mt-3">
                                <div className="col alert alert-success alert-dismissible custom-alert-error fade show border-0 shadow" role="alert">
                                    Please enter both username and password.
                                    <button type="button" onClick={this.resetField} className="btn-close btn-close-white" data-bs-dismiss="alert" aria-label="Close"></button>
                                </div>
                            </div>
                        }
                        <div className="d-grid">
                            <input className="btn btn-primary px-4"
                                        type="button" 
                                        onClick={this.postApi} 
                                        value="Login"
                            />
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default Postapi;