import React from "react";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export function CommuModal({ props }) {
    return (
        <>
            <div class="commumodal">
                <div>
                    <div class="card" style={{width:'50%',marginLeft:'30%'}}>
                        <div class="card-body">
                            <h2>Unlock Communities creation with premium</h2>
                            <p>Only premium subscribers have access to communities creation.Upgrade to continue</p>
                            <button class="col btn btn-light text-dark">Upgrade</button>
                            <button class=" col btn btn-dark text-light" onClick={props}>Maybe later</button>


                        </div>

                    </div>
                </div>

            </div>
        </>
    )
}