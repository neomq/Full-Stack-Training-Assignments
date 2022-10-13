import React from "react";
import Navbar from "./Navbar";

const API_BASE_URL = "http://localhost:8080/user";

class User extends React.Component{
    constructor(){
        super();
        this.state = {
            // user update fields
            "update_name": "",
            "update_email": "",
            "update_mobile": "",
            "update_address": "",

            // user data
            "user_data": [],
            "user_selected": [],
            "user_id_selected": ""
        }
    }

    getAllUsers = () => {

        fetch(API_BASE_URL + "/allusers")
        .then(response => response.json())
        .then(response => {
            console.log(response);
            this.setState({
                "user_data": response
            })
        })
    }

    componentDidMount(){
        this.getAllUsers();
    }

    getUserbyID = (userid) => {

        if (userid !== "Select User"){
            fetch(API_BASE_URL + "/allusers/" + userid)
                .then(response => response.json())
                .then(response => {
                    console.log(response);
                    this.setState({
                        "user_selected": response,
                        "user_id_selected": userid
                    })
                })
        } else {
            //reset state
            this.setState({
                "user_selected": []
            })
        }
    }

    updateUser = () => {

        let params = {
            "name": this.state.update_name,
            "email": this.state.update_email,
            "mobile": this.state.update_mobile,
            "address": this.state.update_address,
            "id": this.state.user_id_selected
        };

        fetch(API_BASE_URL + "/update", {
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

        window.location.reload(false);
    }

    deleteUser = () => {
        let user_id = this.state.user_id_selected;
        fetch(API_BASE_URL + "/delete/" + user_id, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(response => response.json())
            .then(response => {
                console.log(response)
            })
        
            window.location.reload(false);
    }

    render(){
        return(
            <React.Fragment>
                <Navbar/>

                <div className="row container-fluid justify-content-center">
                    <div className="form">
                        <h1 className="text-center mb-4">User</h1>
                        {/* Select */}
                        <select className="form-select form-select-lg mb-3" onChange={(e)=>{this.getUserbyID(e.target.value)}}>
                            <option defaultValue>Select User</option>
                            {this.state.user_data.map(
                                user => <option key={user.id} value={user.id}>{user.name}</option>
                            )}
                        </select>
                        <hr className="my-5"/>

                        {this.state.user_selected.length !== 0 ? 
                            <div className="card">
                                <div className="card-body">
                                    <h3 className="card-title">{this.state.user_selected.name}</h3>
                                    <p className="card-text lead m-0">{this.state.user_selected.email}</p>
                                    <p className="card-text lead">{this.state.user_selected.mobile}</p>
                                    <p className="card-text">{this.state.user_selected.address}</p>
                                    <div className="d-grid mt-4">
                                        <button type="button"
                                                onClick={() => {
                                                    this.setState({
                                                        "user_id_selected": this.state.user_selected.id
                                                    })
                                                }}
                                                className="btn btn-success py-2" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                            Update
                                        </button>
                                        <button type="button" onClick={this.deleteUser} className="btn btn-outline-danger mt-2 py-2">
                                            Delete
                                        </button>
                                    </div>
                                     {/* <!-- Modal --> */}
                                     <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                            <div className="modal-dialog modal-dialog-centered">
                                                <div className="modal-content">
                                                    <div className="modal-header">
                                                        <h1 className="modal-title fs-5" id="exampleModalLabel">Update</h1>
                                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                    </div>
                                                    <div className="modal-body">
                                                        <div className="form-floating mb-3">
                                                            <input type="text"
                                                                onChange={(e) => {
                                                                    this.setState({
                                                                        "update_name": e.target.value
                                                                    })
                                                                }}
                                                                value={this.state.name}
                                                                className="form-control" id="name" placeholder="Name" autoComplete="off" />
                                                            <label htmlFor="name">Update Name</label>
                                                        </div>
                                                        <div className="form-floating mb-3">
                                                            <input type="text"
                                                                onChange={(e) => {
                                                                    this.setState({
                                                                        "update_email": e.target.value
                                                                    })
                                                                }}
                                                                value={this.state.email}
                                                                className="form-control" id="emailaddress" placeholder="Email" autoComplete="off" />
                                                            <label htmlFor="emailaddress">Update Email</label>
                                                        </div>
                                                        <div className="form-floating mb-3">
                                                            <input type="text"
                                                                onChange={(e) => {
                                                                    this.setState({
                                                                        "update_address": e.target.value
                                                                    })
                                                                }}
                                                                value={this.state.address}
                                                                className="form-control" id="address" placeholder="Address" autoComplete="off" />
                                                            <label htmlFor="address">Update Address</label>
                                                        </div>
                                                        <div className="form-floating mb-3">
                                                            <input type="text"
                                                                onChange={(e) => {
                                                                    this.setState({
                                                                        "update_mobile": e.target.value
                                                                    })
                                                                }}
                                                                value={this.state.mobile}
                                                                className="form-control" id="mobile" placeholder="Mobile" autoComplete="off" />
                                                            <label htmlFor="mobile">Update Mobile Number</label>
                                                        </div>
                                                    </div>
                                                    <div className="modal-footer">
                                                        <button type="button"
                                                            className="btn btn-primary"
                                                            onClick={this.updateUser} data-bs-dismiss="modal">Save Changes</button>                                                        
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                </div>
                            </div>
                            : <div></div>
                        }

              
                    </div>
                </div>
            </React.Fragment>
        )
    }

}

export default User;