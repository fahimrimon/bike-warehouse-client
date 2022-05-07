import React, { useEffect, useState } from "react";
import {useSignInWithEmailAndPassword, useSignInWithGoogle } from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "../../../src/styles/style.css";
import { auth } from "../../firebase.init";
import "./Login.css";
const Login = () => {
        const [userInfo, setUserInfo] = useState({
            email: "",
            password: "",
        })
        const [errors, setErrors] = useState({
            email: "",
            password: "",
            general: "",
        })
    
        const [signInWithEmail, user, loading, hookError] = useSignInWithEmailAndPassword(auth);
        const [signInWithGoogle, googleUser, loading2, googleError] = useSignInWithGoogle(auth);
     
        const handleEmailOnChange = (e) => {
            const emailRegex = /\S+@\S+\.\S+/;
            const validEmail = emailRegex.test(e.target.value);
            
            if(validEmail){
                setUserInfo({...userInfo, email: e.target.value}) 
                setErrors({...errors, email: ""})      
            } else {
                setErrors({...errors, email: "Invalid email"})
                setUserInfo({...userInfo, email: ""})
            }
    
              }

        const handlePasswordOnChange = (e) => {
            const passwordRegex = /.{6,}/;
            const validPassword = passwordRegex.test(e.target.value);
            
            if(validPassword){
                setUserInfo({...userInfo, password: e.target.value});
                setErrors({...errors, password: ""});
            } else {
                setErrors({...errors, password: "Minimum 6 characters!"});
                setUserInfo({...userInfo, password: ""})
            }
            
        }
    
        const handleLogin = (e) => {
            e.preventDefault();
    
            console.log(userInfo)
    
            signInWithEmail(userInfo.email, userInfo.password);
            
        }
    
           const navigate = useNavigate();
           const location = useLocation();
           const from = location.state?.from?.pathname || "/";
    
           useEffect(() => {
               if (user) {
                   navigate(from);
               }
           }, [user]);

  return (
    <div className="login-container">
      <div className="login-title">LOGIN</div>
      <form onSubmit={handleLogin} className="login-form">
        <input onChange={handleEmailOnChange} type="text" placeholder="Enter your Email" />
        {errors?.email && <p className="error-message">{errors.email}</p>}
        <input onChange={handlePasswordOnChange} type="password" placeholder="Your password" />
        {errors?.password && <p className="error-message">{errors.password}</p> }
        <button>Login</button>
        <p className="sign-up-now">Don't have an account? <Link to="/signup">Sign up now</Link> </p>
      </form>
      <button onClick={() => signInWithGoogle()}>Login with Google</button>
    </div>
  );
};

export default Login;