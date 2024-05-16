import React, { useEffect, useState } from "react"

export function Content(){

    const [data,setdata] = useState([]);

    useEffect(()=>{
        fetch("http://localhost:3300/recipes").then((res)=>res.json()).then((res)=>setdata(res))
    })
    
    const formattedrecipes = data.map((item)=>{
        return (
            <>
            <h1 >{item.UserName}</h1>
            </>
        )

        

    })
    return formattedrecipes;


   
}