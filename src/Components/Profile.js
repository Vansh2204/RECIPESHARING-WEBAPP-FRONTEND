import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Flip, ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';




export function Profile() {

    const messagetoast = () => toast("Currently , running out of this functionality!");
    const profiletoast = () => toast("Working on this functionality!");

    const { user } = useAuth0();

    return (
        <>
            <div className="background"></div>
            <div class="card-body m-5" style={{ height: "70vh", background: 'white', borderRadius: "30px" }}>
                <div class="row">
                    <div class="col-5 mr-5 ml-4" style={{ display: "flex", height: '60vh' }}>
                        <img class="mt-3" src={user.picture} style={{ borderRadius: "30px", width: "60px", height: "60px" }} />
                        <h2 class="ml-2" style={{ fontSize: "25px", marginTop: "4vh" }}>{user.name}</h2>
                        <div class="row" style={{ marginTop: '13vh' }}>
                            <button class="btn btn-dark mr-4" onClick={profiletoast} style={{ display: "flex", height: "35px", width: "fit-content", textAlign: "center", position: 'absolute', left: "9vh" }}>Edit Profile</button>
                            <button class="btn btn-dark" onClick={messagetoast} style={{ display: "flex", height: "37px", width: "90px" }}>Message</button>
                            <ToastContainer theme="dark" position="top-center" />
                        </div>




                    </div>
                    <div class="col-6" >

                    </div>
                </div>



            </div>



        </>
    )
}