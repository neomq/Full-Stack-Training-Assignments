import React from "react";
import Navbar from "./Navbar";
import Getdata from "./Getdata";

const API_BASE_URL = "https://reqres.in/api/users";

class Getapi extends React.Component{
    constructor(){
        super();
        this.state = {
            "data": [],

            // for display of each individual user
            "first_name": "",
            "last_name": "",
            "email": "",
            "avatar": ""
        }
    }

    fetchData = (page) => {
        console.log(API_BASE_URL + "?page=" + page)
        fetch(API_BASE_URL + "?page=" + page)
        .then(response => response.json())
        .then(response => {
            // console.log(data);
            this.setState({
                "data": response.data
            })
        })
    }

    componentDidMount(){
        this.fetchData();
    }

    showDetails = (user) => {
        // console.log(user);
        this.setState({
            "first_name": user.first_name,
            "last_name": user.last_name,
            "email": user.email,
            "avatar": user.avatar
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
                    <Getdata data={this.state.data}
                            avatar={this.state.avatar}
                            email={this.state.email}
                            first_name={this.state.first_name}
                            last_name={this.state.last_name}
                            showDetails={this.showDetails}
                            fetchData={this.fetchData}
                    />
                </div>

            </div>
        )
    }

}

export default Getapi;