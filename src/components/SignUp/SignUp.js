import React, { useEffect, useState } from 'react';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { auth } from '../../firebase.init';
const SignUp = () => {

    const [userInfo, setUserInfo] = useState({
        email: "",
        password: "",
        confirmPass: "",
    });
    const [errors, setErrors] = useState({
        email: "",
        password: "",
        general: "",
    });


    const [createUserWithEmailAndPassword, user, loading, hookError] =
        useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
        const [signInWithGoogle, googleUser, loading2, googleError] = useSignInWithGoogle(auth);

    const handleEmailOnChange = (e) => {
        const emailRegex = /\S+@\S+\.\S+/;
        const validEmail = emailRegex.test(e.target.value);

        if (validEmail) {
            setUserInfo({ ...userInfo, email: e.target.value });
            setErrors({ ...errors, email: "" });
        } else {
            setErrors({ ...errors, email: "Invalid email" });
            setUserInfo({ ...userInfo, email: "" });
        }
    };

    
    const handlePasswordOnChange = (e) => {
        const passwordRegex = /.{6,}/;
        const validPassword = passwordRegex.test(e.target.value);

        if (validPassword) {
            setUserInfo({ ...userInfo, password: e.target.value });
            setErrors({ ...errors, password: "" });
        } else {
            setErrors({ ...errors, password: "Minimum 6 characters!" });
            setUserInfo({ ...userInfo, password: "" });
        }
    };

    const handleConfirmPasswordChange = (e) => {
        if (e.target.value === userInfo.password) {
            setUserInfo({ ...userInfo, confirmPass: e.target.value });
            setErrors({ ...errors, password: "" });
        } else {
            setErrors({ ...errors, password: "Password's don't match" });
            setUserInfo({ ...userInfo, confirmPass: "" });
        }
    };

    const handleLogin = (e) => {
        e.preventDefault();
        console.log(userInfo);
        createUserWithEmailAndPassword(userInfo.email, userInfo.password);
    };
    
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
            <div className="login-title">Sign up</div>
            <form className="login-form" onSubmit={handleLogin}>
                <input type="text" placeholder=" Enter your Email" onChange={handleEmailOnChange} />
                {errors?.email && <p className="error-message">{errors.email}</p>}
                <div className="relative">
                    <input type="password" placeholder="Your password" onChange={handlePasswordOnChange} />
                    {errors?.password && <p className="error-message">{errors.password}</p>}
                </div>
                <input
                    type="password"
                    placeholder="Confirm password"
                    onChange={handleConfirmPasswordChange}
                />
                <button>Sign up</button>
                <p className="sign-up-now">Already have an account? <Link to="/login">Please login</Link> </p>
            </form>
            <button onClick={() => signInWithGoogle()}>Signup with Google</button>
        </div>
    );
};

export default SignUp;