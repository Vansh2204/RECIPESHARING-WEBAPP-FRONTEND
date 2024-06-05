import { faFire, faSquarePlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Outlet } from "react-router-dom";


export function Postbutton() {



    return (
        <>
            <div>
                <FontAwesomeIcon class="postbutton btn" icon={faFire} />
            </div>
            <Outlet/>
        </>
    )
}