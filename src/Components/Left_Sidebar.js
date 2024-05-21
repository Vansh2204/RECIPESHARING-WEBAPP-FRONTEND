import React, { useState } from "react"
import { NavLink } from 'react-router-dom';
import { Link, Outlet } from "react-router-dom";


export function Left_Sidebar() {



    return (
        <>
            <div className="card container-sidebar">
                <nav>
                    <ul>
                        <li>Profile</li>
                        <li>Settings</li>
                        <li>logout</li>
                    </ul>
                </nav>
                </div>
            <Outlet/>

        </>
    )
} 