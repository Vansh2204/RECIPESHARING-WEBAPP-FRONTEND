import React, { useEffect, useState } from "react"
import { Left_Sidebar } from './Left_Sidebar';
import { Right_Sidebar } from "./Right_Sidebar";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookBookmark, faBookmark, faComment, faCommentDots, faSave, faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import './Styling/Content.css';
import { RecipeModal } from "./RecipeModal";
import { CommentModal } from "./CommentModal";


// import { Right_Sidebar } from './Components/Right_Sidebar';
export function Content() {

    const [data, setdata] = useState([]);

    const { user, getIdTokenClaims } = useAuth0();
    const [modal,showmodal] = useState(false);
    const [itemId, setItemId] = useState(null);
    const [commentmodal,showcommentmodal] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        fetch("http://localhost:3300/posts").then((res) => res.json()).then((res) => setdata(res))

    }, [])

    

    
    

  



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
                    <div class="col">
                        <p class="recipecontent mb-5">{item.RecipeName}</p>
                
                    </div>
                    <div class="row" style={{position:'absolute',top:'65%',left:'5%'}}>
                    <img class="float-left mr-3" src={item.userinfo?.picture} style={{ width: "20px", height: "20px", borderRadius: "20px" }} />
                    <h3 class=" float-left" style={{ fontSize: "15px", display: 'flex' }}>{item.userinfo?.username}</h3>
                    </div>
                    <Link to={'../recipe/' + item._id}>   <a class="morebutton" style={{position:'absolute',top:'65%',left:'80%',color:'grey',cursor:'pointer'}}><span class="badge rounded-pill text-light" style={{backgroundColor:'green'}}>View more</span>
                    </a></Link>
                    <div class="card-footer" style={{ position: "absolute", bottom: "0", width: '100%' ,backgroundColor:'white'}}>
                        <div class="row">
                            {/* <FontAwesomeIcon class="btn" icon={faThumbsUp} style={{ marginLeft: "3%", height: "35px", color: isLiked ? 'orange' : 'grey' }} />{isLiked ? '' : ''} */}
                            <FontAwesomeIcon class="btn" icon={faCommentDots} style={{ marginLeft: "3%", height: "30px" ,color:'grey',cursor:'pointer'}}/>
                            {/* {commentmodal && <CommentModal props={()=>showcommentmodal(false)}/>} */}
                            <FontAwesomeIcon class="btn" icon={faBookmark} style={{ marginLeft: "3%", height: "30px", position: "absolute", right: "20", color: 'grey' }} />
                        </div>
                    </div>
                </div>
            </>
        )



    })
    return formattedrecipes;




}