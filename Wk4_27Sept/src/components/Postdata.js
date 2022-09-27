import React from "react";

function Postdata(props) {

    return(
        <React.Fragment>
            {props.data &&
                <div className="row-col px-5 mt-5">
                    <div className="col-4 alert alert-success alert-dismissible custom-alert fade show border-0 shadow" role="alert">
                        User Created!
                        <button type="button" onClick={props.resetField} className="btn-close btn-close-white" data-bs-dismiss="alert" aria-label="Close"></button>
                    </div>
                    <div className="col-4">
                        <div className="card shadow rounded-3 border-0">
                            <div className="card-body p-4">
                                <p className="card-text m-0">ID: {props.data.id}</p>
                                <h4 className="card-title m-0 mt-3">{props.data.name}</h4>
                                <p className="card-text m-0">{props.data.job}</p>
                                <p className="card-text text-muted m-0 mt-4">Created At: {new Date(props.data.createdAt).toDateString()}</p>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </React.Fragment>
    )
}

export default Postdata;