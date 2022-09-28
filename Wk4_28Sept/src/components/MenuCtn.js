import React from "react";

function MenuCtn() {

    const menuItem = [
        {   
            "name": "Black Coffee",
            "price": 5,
            "image": "img/menu-1.jpg",
            "decription" : "Sit lorem ipsum et diam elitr est dolor sed duo guberg sea et et lorem dolor"
        },
        {   
            "name": "Chocolate Coffee",
            "price": 7,
            "image": "img/menu-2.jpg",
            "decription" : "Sit lorem ipsum et diam elitr est dolor sed duo guberg sea et et lorem dolor"
        },
        {   
            "name": "Coffee with Milk",
            "price": 9,
            "image": "img/menu-3.jpg",
            "decription" : "Sit lorem ipsum et diam elitr est dolor sed duo guberg sea et et lorem dolor"
        }
    ];

    return(
        <div className="container-fluid pt-5">
            <div className="container">
                <div className="section-title">
                    <h4 className="text-primary text-uppercase" style={{"letterSpacing": "5px"}}>Menu & Pricing</h4>
                    <h1 className="display-4">Competitive Pricing</h1>
                </div>
                <div className="row">
                    <div className="col-lg-6">
                        <h1 className="mb-5">Hot Coffee</h1>

                        {menuItem.map((item, idx) => {
                            return <div className="row align-items-center mb-5">
                                <div className="col-4 col-sm-3">
                                    <img className="w-100 rounded-circle mb-3 mb-sm-0" src={item.image} alt="..." />
                                    <h5 className="menu-price">${item.price}</h5>
                                </div>
                                <div className="col-8 col-sm-9">
                                    <h4>{item.name}</h4>
                                    <p className="m-0">{item.decription}</p>
                                </div>
                            </div>
                        })}
                        
                    </div>
                    <div className="col-lg-6">
                        <h1 className="mb-5">Cold Coffee</h1>

                        {menuItem.map((item, idx) => {
                            return <div className="row align-items-center mb-5">
                                <div className="col-4 col-sm-3">
                                    <img className="w-100 rounded-circle mb-3 mb-sm-0" src={item.image} alt="..." />
                                    <h5 className="menu-price">${item.price}</h5>
                                </div>
                                <div className="col-8 col-sm-9">
                                    <h4>{item.name}</h4>
                                    <p className="m-0">{item.decription}</p>
                                </div>
                            </div>
                        })}

                    </div>
                </div>
            </div>
        </div>
    )
}

export default MenuCtn;