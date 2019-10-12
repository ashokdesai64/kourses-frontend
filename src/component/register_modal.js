import React, { Component } from 'react';
import axios from 'axios';
import facebook from '../assets/images/facebook.svg';
import { GoogleLogin } from 'react-google-login';
import FacebookLogin from 'react-facebook-login';
import Helper from '../services/genral_helper';
import $ from 'jquery';

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
            const { history } = this.props;
            $('.signup_btn').html('<i class="fas fa-spinner fa-spin"></i>');
            $('.signup_btn').prop('disabled', true);
            axios.post(Helper.api_call('create_user'), {
                username: this.state.field.name, // This is the body part
                email: this.state.field.email, // This is the body part
                password: this.state.field.password, // This is the body part
                re_password: this.state.field.re_password, // This is the body part
            })
                .then((value) => {
                    $('.signup_btn').html('Sign Up');
                    $('.signup_btn').prop('disabled', false);
                    if (value.data.status === "success") {
                        $('button.close').click();
                        Helper.notify(value.data.status, value.data.message);
                        setTimeout(() => {
                            history.push(this.props.location.pathname);
                        }, 1000);
                    } else {
                        Helper.notify(value.data.status, value.data.message);
                    }
                })
                .catch(err => {
                    $('.signup_btn').html('Sign Up');
                    $('.signup_btn').prop('disabled', false);
                    Helper.notify('error', err);
                });
        }

    }

    handleChange(field, e) {
        let fields = this.state.field;
        fields[field] = e.target.value;
        this.setState({ fields });
    }

    responseGoogle = (response) => {
        const { history } = this.props;
        if (response.profileObj.email) {
            axios.post(Helper.api_call('sociallogin'), {
                email: response.profileObj.email, // This is the body part
                username: response.profileObj.name, // This is the body part
                type: 'google', // This is the body part
            })
                .then((value) => {
                    if (value.data.status === "success") {
                        $('button.close').click();
                        Helper.notify(value.data.status, value.data.message);
                        localStorage.setItem('userdata', JSON.stringify(value.data.data));
                        setTimeout(() => {
                            history.push(this.props.location.pathname);
                        }, 1000);
                    } else {
                        Helper.notify(value.data.status, value.data.message);
                    }
                })
                .catch(err => {
                    Helper.notify('error', err);
                });
        } else {
            $('button.close').click();
            Helper.notify('error', 'something wrong please try again.');
        }
    }
    responseFacebook = (response) => {
        const { history } = this.props;
        if (response.email) {
            axios.post(Helper.api_call('sociallogin'), {
                email: response.email, // This is the body part
                username: response.name, // This is the body part
                type: 'facebook', // This is the body part
            })
                .then((value) => {
                    if (value.data.status === "success") {
                        $('button.close').click();
                        Helper.notify(value.data.status, value.data.message);
                        localStorage.setItem('userdata', JSON.stringify(value.data.data));
                        setTimeout(() => {
                            history.push(this.props.location.pathname);
                        }, 1000);
                    } else {
                        Helper.notify(value.data.status, value.data.message);
                    }
                })
                .catch(err => {
                    Helper.notify('error', err);
                });
        } else {
            $('button.close').click();
            Helper.notify('error', 'something wrong please try again.');
        }
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
                        <GoogleLogin
                            clientId="338442871337-fh49fjaav2c8112tdtrsg8tnaohpktoc.apps.googleusercontent.com"
                            onSuccess={this.responseGoogle}
                            onFailure={this.responseGoogle}
                            cookiePolicy={'https://localhost:3000'}
                            className="social-media_child"
                            buttonText=""
                        ></GoogleLogin>
                        <FacebookLogin
                            appId="341974583323946"
                            fields="name,email,picture"
                            callback={this.responseFacebook}
                            style={{ 'display': 'none' }}
                            icon={<img src={facebook} className="img-fluid" alt="" />}
                            cssClass="social-media_child"
                            textButton=""
                        />
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
