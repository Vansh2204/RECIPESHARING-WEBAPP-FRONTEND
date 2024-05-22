import React from "react"
import { useAuth0 } from "@auth0/auth0-react";
import { Content } from './Content'
import { useNavigate } from "react-router-dom";

export function Homepage() {
    const { loginWithRedirect, isAuthenticated, logout } = useAuth0();
    const navigate = useNavigate();

    const hadlelogin = async () => {
        await loginWithRedirect();
        navigate('/recipes');

    }



    return (
        <>
            <div className="background"></div>

            <div className="d-flex vh-100 ml-5 align-items-center" style={{ overflow: "auto" }}>
                <div className="text-center">
                    <h2 class="head card-text">Discover and Share Amazing Recipes</h2>
                    <h2 style={{ display: "flex", fontSize: "45px" }}>Join</h2>
                    <div class="animation-text">
                        <div class="line">Community</div>
                        <div class="line">Cooks</div>
                        <div class="line">Cuisines</div>

                    </div>
                    <div class="loginhomepage">
                        {/* <button class="btn btn-success"onClick={hadlelogin}>Login or Signup</button> */}
                        {isAuthenticated ? (
                            navigate('/recipes')) : (<button className="btn btn-success mt-5 btn-lg mx-2 animated bounceIn" onClick={async (e) => await loginWithRedirect()}>Login or SignUp</button>)}
                    </div>
                </div>
            </div>




        </>
    )
}