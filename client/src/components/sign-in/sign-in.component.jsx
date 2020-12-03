import React, {useState} from 'react';
import { connect } from "react-redux";

import './sign-in.styles.scss';

import FormInput from '../form-input/form-input.component';
import CustomBtn from '../custom-btn/custom-btn.component';

import { googleSignInStart, emailSignInStart } from "../../redux/user/user.actions";

const SignIn = ({ emailSignInStart, googleSignInStart }) => {

    const [userCredentials, setCredentials] = useState({email: '', password: ''});
  
    const {email, password} = userCredentials;

    const handleSubmit = async e => {
        e.preventDefault(); 
        emailSignInStart(email, password);

    };

    const handleChange = e => {
        const {value, name} = e.target;

        // this enables the same function to be used for both email and password fields to capture the name-value pairs
        setCredentials({...userCredentials, [name]: value });
    };


    return (
        <div className="sign-in">
            <h2>I already have an account</h2>
            <span>Sign in with your email and password</span>

        <form onSubmit={handleSubmit} >
            <FormInput 
            type="email" 
            name="email" 
            value={email}
            label="email"
            handleChange={handleChange} 
            required />

            <FormInput 
            type="password" 
            name="password" 
            value={password}
            handleChange={handleChange} 
            label="password"
            required />


            <div className="buttons">

            <CustomBtn type="submit">
                Sign In
            </CustomBtn>
            <CustomBtn type="button" onClick={googleSignInStart} isGoogleSignIn >
                Sign in with Google
            </CustomBtn>
            </div>
        </form>
        </div>
    )
    
}

const mapDispatchToProps = dispatch => ({
    googleSignInStart: () => dispatch(googleSignInStart()),
    emailSignInStart: (email, password) => dispatch(emailSignInStart({ email, password }))
})

export default connect(null, mapDispatchToProps)(SignIn);