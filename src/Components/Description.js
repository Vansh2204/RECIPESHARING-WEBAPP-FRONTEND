import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { faStar } from '@fortawesome/free-solid-svg-icons';


export function Description() {

    let params = useParams();
    const [data, setdata] = useState({});
    const [rate,setrate] = useState(null);

    useEffect(() => {
        fetch("http://localhost:3300/recipes" + "/" + params.id, { method: "GET" })
            .then((res) => { return res.json(); })
            .then((res) => { setdata(res) })
    }, []);

    return (
        <>
            <div className="background"></div>
            <div class="col-4 float-left">
                <div class="mt-4" style={{ height: "70vh", width: "70vh", border: "none" }}>
                    <div class="card-body">
                        <h2 class="card-text ">{data.RecipeName}</h2>
                    </div>
                    <img src={data.RecipeImage} class="card-img-top " alt="..." style={{ height: "55vh", width: "65vh" }} />
                </div>
            </div>
            <div class="ingredients col-6 float-right border border-light m-4" style={{ borderRadius: 20 }}>
                <h3>Ingredients</h3>
            </div>
            <div class="process col-6 float-right border border-light m-4" style={{ borderRadius: 20 }}>
                <h3>Process</h3>
                <p style={{ whiteSpace: "pre-wrap" }}>{data.RecipeProcess}</p>
            </div>
    
        </>
    )

}