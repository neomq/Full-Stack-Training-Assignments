import React from "react";
import Navbar from "./Navbar";

const API_BASE_URL = "http://localhost:8080/user/allusers";

class User extends React.Component{
    constructor(){
        super();
        this.state = {
            "user_data": [],
            "user_selected": []
        }
    }

    getAllUsers = () => {

        fetch(API_BASE_URL)
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
            fetch(API_BASE_URL + "/" + userid)
                .then(response => response.json())
                .then(response => {
                    console.log(response);
                    this.setState({
                        "user_selected": response
                    })
                })
        } else {
            this.setState({
                "user_selected": []
            })
        }

        
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
                                        <input className="btn btn-primary py-2"
                                            type="button"
                                            onClick={this.updateUser}
                                            value="Update Info"
                                        />
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