import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";



export function CommentModal({props}){
    return(
        <>
        <div class="commentmodal">
            <div>
            <FontAwesomeIcon onClick={props} class="closemodal btn" icon={faCircleXmark} />
                <div class="card">
                    <h2>Comments</h2>
                </div>
            </div>

        </div>
        </>
    )
}