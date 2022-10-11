import React from "react";
import Navbar from "./Navbar";

// const API_BASE_URL = "https://reqres.in/api/users";
const API_BASE_URL = "http://localhost:8080/user";

class Getapi extends React.Component{
    constructor(){
        super();
        this.state = {
            "user_id": ""
        }
    }

    fetchData = (user_id) => {
        fetch(API_BASE_URL + "/" + user_id)
        .then(response => response.json())
        .then(response => {
            console.log(response);
        })
    }

    render(){
        return(
            <div className="page d-flex">
                <div className="p-4">
                    <Navbar activePage="getapi"/>
                </div>

                <div className="w-100">
                    <h1 className="page-heading p-5 m-0">Get API</h1>

                    <form className="px-5 d-flex">
                        <div>
                            <input type="text"
                                    className="py-2 form-control"
                                    onChange={(e)=>{
                                        this.setState({
                                            "user_id":e.target.value
                                        })
                                    }}
                                    value={this.state.user_id}
                                    placeholder="Enter User ID"
                                    autoComplete="off"
                            />
                        </div>
                        <div className="ms-3">
                            <button type="button" onClick={()=>{this.fetchData(this.state.user_id)}} className="py-2 btn btn-primary">Check User</button>
                        </div>
                    </form>

                </div>

            </div>
        )
    }

}

export default Getapi;