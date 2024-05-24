import { faSquarePlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { PostModal } from "./PostModal";
import { useState } from "react";
import { Outlet } from "react-router-dom";


export function Postbutton() {

    const [showmodal,setshowmodal] = useState(false);


    return (
        <>
            <div>
                <FontAwesomeIcon class="postbutton btn" icon={faSquarePlus} onClick={()=>setshowmodal(true)} />
               {showmodal && <PostModal props={()=>setshowmodal(false)}/>}
            </div>
            <Outlet/>
        </>
    )
}