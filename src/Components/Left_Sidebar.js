
import React, { useEffect, useState } from "react"

import { Link, Outlet } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";
import { faAsterisk, faBahai, faSearch, faSpinner, faSquare, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { PostModal } from "./PostModal";
import { Right_Sidebar } from "./Right_Sidebar";
import './Styling/Left_Sidebar.css';
import jwt_decode, { jwtDecode } from 'jwt-decode'; // Import jwt-decode library


export function Left_Sidebar() {

    const navigate = useNavigate();
    const { isLoading ,user } = useAuth0()
    const [showmodal, setshowmodal] = useState(false);
    const [userdata, setuserdata] = useState([]);
    const [username, setUsername] = useState('');


    // useEffect(() => {
    //     fetch("http://localhost:3200/login",{ method: "GET" })
    //     .then((res) => { return res.json(); })
    //     .then((res) => { setuserdata(res) })
    // });






    if (isLoading) {
        return (
            <>

                <div class="d-flex justify-content-center" style={{ marginTop: '22%', color: 'darkblue' }}>
                    <div class="spinner-border" role="status">
                    </div>
                </div>
            </>
        )

    }

    return (
        <>

            <div className="card container-sidebar col-6">
                <div class="row">
                    <div>
                        

                    </div>

                     <img class="mt-4" src={user.picture} style={{ borderRadius: "30px", height: "30px" }} />
                    <h2 class="ml-2" style= {{ fontSize: "15px", marginTop: "4vh", display: 'flex' }}>{user.name}</h2>
                </div>
                <div class="menuitem">
                    <a class="profilemenu"><Link to={'/profile'} style={{ color: "black", textDecoration: "none" }}>View Profile</Link></a>
                    <a class="menus"><Link to={'/categories'} style={{ color: "black", textDecoration: "none" }}>Categories</Link></a>
                    <a class="menus">Saved Posts</a>
                    <a class="menus"><Link to={'/settings'} style={{ color: "black", textDecoration: "none" }}>Settings</Link></a>
                    <a class="menus">Feedback</a>
                    <button class="postbutton btn btn-dark" onClick={() => setshowmodal(true)} >Post</button>
                    {showmodal && <PostModal props={() => setshowmodal(false)} />}
                </div>
                {/* <button class="logoutbutton btn btn-dark" onClick={() => logout()}>Logout</button> */}

            </div>
            <Outlet />

        </>
    )
} 