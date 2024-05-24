import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Postbutton } from "./Postbutton";
import { useState } from "react";


export function PostModal({ props }) {

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
                            <input type="text" class="recipe-name mb-5" placeholder="Recipe Name" />
                            <input type="file" class="recipe-image" onChange={handleimage} />
                           
                            {image && (
                                <div className="imagecontainer">
                                    <img src={image} alt="Selected" />
                                </div>
                            )}
                            </div>
                            <div class="col-6 float-right">
                            <textarea rows={5} class="ing-textarea" placeholder="List Ingredients"/>
                            <textarea rows={10} class="process-textarea" placeholder="Recipe Process"/>



                            </div>
                        </div>
                    </div>

                </div>

            </div>


        </>
    )
}