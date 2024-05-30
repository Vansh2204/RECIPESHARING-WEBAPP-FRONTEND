import React from "react"
import { Outlet } from "react-router-dom"

export function Offcanvas() {
    return (
        <>
           <div class="offcanvas offcanvas-bottom" id="offcan">Canavas</div>
           <Outlet/>

        </>
    )
}