import React, { useState } from "react"
import { NavLink } from 'react-router-dom';
import { Link, Outlet } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function Left_Sidebar() {

    const { logout, user, isLoading, isAuthenticated } = useAuth0();
    const navigate = useNavigate();

    if (isLoading) {
        return (
            <>
                <div class="main-item">
                     {/* <div class="static-background">
                        <div class="background-masker btn-divide-left"></div>
                    </div> */}

                    <div class="animated-background col-6">
                        <div class="background-masker"></div>
                    </div> 

                    <div class="maincard">
                        <div class="sub-card pure-background"></div>

                    </div>

                </div>
                {/* <div><h3 style={{marginLeft:"45%",marginTop:"20%"}}>Loading...</h3></div> */}
            </>
        )

    }

    return (
        <>
            <div className="card container-sidebar col-6">
                <div class="row ml-4 ">
                    <img class="mr-2 mt-3 " src={user.picture} style={{ width: "30px", height: "30px", borderRadius: "20px" }} />
                    <h3 class="mt-3" style={{ fontSize: "20px" }}>{user.name}</h3>
                    {console.log(user)}
                </div>
                <div class="menuitem">
                    <a class="menus"><Link to={'/profile'} style={{ color: "black", textDecoration: "none" }}>Profile</Link></a>
                    <a class="menus"><Link to={'/categories'} style={{ color: "black", textDecoration: "none" }}>Categories</Link></a>
                    <a class="menus">Search</a>
                    <a class="menus">Feedback</a>

                </div>
                {/* <ul class="sidebar-list mt-5" style={{width:"15%",position:"fixed"}}>
                        <li class="menuitem">Profile</li>
                        <li class="menuitem">Categories</li>
                        <li class="menuitem">Search</li>
                        <li class="menuitem">Feedback and Suggestions</li>

                        
                    </ul> */}
                <button class="logoutbutton btn btn-dark" onClick={() => logout()}>Logout</button>




            </div>
            <Outlet />

        </>
    )
} 