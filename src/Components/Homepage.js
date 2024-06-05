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
            <div className="d-flex vh-100 ml-5 align-items-center" >
                <div className="text-center">
                    <p class="head card-text text-center">Discover and Share amazing</p>
                    <p class="head " style={{marginTop:'5%'}}>recipes </p>
                    <p class="subhead">Platform for you to share your flavor among the communities</p>
                    <div class="animation-text">
                        <div class="animation-text3">Join now </div>

                    </div>
                   
                
                    

                </div>
            </div>




        </>
    )
}