import React, { useEffect, useState } from "react"
import { Left_Sidebar } from './Left_Sidebar';
import { Right_Sidebar } from "./Right_Sidebar";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookBookmark, faBookmark, faComment, faSave, faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";


// import { Right_Sidebar } from './Components/Right_Sidebar';
export function Content() {

    const [data, setdata] = useState([]);
    const { user, getIdTokenClaims } = useAuth0();

    useEffect(() => {
        fetch("http://localhost:3300/posts").then((res) => res.json()).then((res) => setdata(res))

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

                {/* <div class="mb-3 mt-5 mx-auto card content" >
                    <div class="row">
                        <div class="col-md-5">
                            <div class="card-body">
                             <img class="float-left mr-3" src={item.userinfo?.picture} style={{ width: "30px", height: "30px", borderRadius: "20px" }} />
                                <h3 class=" float-left" style={{ fontSize: "20px", display: 'flex' }}>{item.userinfo?.username}</h3> 
                                <div>
                                
                                    <h3>{item.RecipeName}</h3>
                                    <p>{item.RecipeProcess}</p>
                                </div>
                            </div>
                        </div>
                        <div class="recipecontent col-6">
                            <img src={item.RecipeImage} class=" img-fluid " alt="..." />
                        </div>



                    </div>
                </div> */}

                <div class="card content">
                    <div class="card-header">
                    <img class="float-left mr-3" src={item.userinfo?.picture} style={{ width: "20px", height: "20px", borderRadius: "20px" }} />
                    <h3 class=" float-left" style={{ fontSize: "15px", display: 'flex' }}>{item.userinfo?.username}</h3> 
                    </div>
                    <div class="recipecontent">
                        <h4>{item.RecipeName}</h4>
                    </div>
                    <div class="card-footer" style={{position:"absolute",bottom:"0",width:'100%'}}>
                        <div class="row">
                            <FontAwesomeIcon icon={faThumbsUp} style={{marginLeft:"3%",height:"22px"}}/>
                            <FontAwesomeIcon icon={faComment} style={{marginLeft:"3%",height:"22px"}}/>
                            <FontAwesomeIcon icon={faBookmark} style={{marginLeft:"3%",height:"22px",position:"absolute",right:"20"}}/>


                        </div>

                    </div>
                    
                </div>
            </>
        )



    })
    return formattedrecipes;




}