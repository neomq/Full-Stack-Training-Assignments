import React from "react";

function Getdata(props) {

    return(
        <React.Fragment>
            <div className="px-5">
                <div className="display row row-cols-3 g-4">
                    {(props.data && props.data.length <= 0) ? <p className="lead">No Data Found</p> : ''}
                    {props.data && props.data.map((user, idx) => {
                        return (
                            <React.Fragment>
                                <div key={idx} className="col">
                                    <div className="card p-3 shadow border-0 rounded-4">
                                        <div className="card-body">
                                            <h5 className="m-0 mb-1 card-title">{user.first_name}</h5>
                                            <p className="m-0 mb-4 card-text text-muted">{user.email}</p>
                                            <hr />
                                            <button type="button" onClick={() => props.showDetails(user)} className="m-0 mt-2 btn btn-outline-primary btn-sm" data-bs-toggle="modal" data-bs-target="#exampleModal">View Details</button>
                                        </div>
                                    </div>
                                </div>

                                {/* <!-- Modal --> */}
                                <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                    <div className="modal-dialog">
                                        <div className="modal-content p-3 rounded-4">
                                            <div className="modal-body d-flex">
                                                <div>
                                                    <img className="rounded-pill me-3" alt="#" src={props.avatar} />
                                                </div>
                                                <div className="d-flex flex-column justify-content-center">
                                                    <h5 className="mb-1">{props.first_name} {props.last_name}</h5>
                                                    <p className="m-0 text-muted">{props.email}</p>
                                                </div>
                                            </div>
                                            <div className="modal-footer p-0 px-3 pb-2">
                                                <button type="button" className="btn btn-primary m-0 mt-3 px-4" data-bs-dismiss="modal">Close</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </React.Fragment>
                        )
                    })}
                </div>
            </div>

            {props.data &&
                <div className="px-5 mt-5">
                    <div className="btn-group" role="group" aria-label="Basic radio toggle button group">
                        <input type="radio" className="btn-check" onClick={() => { props.fetchData(1) }} name="btnradio" id="btnradio1" autoComplete="off" />
                        <label className="btn btn-outline-primary" htmlFor="btnradio1">1</label>

                        <input type="radio" className="btn-check" onClick={() => { props.fetchData(2) }} name="btnradio" id="btnradio2" autoComplete="off" />
                        <label className="btn btn-outline-primary" htmlFor="btnradio2">2</label>

                        <input type="radio" className="btn-check" onClick={() => { props.fetchData(3) }} name="btnradio" id="btnradio3" autoComplete="off" />
                        <label className="btn btn-outline-primary" htmlFor="btnradio3">3</label>
                    </div>
                </div>
            }
        </React.Fragment>
    )
}

export default Getdata;