import Sidebar from './Sidebar';
import React, { Component, useEffect, useState } from "react";

const API_BASE_URL = "https://reqres.in/api/users";

function Getapi() {

    const[data,setData] = useState();
    const[fname,setFname] = useState("");
    const[lname,setLname] = useState("");
    const[email,setEmail] = useState("");
    const[avatar,setAvatar] = useState("");

    const fetchData = (page) => {
        console.log(API_BASE_URL + "?page=" + page)
        fetch(API_BASE_URL + "?page=" + page)
        .then(response => response.json())
        .then(response => {
            console.log(data);
            setData(response.data);
        })
    }

    const showDetails = (user) => {
        // console.log(user);
        setFname(user.first_name);
        setLname(user.last_name);
        setEmail(user.email);
        setAvatar(user.avatar);
    }

    return(
        <div className="page d-flex">
            <div>
                <Sidebar/>
            </div>
            <div className="w-100">
                <h1 className="px-5 py-4">Get API</h1>
                
                <div className="px-5 col-3 mb-5">
                    <div><button className="btn btn-primary" onClick={fetchData}>View Users</button></div>
                </div>

                <div className="px-5">
                    <div className="display row row-cols-3 g-4">
                        {(data && data.length <= 0) ? <p className="lead">No Data Found</p> : ''}
                        {data && data.map((user, idx) => {
                            return (
                                <>
                                    <div className="col" key={idx}>
                                        <div className="card p-3 shadow border-0 rounded-4">
                                            <div className="card-body">
                                                <h5 className="m-0 mb-1 card-title">{user.first_name}</h5>
                                                <p className="m-0 mb-4 card-text text-muted">{user.email}</p>
                                                <hr />
                                                <button type="button" onClick={()=>showDetails(user)} className="m-0 mt-2 btn btn-outline-primary btn-sm" data-bs-toggle="modal" data-bs-target="#exampleModal">View Details</button>
                                            </div>
                                        </div>
                                    </div>

                                    {/* <!-- Modal --> */}
                                    <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                        <div className="modal-dialog">
                                            <div className="modal-content p-3 rounded-4">
                                                <div className="modal-body d-flex">
                                                    <div>
                                                        <img className="rounded-pill me-3" src={avatar}></img>
                                                    </div>
                                                    <div className="d-flex flex-column justify-content-center">
                                                        <h5 className="mb-1">{fname} {lname}</h5>
                                                        <p className="m-0 text-muted">{email}</p>
                                                    </div>
                                                </div>
                                                <div className="modal-footer p-0">
                                                    <button type="button" className="btn btn-primary m-0 mt-3" data-bs-dismiss="modal">Close</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            )
                        })
                        }
                    </div>
                </div>
                
                {data &&
                    <div className="px-5 mt-5">
                        <div className="btn-group" role="group" aria-label="Basic radio toggle button group">
                            <input type="radio" className="btn-check" onClick={() => { fetchData(1) }} name="btnradio" id="btnradio1" autoComplete="off"
                            />
                            <label className="btn btn-outline-primary" htmlFor="btnradio1">1</label>

                            <input type="radio" className="btn-check" onClick={() => { fetchData(2) }} name="btnradio" id="btnradio2" autoComplete="off" />
                            <label className="btn btn-outline-primary" htmlFor="btnradio2">2</label>

                            <input type="radio" className="btn-check" onClick={() => { fetchData(3) }} name="btnradio" id="btnradio3" autoComplete="off" />
                            <label className="btn btn-outline-primary" htmlFor="btnradio3">3</label>
                        </div>
                    </div>
                }
                
            </div>
        </div>
    )
}

export default Getapi;