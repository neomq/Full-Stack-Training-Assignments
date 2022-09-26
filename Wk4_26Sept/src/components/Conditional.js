import Sidebar from './Sidebar';

function Conditional() {

    let people = [
        {"name":"Anne",'age':25},
        {"name":"Belle",'age':35},
        {"name":"Carl",'age':32},
        {"name":"Denise",'age':55},
        {"name":"Eugene",'age':46},
        {"name":"Fiona",'age':52}
    ];

    return(
        <div className="page d-flex">
            <div>
                <Sidebar/>
            </div>
            <div className="w-100">
                <h1 className="px-5 py-4">Conditional Rendering</h1>
                <div className="px-5 col-4">
                    <h4>List of People</h4>
                    <ol className="list-group list-group-numbered">
                        {
                            people.map((person, idx) => {
                                return <li className="p-4 list-group-item d-flex justify-content-between align-items-start">
                                    <div className="ms-2 me-auto">
                                        <div className={person.age > 50 ? 'red fw-bold' : null}>{person.name}</div>
                                        <div className={person.age > 50 ? 'red' : null}>{person.age} years old</div>
                                    </div>
                                </li>
                            })
                        }
                    </ol>
                </div>
            </div>
        </div>
    )
}

export default Conditional;