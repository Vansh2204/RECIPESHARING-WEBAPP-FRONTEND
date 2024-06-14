import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { Left_Sidebar } from "./Left_Sidebar";
import { Navbar } from "./Navbar";
export function Description() {

    let params = useParams();
    const [data, setdata] = useState({});
    const [rate, setrate] = useState(null);

    useEffect(() => {
        fetch("http://localhost:3300/posts" + "/" + params.id, { method: "GET" })
            .then((res) => { return res.json(); })
            .then((res) => { setdata(res) })
    }, []);

    return (
        <>
            <div class="col">
                <div class="postbody">
                    <div class="card-body">
                        <h2 class=" ">{data.RecipeName}</h2>
                    </div>
                    <div class="postimage">
                        <img src={data.RecipeImage} class="card-img-top " alt="..." />
                    </div>
                </div>
            </div>
            <div class="elements mt-5" style={{ borderRadius: 20 }}>
                <h3>Ingredients</h3>
                <ul>
                    <li>{data.RecipeIngredients}</li>
                </ul>
            </div>
            <div class="elements ml-5" style={{ borderRadius: 20 }}>
                <h3>Process</h3>
               
                <p style={{ whiteSpace: "pre-wrap" }}>{data.RecipeProcess}</p>
            </div>


        </>
    )

}