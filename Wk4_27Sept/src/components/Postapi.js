import React from "react";
import Postdata from "./Postdata";
import Navbar from "./Navbar";

const API_BASE_URL = "https://reqres.in/api/users";

class Postapi extends React.Component{
    constructor(){
        super();
        this.state = {
            "name": "",
            "job": "",
            "error": false,
            "data": null
        }
    }

    postApi = () => {
        // validation
        if (this.state.name === "" || this.state.job === "") {
            this.setState({
                "error": true
            })
        } else {
            // clear error message
            this.setState({
                "error": false
            })

            let params = {
                "name": this.state.name,
                "job": this.state.job
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
                    //console.log(response)
                    this.setState({
                        "data": response
                    })
                })
        }

        // reset state
        this.setState({
            "name": "",
            "job": "",
            "data": null
        })
    }

    resetField = () => {
        this.setState({
            "name": "",
            "job": "",
            "error": false
        })
    }

    render(){
        return(
            <div className="page d-flex">
                <div className="p-4">
                    <Navbar/>
                </div>

                <div className="w-100">
                    <h1 className="page-heading p-5 m-0">Post API</h1>
                   
                    <div className="row-col d-flex px-5">
                        <div className="col-3 p-0 me-2">
                            <input className="form-control"
                                    onChange={(e)=>{
                                        this.setState({
                                            "name":e.target.value
                                        })
                                    }}
                                    value={this.state.name}
                                    id="name"
                                    type="text"
                                    placeholder="Enter Name"
                                    autoComplete="off"
                            />
                        </div>
                        <div className="col-3 p-0 me-2">
                            <input className="form-control"
                                    onChange={(e)=>{
                                        this.setState({
                                            "job":e.target.value
                                        })
                                    }}
                                    value={this.state.job}
                                    id="job" type="text"
                                    placeholder="Enter Job"
                                    autoComplete="off"
                            />
                        </div>
                        <div className="col p-0">
                            <input className="btn btn-primary px-4 custom-btn"
                                    type="button" 
                                    onClick={this.postApi} 
                                    value="Submit"
                            />
                        </div>
                    </div>
                    
                    {/* Display Error Message  */}
                    {this.state.error && 
                        <div className="row-col px-5 mt-3">
                            <div className="col-4 alert alert-success alert-dismissible custom-alert-error fade show border-0 shadow" role="alert">
                                Please enter both name and job.
                                <button type="button" onClick={this.resetField} className="btn-close btn-close-white" data-bs-dismiss="alert" aria-label="Close"></button>
                            </div>
                        </div>
                    }
                    
                    <Postdata data={this.state.data}
                        resetField={this.resetField}/>
                </div>

            </div>
        )
    }
}

export default Postapi;