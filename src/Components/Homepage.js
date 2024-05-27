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
            <div className="homepagebackground"></div>
            <div className="d-flex vh-100 ml-5 align-items-center" style={{ overflow: "auto" }}>
                <div className="text-center">
                    <h1 class="head card-text text-center">Discover and Share </h1>
                    <h2 class="subhead">Amazing Recipes With</h2>
                    <div class="animation-text">
                        <div class="animation-text1">Communities</div>
                        <div class="animation-text2">Cooks</div>
                        <div class="animation-text3">Culinaries</div>

                    </div>
                   
                
                    

                </div>
            </div>




        </>
    )
}