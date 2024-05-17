import React, { useEffect, useState } from "react"
import { Left_Sidebar } from './Left_Sidebar';
import { Right_Sidebar } from "./Right_Sidebar";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
// import { Right_Sidebar } from './Components/Right_Sidebar';
export function Content() {

    const [data, setdata] = useState([]);


    useEffect(() => {
        fetch("http://localhost:3300/recipes").then((res) => res.json()).then((res) => setdata(res))
    })

    const container = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        
        
    }



    const formattedrecipes = data.map((item) => {

        return (
            <>
            <div className="background"></div>
                <div style={container}>
                    <div class="card ml-5 mt-3 mb-5" style={{ height: "80vh", width: "70vh" ,border:"none"}}>
                        <div class="card-body">
                            {/* <img src={item.UserImage} class="card-img-top" alt="..." style={{ borderRadius: 20}} /> */}
                            <p class="card-title float-left">{item.UserName}</p>
                        </div>
                        <h2 class="card-text ml-3">{item.RecipeName}</h2>
                        <div class="card-body">
                            <a class="btn btn-light border border-dark">Description...</a>
                        </div>
                        <img src={item.RecipeImage} class="card-img-top " alt="..." style={{ height: "55vh", width: "70vh" }} />

                    </div>

                </div>
            </>
        )



    })
    return formattedrecipes;



}