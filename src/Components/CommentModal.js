import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark, faPaperPlane, faPlane } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { User, useAuth0 } from "@auth0/auth0-react";



export function CommentModal({ props }) {

    const [comments, setcomments] = useState([]);
    const [comment, setcomment] = useState({});
    const { getIdTokenClaims } = useAuth0();

    useEffect(() => {
        fetch("http://localhost:3300/comments").then((res) => res.json()).then((res) => setcomments(res));
    }, [])

    // const createcomment = async () => {
    //     const claims = await getIdTokenClaims();
    //     if (!claims) {
    //         console.log('Try again !!!')
    //         return;
    //     }
    //     const Userinfo = {
    //         username: claims.name,
    //         picture: claims.picture,
    //     };

    //     const commentuserinfo = { ...comment, Userinfo };

    //     const response = await fetch("http://localhost:3300/comments", {
    //         method: "POST",
    //         body: JSON.stringify(commentuserinfo),
    //         headers: { "Content-Type": "application/json" },
    //     });

    //     if (response.ok) {
    //         console.log(response);
    //     }

    // }

    return (
        <>

            <div class="commentmodal">
                <div>
                    <FontAwesomeIcon onClick={props} class="closemodal btn" icon={faCircleXmark} />
                    <div class="card" style={{ borderRadius: '20px' }}>
                        <div class="card-body" style={{ height: "80vh", width: "50vh" }}>
                            <div class="col border border-dark">

                                {comments.map((c) => (
                                    <>
                                    {/* <div class="row">
                                        <img class="float-left mr-2" src={c.Userinfo?.picture} style={{ width: "20px", height: "20px", borderRadius: "20px" }} />
                                        <h4 class=" float-left" style={{ fontSize: "13px" ,display:'flex'}}>{c.Userinfo?.username}</h4>
                                        </div>
                                        <p class="float-left ml-3" style={{fontSize:"17px"}}>{c.UserComment}</p> */}
                                    </>

                                ))}
                            </div>
                            {/* <div class="row" style={{ position: 'absolute', bottom: '20px' }}>
                                <input type="text" class="commentbox mr-3 ml-2" placeholder="Comment" value={comment.UserComment} onChange={(e) => { setcomment({ ...comment, UserComment: e.target.value }) }} />
                                <FontAwesomeIcon class="mt-2" icon={faPaperPlane} style={{ height: '22px', cursor: 'pointer' }}  />
                            </div> */}
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}