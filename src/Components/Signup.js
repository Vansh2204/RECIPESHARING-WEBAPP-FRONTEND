import './Styling/Signup.css'

export function Signup(){
    return (
        <>
        <div>
            <h2 class="signup-heading ">Create an account</h2>
            <p class="signup-subhead">Enter your username , email and password</p>
            <input type='text' class="un" placeholder='username'/>
            <input type='text' class="em" placeholder='email@example.com'/>
            <input type='text' class="pass" placeholder='password'/>
            <button class="signup-button btn btn-dark">Create account</button>
            <p class="acc">Already have an account?</p>
            <a class="si">Sign in</a>
        </div>
        </>
    )
}