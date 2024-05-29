import React, { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Flip, ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAdd, faBahai } from "@fortawesome/free-solid-svg-icons";
import { useParams } from "react-router-dom";





export function Profile() {

   const [profilepost,setprofilepost] = useState([]);
   const { user, isLoading ,getAccessTokenSilently,isAuthenticated} = useAuth0();

   


    const profiletoast = () => toast("Working on this functionality!");


    if (isLoading) {
        return (
            <>

                <div><FontAwesomeIcon class="loader" icon={faBahai} /></div>
            </>
        )

    }





    return (
        <>
            <div class="card-body m-5" style={{ height: "70vh", background: 'white', borderRadius: "30px" }}>
                <div class="col-4 float-left border border-dark">
                    <div class="col mr-5 ml-4" style={{ display: "flex", height: '60vh' }}>
                        <img class="mt-3" src={user.picture} style={{ borderRadius: "30px", width: "60px", height: "60px" }} />
                        <h2 class="ml-2" style={{ fontSize: "25px", marginTop: "4vh",display:'flex' }}>{user.name}</h2>

                            <a class="editprofilebutton" onClick={profiletoast} >Edit Profile</a>
                            {/* <button class="btn btn-dark " onClick={messagetoast} style={{ display: "flex", height: "35px", width: "15vh", justifyContent: "center" }}>Message</button> */}
                            <ToastContainer theme="dark" position="top-center" />
                        </div>
                        




                    </div>
                    <div class="col-6 float-left">
                            <h2>Posts</h2>
                            

                            

                            
                            

                        </div>
                    
                </div>






        </>
    )
}