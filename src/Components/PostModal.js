import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Postbutton } from "./Postbutton";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";


export function PostModal({ props }) {

    const [post,setpost] = useState({});
    const navigate = useNavigate();
    const {getIdTokenClaims} = useAuth0();


    // function createpost(){
    //     fetch("http://localhost:3300/posts",{
    //         method:"POST",
    //         body:JSON.stringify(post),
    //         headers:{"Content-Type":"application/json"},
    //     }).then((res)=>{
    //         return res.json()
    //     }).then(()=>{
    //         navigate('/recipes')
    //     })
    // }
    const createpost = async ()=>{
        const claims = await getIdTokenClaims();
        if (!claims) {
            console.error("Claims Failed !!!!");
            return;
          }
        const userinfo={
            username:claims.name,
            picture:claims.picture,
        };

        const postuserinfo = {...post,userinfo};

        const response = await fetch("http://localhost:3300/posts",{
            method:"POST",
            body:JSON.stringify(postuserinfo),
            headers:{"Content-Type":"application/json"},
        });

        if(response.ok){
            navigate('/recipes')
        }else{
            console.log("Failed to Post")
        }

    }


    const [image, setImage] = useState(null);
    const handleimage = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                setImage(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <>
            <div class="postmodal bg-black">
                <div>
                    <FontAwesomeIcon onClick={props} class="closemodal btn" icon={faCircleXmark} />
                    <div class="card " style={{ borderRadius: "20px" }}>
                        <div class="card-body" style={{ height: "auto", width: "150vh" }}>
                            <div class="col-6 float-left">
                            <input type="text" class="recipe-name mb-5" placeholder="Recipe Name" value={post.RecipeName} onChange={(e)=>{setpost({...post,RecipeName:e.target.value})}}/>
                            <input type="file" class="recipe-image" onChange={handleimage} />
                           
                            {image && (
                                <div className="imagecontainer">
                                    <img src={image} alt="Selected" />
                                </div>
                            )}
                            </div>
                            <div class="col-6 float-right">
                            <textarea rows={5} class="ing-textarea" placeholder="List Ingredients"/>
                            <textarea rows={10} class="process-textarea" placeholder="Recipe Process" value={post.RecipeProcess} onChange={(e)=>{setpost({...post,RecipeProcess:e.target.value})}}/>
                            <button class="btn btn-dark float-right" onClick={createpost}>Post</button>




                            </div>
                        </div>
                    </div>

                </div>

            </div>


        </>
    )
}