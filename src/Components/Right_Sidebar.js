import React, { useEffect, useState } from "react"
import { Link, Outlet, useParams } from "react-router-dom";

export function Right_Sidebar(){
    let params = useParams();
    const [item,setitem] = useState({});

    useEffect(() => {
        fetch("http://localhost:3300/posts/" + params.id, { method: "GET" })
            .then((res) => { return res.json(); })
            .then((res) => { setitem(res) })
    }, []);


    return (
        <>
        <div className="card container-rightsidebar float-right col-6 ">
            <div>
                <h1>{item.RecipeProcess}</h1>
            </div>
                </div>
        <Outlet/>
        </>
    )
}