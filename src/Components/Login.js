import React, { useState } from "react";
import './Styling/Signup.css';
import './Styling/Login.css'
import { useNavigate } from "react-router-dom";

export function Login(){
    const [userlogin, setuserlogin] = useState({});
    const navigate = useNavigate();


    function loginuser() {
        fetch("http://localhost:3200/login", {
            method: "POST",
            body: JSON.stringify(userlogin),
            headers: { "Content-Type": "application/json" },
        }).then((res) => { return res.json() }).then(() => { navigate('/recipes') && console.log(); })
    }
    return(
        <>
        <div>
            <h2 class="signup-heading ">Sign in to your account</h2>
            <p class="signup-subhead">Enter your username and password</p>
            <input type='text' class="un" placeholder='username' onChange={(e) => { setuserlogin({ ...userlogin, username: e.target.value }) }} value={userlogin.username}/>
            <input type='text' class="loginpass" placeholder='password' onChange={(e) => { setuserlogin({ ...userlogin, password: e.target.value }) }} value={userlogin.password}/>
            <button class="login-button btn btn-dark" onClick={loginuser}>Sign in</button>
            <p class="notacc">Don't have an account?</p>
            <a class="siu" onClick={()=>navigate('/signup')}>Sign up</a>
        </div>
        </>
    )
}