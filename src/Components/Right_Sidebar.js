import React from "react"
import { Link, Outlet } from "react-router-dom";

export function Right_Sidebar(){
    return (
        <>
        <div className="card container-rightsidebar float-right ml-5">
                <div className="card border border-dark" style={{width:"fit-content"}}>
                    <h1 class="">Right Sidebar</h1>
                </div>
            </div>
        <Outlet/>
        </>
    )
}