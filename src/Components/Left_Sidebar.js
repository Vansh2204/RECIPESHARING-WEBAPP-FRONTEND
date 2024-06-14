
import React, { useEffect, useState, useRef } from "react"

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
    const { isLoading, user, logout } = useAuth0()
    const [showmodal, setshowmodal] = useState(false);
    const [userdata, setuserdata] = useState([]);
    const [username, setUsername] = useState('');
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);


    // useEffect(() => {
    //     fetch("http://localhost:3200/login",{ method: "GET" })
    //     .then((res) => { return res.json(); })
    //     .then((res) => { setuserdata(res) })
    // });


    // Toggle the dropdown visibility
    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    // Close the dropdown when clicking outside of it
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);



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
                <div class="menuitem">
                    <a class="menus"><Link to={'/categories'} style={{ color: "black", textDecoration: "none" }}>Categories</Link></a>
                    <a class="menus"><Link to={'../communities/'+user.name} style={{ color: "black", textDecoration: "none" }}>Communities</Link></a>

                    <a class="menus">Saved Posts</a>
                    <a class="menus"><Link to={'/settings'} style={{ color: "black", textDecoration: "none" }}>Settings</Link></a>
                    <a class="menus">Feedback</a>
                    <button class="postbutton btn btn-dark" onClick={() => setshowmodal(true)} >Post</button>
                    {showmodal && <PostModal props={() => setshowmodal(false)} />}
                </div>
                {/* <div class="row ml-1" style={{ position: 'absolute', top: '55%' }}>
                    <img class="mt-4" src={user.picture} style={{ borderRadius: "30px", height: "30px" }} />
                    <a href=""><Link to={'/profile'} class="mt-4 ml-2" style={{ display: 'flex', textDecoration: 'none', color: 'black' }}>{user.name}</Link></a>
                </div> */}
                <div className="profile-dropdown" style={{ position: 'absolute', top: '65%' }} ref={dropdownRef}>
                    <a onClick={toggleDropdown} className="profile-button">
                        <div class="row ml-1" >
                            <img class="mt-4" src={user.picture} style={{ borderRadius: "30px", height: "30px" }} />
                            <p class="mt-4 ml-2" style={{ display: 'flex', textDecoration: 'none', color: 'black' ,cursor:'pointer'}}>{user.name}</p>
                        </div>

                    </a>
                    {isOpen && (
                        <ul className="dropdown-menu ml-5">
                            <li className="dropdown-item"><Link to={'/profile'} style={{ display: 'flex', textDecoration: 'none', color: 'black' }}>Profile</Link></li>
                            <li className="dropdown-item" onClick={() => logout()}>Logout</li>
                        </ul>
                    )}
                </div>
                {/* <button class="logoutbutton btn btn-dark" onClick={() => logout()}>Logout</button> */}

            </div>
            <Outlet />

        </>
    )
} 