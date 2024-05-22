import React from "react"
import {useAuth0} from "@auth0/auth0-react";
import {Content} from './Content'
import { useNavigate } from "react-router-dom";

export function Homepage() {
    const {loginWithRedirect,isAuthenticated,logout} = useAuth0();
    const navigate = useNavigate();

    const hadlelogin=async ()=>{
        await loginWithRedirect();
        navigate('/recipes');

    }



    return (
        <>
            <div className="background"></div>
            <div className="d-flex vh-100 justify-content-center align-items-center" style={{overflow:"auto"}}>
                <div className="text-center animated fadeIn">
                    <h2 class="head card-text">Discover and Share Amazing Recipes</h2>
                    <h3 class="tag card-text">Join the Community of Cooks</h3>
                  {/* <button class="btn btn-success"onClick={hadlelogin}>Login or Signup</button> */}
                {isAuthenticated ? (
                    navigate('/recipes')) :    (<button className="btn btn-success btn-lg mx-2 animated bounceIn" onClick={async (e)=>await loginWithRedirect()}>Login or SignUp</button>)}
                </div>
            </div>
        </>
    )
}