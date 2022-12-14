import React from "react";
import Navbar from "./Navbar";
import People from "./People";

class Conditional extends React.Component{


    render(){


        return(
            <div className="page d-flex">
                <div className="p-4">
                    <Navbar activePage="conditional"/>
                </div>

                <div className="w-100">
                    <h1 className="page-heading p-5">Conditional</h1>
                    <People/>
                </div>

            </div>
        )
    }

}

export default Conditional;