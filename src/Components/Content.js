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

                {/* <div><h1>Content</h1></div> */}

                {/* <div class="card-container container-fluid ">
                <div class="content mx-auto float-left">
                    <img src="..." class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                </div>


            
                </div> */}


                    {/* <div class="content card mx-auto">
                        <div class="username card-body">
                            <p class="card-title float-left">{item.UserName}</p>
                        </div>
                        <h2 class="card-text justify-content-start">{item.RecipeName}</h2>
                        
                        <div class="recipebody">
                        <img src={item.RecipeImage} class="card-img-top " alt="..." style={{ height: "55vh", width: "70vh" }} />
                        </div>

                    </div>  */}
             <div className="background"></div>

                <div class="mb-3 mt-5 mx-auto card content" >
                    <div class="row">
                    <div class="col-md-5">
                            <div class="card-body">
                                <h5 class="card-title">{item.UserName}</h5>
                                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
                            </div>
                        </div>
                        
                        <div class="recipecontent col-6">
                            <img src={item.RecipeImage} class=" img-fluid " alt="..."/>
                        </div>
                        
                        
                    </div>
                </div>
            </>
        )



    })
    return formattedrecipes;




}