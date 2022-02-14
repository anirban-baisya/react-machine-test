import React,{useState} from 'react';
import { Link } from "react-router-dom";

import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

import fireDB from './firebaseSetup'; //importing config file


export default function RegisterPage() {
    const [email, setEmail] = useState('') // for storing user entered email
    const [password, setPassword] = useState('')
    const [cpassword, setCpassword] = useState('')


// const [ emailerror,setEmailError] = useState('');
    // const [ passerror,setPassError] = useState('');
    // const [ cpasserror,setCPassError] = useState('');


    const auth = getAuth();
    const register=async(e)=>{ //for api calling i used async & await

        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
       e.preventDefault();

       if(email ==="" || password === "" || cpassword ==="" || !regex.test(email) || password.length < 4 || password.length > 4 || cpassword != password){ //if any of this matches are found then then the below statements will execute
        if(email === "")
        {   
            // setEmailError("Field Should not be Empty Enter The Email")
            // setPassError("")
            // setCPassError("")
            alert('Field Should not be Empty Enter The Email')
        }
       else if(!regex.test(email))
        {   
            // setEmailError("Field Should not be Empty Enter The Email")
            // setPassError("")
            // setCPassError("")
            alert('This is not a valid email format!')
        }
        else if(password === "")
        {
            // setPassError("Field Should not be Empty Enter The Password")
            // setEmailError("")
            // setCPassError("")
            alert('Field Should not be Empty Enter The Password')
        }
        else if(password.length < 4)
        {
            // setPassError("Field Should not be Empty Enter The Password")
            // setEmailError("")
            // setCPassError("")
            alert('Password must be more than 4 characters')
        }
        else if(password.length > 10)
        {
            // setPassError("Field Should not be Empty Enter The Password")
            // setEmailError("")
            // setCPassError("")
            alert('Password cannot exceed more than 10 characters')
        }
        else if(cpassword === "")
        {
            // setPassError("")
            // setEmailError("")
            // setCPassError("Field Should not be Empty Enter The Password")
            alert('Field Should not be Empty Enter The Password')
        }
        else if(cpassword != password)
        {
            // setPassError("")
            // setEmailError("")
            // setCPassError("Field Should not be Empty Enter The Password")
            alert('Both the password field should be same')
        }
        // return
    }
        
        try {
                const result = await createUserWithEmailAndPassword(auth, email, password)
                console.log(result)

                alert("Registration Success")

            } catch (error) {
                console.log(error);
                alert("Registration Failed")

            }
    }
  return (
    <>  
        <div class="search_main_section">
<div class="container">
<div class="row res_padd">




<div class="main-center-div">
                  <div class="top-border-div">
                     <div class="login-from-area">
                        <h2>Create Account</h2>
                        {/* <div>
                        <input type="text" class="login-type" placeholder="Full name" name=""/>
                        <div class="clearfix"></div>
                        </div> */}
                        
                        <div>
                        <input type="text" class="login-type" placeholder="Email" value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
                        <div class="clearfix"></div>
                        </div>
                        
                        {/* <div>
                        <input type="text" class="login-type" placeholder="Mobile number" name=""/>
                        <div class="clearfix"></div>
                        </div> */}
                        
                        
                        <div class="password-in">
                        <input id="password-field" type="password" class="login-type" value={password} placeholder="password" onChange={(e)=>{setPassword(e.target.value)}}/>
                        <div class="clearfix"></div>
                        <span toggle="#password-field" class="field-icon fa fa-fw fa-eye toggle-password"></span>
                        </div>

                        <div class="password-in">
                        <input id="password-field" type="text" class="login-type" value={cpassword} placeholder="Confirm password" onChange={(e)=>{setCpassword(e.target.value)}}/>
                        <div class="clearfix"></div>
                        <span toggle="#password-field" class="field-icon fa fa-fw fa-eye toggle-password"></span>
                        </div> 

                        <p>By clicking Sign In or continue with Facebook or Google, you agree to all <a href=""> Terms of Service</a> and <a href="#"> Privacy Policy</a></p>
                        <button type="submit" class="login-submit" onClick={register}>Register</button>
                        {/* <button type="submit" class="login-submit" >Register</button> */}
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
                     <p>Already have an account? <Link to ='/login'>Login</Link></p>
                  </div>
               </div>



  
</div>
</div>
</div>
{/* <!----> */}



    </>
  )
}