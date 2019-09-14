import React, { Component } from 'react';
import axios from 'axios';
import google from '../assets/images/google.svg';
import facebook from '../assets/images/facebook.svg';
import twitter from '../assets/images/twitter.svg';

class Register extends Component {

    constructor(props) {
        super(props);

        this.state = {
            field: { name: '', email: '', password: '' ,re_password: ''},
            errors: { name: '', email: '', password: '',re_password: '' }
        }

    }

    handleValidation() {
        let fields = this.state.field;
        let errors = {};
        let formIsValid = true;

        if (!fields["name"]) {
            formIsValid = false;
            errors["name"] = "please enter user name";
        }
        if (!fields["email"]) {
            formIsValid = false;
            errors["email"] = "please enter email";
        }
        if (!fields["password"]) {
            formIsValid = false;
            errors["password"] = "please enter password";
        }
        if (!fields["re_password"]) {
            formIsValid = false;
            errors["re_password"] = "please enter re password";
        }
        if (fields["password"] !== fields["re_password"]) {
            formIsValid = false;
            errors["re_password"] = "Re-password not match";
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
            axios.post('http://localhost:8080/create_user', {
                username: this.state.field.name, // This is the body part
                email: this.state.field.email, // This is the body part
                password: this.state.field.password, // This is the body part
                re_password: this.state.field.re_password, // This is the body part
            })
                .then((value) => {
                    if (value.data.message) {
                        alert(value.data.message);
                    } else {
                        localStorage.setItem('userdata', JSON.stringify(value.data.data));
                        window.location = '/home';
                    }
                })
                .catch(err => {
                    console.log(err);
                });
        } else {
            alert("Form has errors.")
        }

    }

    handleChange(field, e) {
        let fields = this.state.field;
        fields[field] = e.target.value;
        this.setState({ fields });
    }

    render() {
        return (
            <div id="create-content" className="modal-body login-modal_body d-none">
                <form className="login-form" id="sign_up_mdl" onSubmit={this.handleSubmit.bind(this)} method="POST">
                    <div className="sign-head">
                        <h3>Create Account</h3>
                        <span>Please sign up to your personal account if you want to use all our premium products</span>
                    </div>
                    <div className="social-media_connect">
                        <a href="home" className="social-media_child">
                            <img src={google} className="img-fluid" alt="" />
                        </a>
                        <a href="home" className="social-media_child">
                            <img src={facebook} className="img-fluid" alt="" />
                        </a>
                        <a href="home" className="social-media_child">
                            <img src={twitter} className="img-fluid" alt="" />
                        </a>
                    </div>
                    <div className="custom-input-group form-group">
                        <div className="form-control custom-input-control">
                            <div className="ci-type">
                                <label className="float-label small-label" htmlFor='name'>User Name</label>
                                <input ref="name" onChange={this.handleChange.bind(this, "name")} value={this.state.field["name"]} type="text" name="sign_up_email" className="float-input dark-label clear-control" placeholder="" />
                                <label className="error">{this.state.errors["name"]}</label>
                            </div>
                        </div>
                    </div>
                    <div className="custom-input-group form-group">
                        <div className="form-control custom-input-control">
                            <div className="ci-type">
                                <label className="float-label small-label" htmlFor='email'>Email</label>
                                <input ref="email" onChange={this.handleChange.bind(this, "email")} value={this.state.field["email"]} type="text" name="sign_up_email" className="float-input dark-label clear-control" placeholder="" />
                                <label className="error">{this.state.errors["email"]}</label>
                            </div>
                        </div>
                    </div>
                    <div className="custom-input-group form-group">
                        <div className="form-control custom-input-control">
                            <div className="ci-type">
                                <label className="float-label small-label" htmlFor='password'>Password</label>
                                <input ref="password" onChange={this.handleChange.bind(this, "password")} value={this.state.field["password"]} type="password" name="password"  className="float-input dark-label clear-control" placeholder="" />
                                <label className="error">{this.state.errors["password"]}</label>
                            </div>
                        </div>
                    </div>
                    <div className="custom-input-group form-group">
                        <div className="form-control custom-input-control">
                            <div className="ci-type">
                                <label className="float-label small-label" htmlFor='re_password'>Confirm Password</label>
                                <input ref="re_password" onChange={this.handleChange.bind(this, "re_password")} value={this.state.field["re_password"]} type="password" name="re_password" className="float-input dark-label clear-control" placeholder="" />
                                <label className="error">{this.state.errors["re_password"]}</label>
                            </div>
                        </div>
                    </div>
                    <div className="sign-btn">
                        <button type="submit" className="btn btn-shape signup_btn btn-shape-primary btn-shape-lg">Sign Up</button>
                        <span className="sign-link gotoLogin">I have an account? <a href="#signin" role="button">Sign In</a></span>
                    </div>
                </form>
            </div>
        );
    }
}

export default Register;
