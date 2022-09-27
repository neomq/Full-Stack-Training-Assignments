import React from "react";

function People() {

    let people = [
        {"name":"Nielsen Cobb",'age':25},
        {"name":"Margret Cote",'age':35},
        {"name":"Rachel Vinson",'age':32},
        {"name":"Gabrielle Aguirre",'age':55},
        {"name":"Eugene Gray",'age':46},
        {"name":"Fiona Robinson",'age':52}
    ];

    return(
        <React.Fragment>
            <div className="row px-5">
                <div className="col-lg-6">
                    <div className="card shadow rounded-4 border-0 mb-4">
                        <div className="p-3 m-0 shadow-sm">
                            <h4 className="p-3 m-0">People</h4>
                        </div>
                        <div className="card-body px-4 pb-5">
                            <table className="table card-text">
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Name</th>
                                        <th>Age</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {people.map((person, idx) => {
                                        return <tr key={idx}>
                                            <th className={person.age > 50 ? 'red fw-bold' : null} scope="row">{idx + 1}</th>
                                            <td className={person.age > 50 ? 'red fw-bold' : null}>{person.name}</td>
                                            <td className={person.age > 50 ? 'red fw-bold' : null}>{person.age}</td>
                                        </tr>
                                    })}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default People;