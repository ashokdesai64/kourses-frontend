import React, { Component } from 'react';
import axios from 'axios';
import facebook from '../assets/images/facebook.svg';
import twitter from '../assets/images/twitter.svg';
import { GoogleLogin } from 'react-google-login';
import { TwitterLogin } from 'react-twitter-auth';
// import {FacebookLogin} from 'react-facebook-login';

class Login extends Component {

    constructor(props) {
        super(props);

        this.state = {
            field: {email : '',password : ''},
            errors: {email: '',password : ''}
        }

    }

    handleValidation() {
        let fields = this.state.field;
        let errors = {};
        let formIsValid = true;

        //Email
        if (!fields["email"]) {
            formIsValid = false;
            errors["email"] = "please enter email";
        }
        if (!fields["password"]) {
            formIsValid = false;
            errors["password"] = "please enter password";
        }
        if (typeof fields["email"] !== "undefined") {
            let lastAtPos = fields["email"].lastIndexOf('@');
            let lastDotPos = fields["email"].lastIndexOf('.');

            if (!(lastAtPos < lastDotPos && lastAtPos > 0 && fields["email"].indexOf('@@') === -1 && lastDotPos > 2 && (fields["email"].length - lastDotPos) > 2)) {
                formIsValid = false;
                errors["email"] = "Email is not valid";
            }
        }
        this.setState({ errors: errors });
        return formIsValid;
    }

    handleSubmit(e) {
        e.preventDefault();
        if (this.handleValidation()) {
            axios.post('http://localhost:8080/login',{
                    email: this.state.field.email, // This is the body part
                    password: this.state.field.password, // This is the body part
            })
                .then((value) => {
                    if(value.data.message){
                        alert(value.data.message);
                    }else{
                        localStorage.setItem('userdata', JSON.stringify(value.data.data));
                        window.location ='/home';
                    }
                })
                .catch (err => {
                    console.log(err);
                });
        } else {
            alert("Form has errors.")
        }

    }

    handleChange(field, e) {
        // this.handleValidation();
        let fields = this.state.field;
        fields[field] = e.target.value;
        this.setState({ fields });
    }

    responseGoogle = (response) => {
        console.log(response);
        if (response.profileObj.email){
            axios.post('http://localhost:8080/sociallogin', {
                email: response.profileObj.email, // This is the body part
                username: response.profileObj.name, // This is the body part
                type: 'google', // This is the body part
            })
            .then((value) => {
                localStorage.setItem('userdata', JSON.stringify(value.data.data));
                window.location = '/home';
            })
            .catch(err => {
                console.log(err);
            });
        }else{
            console.log("error");
        }
    }
    responseFacebook = (response) => {
        console.log(response);
    }

    render() {
        return (
            <div id="login-content" className="modal-body login-modal_body">
                <form className="login_mdl" id="login_mdl" onSubmit={this.handleSubmit.bind(this)} method="POST">
                    <div className="sign-head">
                        <h3>Welcome Back!</h3>
                        <span>To keep connected with us please login with your personal information by email address and password</span>
                    </div>
                    <div className="social-media_connect">
                        <GoogleLogin
                            clientId="338442871337-fh49fjaav2c8112tdtrsg8tnaohpktoc.apps.googleusercontent.com"
                            buttonText="Login"
                            onSuccess={this.responseGoogle}
                            onFailure={this.responseGoogle}
                            cookiePolicy={'https://localhost:3000'}
                        />
                        <a href="home" className="social-media_child">
                            <img src={facebook} className="img-fluid" alt="" />
                        </a>
                        <a href="home" className="social-media_child">
                            <img src={twitter} className="img-fluid" alt="" />
                        </a>
                        <TwitterLogin loginUrl="http://localhost:4000/api/v1/auth/twitter"
                            onFailure={this.onFailed} onSuccess={this.onSuccess}
                            requestTokenUrl="http://localhost:4000/api/v1/auth/twitter/reverse" />
                    </div>
                    <div className="custom-input-group form-group">
                        <div className="form-control custom-input-control">
                            <div className="ci-type">
                                <label className="float-label small-label" htmlFor='email'>Email</label>
                                <input ref="email" onChange={this.handleChange.bind(this, "email")} value={this.state.field["email"]}  type="text" name="email" id="email" className="float-input dark-label clear-control" placeholder="" />
                                <label className="error">{this.state.errors["email"]}</label>
                            </div>
                        </div>
                    </div>
                    <div className="custom-input-group form-group">
                        <div className="form-control custom-input-control">
                            <div className="ci-type">
                                <label className="float-label small-label" htmlFor='password'>Password</label>
                                <input ref="password" onChange={this.handleChange.bind(this, "password")} value={this.state.field["password"]} type="password" name="password" id="password" className="float-input dark-label clear-control" placeholder="" />
                                <label className="error">{this.state.errors["password"]}</label>
                            </div>
                            <a href="#gotoForget" role="button" className="forgot-password" id="gotoForgot">Forgot</a>
                        </div>
                    </div>
                    <div className="sign-btn">
                        <button className="btn btn-shape btn-shape-primary login_btn btn-shape-lg" type="submit">Login</button>
                        <span className="sign-link">Don't have an account? <a href="#gotoAccount" role="button" id="gotoAccount">Sign Up</a></span>
                    </div>
                </form>
            </div>
        );
    }
}

export default Login;
