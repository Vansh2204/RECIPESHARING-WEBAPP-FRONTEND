import React, { useState } from "react"
import { NavLink } from 'react-router-dom';
import { Link, Outlet } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";

export function Left_Sidebar() {

    const {logout} = useAuth0();
    const navigate = useNavigate();



    return (
        <>
            <div className="card container-sidebar col-6">
                <nav>
                    <ul class="sidebar-list">
                        <li>Profile</li>
                        <li>Categories</li>
                        <li>Search</li>
                        <li>Feedback and Suggestions</li>
                        <button class="btn btn-primary" onClick={()=>logout() && navigate('/')}>Logout</button>

                        
                    </ul>
                </nav>
                </div>
            <Outlet/>

        </>
    )
} 