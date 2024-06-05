import './Styling/Content.css';
import './Content';
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


export function RecipeModal({ props }) {

    let params = useParams();
    const [data, setdata] = useState({});
    useEffect(() => {
        fetch("http://localhost:3300/posts" + "/" + params.id, { method: "GET" })
            .then((res) => { return res.json(); })
            .then((res) => { setdata(res) })
    },[]);

    return (
        <>
            <div class="recipemodal">
                <div>
                    <FontAwesomeIcon onClick={props} class="close btn" icon={faCircleXmark} />
                    <div class="card">
                        <div class="card-body" style={{ height: "auto", width: "150vh" }}>
                            <div class="col-6 float-left">
                                <h1>{data.RecipeName}</h1>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}