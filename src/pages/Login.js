import React,{useState} from 'react'
import { Link } from "react-router-dom";

import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

import fireDB from './firebaseSetup'; //importing config file


export default function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const auth = getAuth();
    const login=async(e)=>{ //for api calling i used async & await

       
        
        try {
                const result = await signInWithEmailAndPassword(auth, email, password)
                // console.log(result)
                localStorage.setItem('currentUser', JSON.stringify(result)) // it storing the result if result is success 
                alert("Login Success")
                window.location.href= '/' // it redirect to the home page
            } catch (error) {
                console.log(error);
                alert("Login Failed")

            }
    }






  return (
    <>
            
{/* <!----> */}
<div class="search_main_section">
<div class="container">
<div class="row res_padd">




<div class="main-center-div">
                  <div class="top-border-div">
                     <div class="login-from-area">
                        <h2>Login</h2>
                        <div>
                        <input type="text" class="login-type" placeholder="Email " value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
                        <div class="clearfix"></div>
                        </div>
                        <div class="password-in">
                        <input id="password-field" type="password" class="login-type" value={password} placeholder="password" onChange={(e)=>{setPassword(e.target.value)}}/>
                        <div class="clearfix"></div>
                        <span toggle="#password-field" class="field-icon fa fa-fw fa-eye toggle-password"></span>
                        </div>
                        <div class="remmber-area">
                           <label class="list_checkBox">Remember me
                           <input type="checkbox" name="text"/>
                           <span class="list_checkmark"></span>
                           </label>
                           <a class="forgot-passwords" href="#">Forgot Password?</a>
                        </div>
                        {/* <!--<p>By clicking Sign In or continue with Facebook or Google, you agree to all <a href=""> Terms of Service</a> and <a href="#"> Privacy Policy</a></p>--> */}
                        <button type="submit" class="login-submit" onClick={login}>Login</button>
                     </div>
                     <div class="or-area">
                        <span>Or Continue with</span>
                     </div>
                     <div class="login-socials-area">
                        <div class="socials-btns">
                           <a href="#" class="common-btns facebook-btn">
                           <img src="./images/login-facebook.png" alt=""/> Facebook
                           </a>
                           <a href="#" class="common-btns google-btn">
                           <img src="./images/login-google.png" alt=""/> Google
                           </a>
                        </div>
                        
                     </div>
                  </div>
                  <div class="bottom-account-div">
                     <p>Don't have an account? <Link to='/register'>Create Account</Link></p>
                  </div>
               </div>



  
</div>
</div>
</div>
{/* <!----> */}

    </>
  )
}
