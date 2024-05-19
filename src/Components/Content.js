import React, { useEffect, useState } from "react"
import { Left_Sidebar } from './Left_Sidebar';
import { Right_Sidebar } from "./Right_Sidebar";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";
// import { Right_Sidebar } from './Components/Right_Sidebar';
export function Content() {

    const [data, setdata] = useState([]);


    useEffect(() => {
        fetch("http://localhost:3300/recipes").then((res) => res.json()).then((res) => setdata(res))
    })





    const formattedrecipes = data.map((item) => {

        return (
            <>
            <div className="background"></div>
                    <div class="content card mx-auto">
                        <div class="username card-body">
                            {/* <img src={item.UserImage} class="card-img-top" alt="..." style={{ borderRadius: 20}} /> */}
                            <p class="card-title float-left">{item.UserName}</p>
                        </div>
                        <h2 class="card-text justify-content-start">{item.RecipeName}</h2>
                        <div class="recipecontent">
                        <Link to={"../recipe/" + item._id}>
                            <a class="btn btn-dark mb-3" style={{color:"white"}}>Description...</a>
                            </Link>
                        </div>
                        {/* <div class="recipebody">
                        <img src={item.RecipeImage} class="card-img-top " alt="..." style={{ height: "55vh", width: "70vh" }} />
                        </div> */}

                    </div>

            </>
        )



    })
    return formattedrecipes;



}