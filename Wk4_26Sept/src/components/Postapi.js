import Sidebar from './Sidebar';
import React, { useState } from "react";

const API_BASE_URL = "https://reqres.in/api/users";

function Postapi() {

    const[name,setName] = useState("");
    const[job,setJob] = useState("");
    const[error,setError] = useState(false);
    const[data,setData] = useState();

    const updateNameField = (e) => {
        setName(e.target.value);
    }

    const updateJobField = (e) => {
        setJob(e.target.value);
    }
    
    const postApi = () => {
        // validation
        if (name === "" || job === ""){
            setError(true);
        } else {
            // clear error message
            setError(false);
            
            let params = {
                "name": name,
                "job": job
            };

            fetch(API_BASE_URL,{
                method: "POST",
                body: JSON.stringify(params),
                headers: {
                    'Content-Type': 'application/json'
                    }
            })
            .then(response => response.json())
            .then(response => {
                //console.log(response)
                setData(response);
            })
        }

        // reset form fields
        setName("");
        setJob("");
    }

    return(
        <div className="page d-flex">
            <div>
                <Sidebar/>
            </div>
            <div className="w-100">
                    <h1 className="px-5 py-4">Post API</h1>
                    <div className="row-col d-flex px-5">
                        <div className="col-3 p-0 me-2">
                            <input className="form-control" onChange={updateNameField} value={name} id="name" type="text" placeholder="Enter Name" autoComplete="off"/>
                        </div>
                        <div className="col-3 p-0 me-2">
                            <input className="form-control" onChange={updateJobField} value={job} id="job" type="text" placeholder="Enter Job" autoComplete="off"/>
                        </div>
                        <div className="col p-0">
                            <input className="btn btn-primary px-4" type="button" onClick={postApi} value="Submit"/>
                        </div>
                    </div>

                    {error && 
                        <div className="row-col px-5 mt-2 text-danger">
                            <p className="ms-2">Please enter both name and job.</p>
                        </div>
                    }

                    {data &&
                        <div className="row-col px-5 mt-5">
                            <div className="col-3 p-4 alert alert-success" role="alert">
                                <h4 class="alert-heading">User Created!</h4>
                                <hr />
                                <p className="m-0 mt-3">ID: {data.id}</p>
                                <h3 className="m-0 mt-3">{data.name}</h3>
                                <p className="m-0">{data.job}</p>
                                <p className="text-muted m-0 mt-4">Created At: {new Date(data.createdAt).toDateString()}</p>
                            </div>
                        </div>
                    }
            </div>
        </div>
    )
}

export default Postapi;