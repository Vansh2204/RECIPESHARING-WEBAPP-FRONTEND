import React from "react"

export function Homepage() {
    return (
        <>
            <div className="background"></div>
            <div className="d-flex vh-100 justify-content-center align-items-center" style={{overflow:"auto"}}>
                <div className="text-center animated fadeIn">
                    <h2 class="head card-text">Discover and Share Amazing Recipes</h2>
                    <h3 class="tag card-text">Join the Community of Cooks</h3>
                    <button className="btn btn-success btn-lg mx-2 animated bounceIn">Login or SignUp</button>
                </div>
            </div>
        </>
    )
}