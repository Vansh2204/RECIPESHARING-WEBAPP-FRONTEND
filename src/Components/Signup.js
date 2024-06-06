import { useNavigate } from 'react-router-dom';
import './Styling/Signup.css';
import React,{ useEffect, useState } from 'react';
import { Flip, ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export function Signup(){

    const [user, setuser] = useState({});
    const navigate = useNavigate();

    function registeruser(){
            fetch("http://localhost:3200/register",{
                 method:"POST",
                 body:JSON.stringify(user),
                 headers:{"Content-Type":"application/json"},
             }).then((res)=>{
                 return res.json()
             }).then(()=>{
                 navigate('/recipes');
            })
         }

    const successtoast = ()=>toast("You're in !")
        
    return (
        <>
        <div>
            <h2 class="signup-heading ">Create an account</h2>
            <p class="signup-subhead">Enter your username , email and password</p>
            <input type='text' class="un" placeholder='username' onChange={(e) => { setuser({ ...user, username: e.target.value }) }} value={user.username}/>
            <input type='text' class="em" placeholder='email@example.com' onChange={(e) => { setuser({ ...user, email: e.target.value }) }} value={user.email}/>
            <input type='text' class="pass" placeholder='password' onChange={(e) => { setuser({ ...user, password: e.target.value }) }} value={user.password}/>
            <button class="signup-button btn btn-dark" onClick={registeruser}>Create account</button>
            <p class="acc">Already have an account?</p>
            <a class="si" onClick={()=>navigate('/login')}>Sign in</a>
        </div>
        </>
    )
}