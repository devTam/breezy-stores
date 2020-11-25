import React from 'react';
import { connect } from "react-redux";

import './sign-in.styles.scss';

import FormInput from '../form-input/form-input.component';
import CustomBtn from '../custom-btn/custom-btn.component';

import { googleSignInStart, emailSignInStart } from "../../redux/user/user.actions";

class SignIn extends React.Component {

    state = {
        email: '',
        password: ''
    };

    handleSubmit = async e => {
        e.preventDefault(); 
        const { emailSignInStart } = this.props;
        const {email, password} = this.state;

        emailSignInStart(email, password);

    };

    handleChange = e => {
        const {value, name} = e.target;

        // this enables the same function to be used for both email and password fields to capture the name-value pairs
        this.setState({ [name]: value });
    };


    render() {
        const { googleSignInStart } = this.props;
        return (
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

            <form onSubmit={this.handleSubmit} >
                <FormInput 
                type="email" 
                name="email" 
                value={this.state.email}
                label="email"
                handleChange={this.handleChange} 
                required />

                <FormInput 
                type="password" 
                name="password" 
                value={this.state.password}
                handleChange={this.handleChange} 
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
}

const mapDispatchToProps = dispatch => ({
    googleSignInStart: () => dispatch(googleSignInStart()),
    emailSignInStart: (email, password) => dispatch(emailSignInStart({ email, password }))
})

export default connect(null, mapDispatchToProps)(SignIn);