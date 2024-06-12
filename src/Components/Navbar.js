import { Outlet } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlateWheat, faUtensilSpoon, faUtensils } from "@fortawesome/free-solid-svg-icons";


export function Navbar() {

    const {isAuthenticated,loginWithRedirect,user,logout} = useAuth0();
    const navigate = useNavigate();

    return (
        <>
        <div></div>
            <nav class="navbar bg-body-tertiary bg-light" style={{height:"80px"}}>
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">
                        <FontAwesomeIcon icon={faUtensils} style={{color:"black",height:"30px"}}/>
                    </a>
                    {isAuthenticated ? (
                            navigate('/recipes')): (<button class="loginbutton btn btn-light mt-2" style={{border:'1px solid grey',borderRadius:'5px',fontFamily:'Arial',fontSize:'14px'}} onClick={async ()=>await loginWithRedirect()} >Sign in / Sign up</button>)}
                    {/* <button class="loginbutton btn btn-light mt-2" style={{border:'1px solid grey',borderRadius:'5px',fontFamily:'Arial',fontSize:'14px'}} onClick={()=>navigate('/signup')}>Sign in / Sign up</button> */}
                    
                </div>
            </nav>
            <Outlet/>
        </>
    )

}