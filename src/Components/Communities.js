import { faUserPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { CommuModal } from "./Pop-Modals/CommuModal.js";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export function Communities() {

    const [showmodal, setshowmodal] = useState(false);


    const community = [

        { name: "Vegan Vibes" },
        { naem: "Vegetarian Ventures" },
        { name: "Gluten - Free Goodies" },
        { name: "Keto Kitchen" },
        { name: "Paleo Plates" },
        { name: "Low - Carb Creations" },
        { name: "Dairy-Free Delights" },
        { name: "Nut-Free Nibbles" },
        
    ];

    const commutoast = () => toast("Working on this functionality!");




    return (
        <>
            <div style={{overflow:'hidden'}}>
                <div class="row" >
                    {community.map(names => (
                        <a style={{cursor:'pointer'}} onClick={commutoast}><span class="badge rounded-pill m-5" style={{ border: '1px solid black' }} >{names.name}</span></a>
                        
                    ))}
                    <FontAwesomeIcon class="mt-5" onClick={() => setshowmodal(true)}  style={{ height: '20px' ,cursor:'pointer'}} icon={faUserPlus} />
                    {showmodal && <CommuModal props={() => setshowmodal(false)} />}

                </div>
                <div>
                    <h2 class="d-flex justify-content-center" style={{marginTop:'12%'}}>Varoius Communities</h2>
                    <p class="d-flex justify-content-center" style={{marginTop:'%'}}>Comming Soon !</p>
                </div>
            </div>
        </>
    )
}