import React, { useState } from "react"
import { NavLink } from 'react-router-dom';
import { Link, Outlet } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";
import { faAsterisk, faBahai, faSearch, faSpinner, faSquare } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Right_Sidebar } from "./Right_Sidebar";
import './Styling/Left_Sidebar.css';

export function Left_Sidebar() {

    const { logout, user, isLoading, isAuthenticated, } = useAuth0();
    const navigate = useNavigate();

    if (isLoading) {
        return (
            <>

                <div><FontAwesomeIcon class="loader" icon={faBahai} /></div>
            </>
        )

    }

    return (
        <>

            <div className="card container-sidebar col-6">
                <div class="row ml-4 ">
                    <img class="mr-2 mt-3 " src={user.picture} style={{ width: "25px", height: "25px", borderRadius: "20px" }} />
                    <h3 class="mt-3" style={{ fontSize: "18px" }}>{user.name}</h3>
                    {console.log(user)}
                </div>
                <div class="menuitem">
                    <a class="profilemenu"><Link to={'/profile'} style={{ color: "black", textDecoration: "none" }}>View Profile</Link></a>
                    <a class="menus"><Link to={'/categories'} style={{ color: "black", textDecoration: "none" }}>Categories</Link></a>
                    <a class="menus">Saved Posts</a>
                    <a class="menus"><Link to={'/settings'} style={{ color: "black", textDecoration: "none" }}>Settings</Link></a>
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