import React, { useEffect, useState } from "react"
import { Left_Sidebar } from './Left_Sidebar';
import { Right_Sidebar } from "./Right_Sidebar";
// import { Right_Sidebar } from './Components/Right_Sidebar';
export function Content() {

    const [data, setdata] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3300/recipes").then((res) => res.json()).then((res) => setdata(res))
    })

    const formattedrecipes = data.map((item) => {
        return (
            <>
                <Left_Sidebar />
                <div class="card float-left col-5 ml-5 mt-3" style={{ height: "40vh" }}>
                    <div class="card-body">
                        <img src={item.RecipeImage} class="card-img-top" alt="..." style={{ borderRadius: 40 }} />
                        <p class="card-title float-left">{item.UserName}</p>
                        <h2 class="card-text ">{item.RecipeName}</h2>
                    </div>
                    <img src={item.RecipeImage} class="card-img-top" alt="..." />
                    <div class="card-body">
                        <a href="#" class="card-link">Card link</a>
                        <a href="#" class="card-link">Another link</a>
                    </div>
                </div>
                <Right_Sidebar />

            </>
        )



    })
    return formattedrecipes;



}