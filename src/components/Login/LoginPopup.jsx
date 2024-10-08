// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'
import { assets } from '../../../frontend_assets/assets';
import '../Login/LoginPopup.css'

// eslint-disable-next-line react/prop-types
const LoginPopup = ({setShowLogin}) => {
    const [currState,setCurrState]=useState("Login")
  return (
    <div className="login-pop-up">
        <form className='login-popup-container'>
            <div className="login-popup-title">
                <h2>{currState}</h2>
                <img onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt="" />

                
            </div>
            <div className="login-popup-inputs">
                {currState==="Login"?<></>:<input type="text" placeholder='Your Name' required />}
                <input type="email" placeholder='Your Email' required />
                <input type="password" placeholder='Your Password' required />

            </div>
            <button>{currState === "Sign Up" ? "Create account" : "Login"}</button>
            <div className="login-popup-condition">
                <input type="checkbox" required />
                <p>By,Continuing I agree to terms of use ans privacy policy</p>
            </div>
            {currState==="Login"
            ?<p>Create New Account? <span onClick={()=>setCurrState("Sign Up")}>Click Here</span></p>
            :<p>Already have an Account <span onClick={()=>setCurrState("Login")}>Login here</span></p>}
            
            
            </form>
    </div>
  )
}

export default LoginPopup