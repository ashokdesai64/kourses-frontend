import React, { Component } from 'react';
import axios from 'axios';
import Helper from '../services/genral_helper';
import $ from 'jquery';

class Forget_password extends Component {

    constructor(props) {
        super(props);

        this.state = {
            field: { forget_email: ''},
            errors: { forget_email: ''}
        }

    }

    handleValidation() {
        let fields = this.state.field;
        let errors = {};
        let formIsValid = true;

        //Email
        if (!fields["forget_email"]) {
            formIsValid = false;
            errors["forget_email"] = "please enter email";
        }else
        if (typeof fields["forget_email"] !== "undefined") {
            let lastAtPos = fields["forget_email"].lastIndexOf('@');
            let lastDotPos = fields["forget_email"].lastIndexOf('.');
            if (!(lastAtPos < lastDotPos && lastAtPos > 0 && fields["forget_email"].indexOf('@@') === -1 && lastDotPos > 2 && (fields["forget_email"].length - lastDotPos) > 2)) {
                formIsValid = false;
                errors["forget_email"] = "Email is not valid";
            }
        }
        this.setState({ errors: errors });
        return formIsValid;
    }

    handleSubmit(e) {
        e.preventDefault();
        if (this.handleValidation()) {
            $('.forget_email_btn').prop('disabled',true);
            $('.forget_email_btn').text('loading......');
            axios.post(Helper.api_call('forget_password_fun'), {
                email: this.state.field.forget_email, // This is the body part
            })
                .then((value) => {
                    $('.forget_email_btn').prop('disabled', false);
                    $('.forget_email_btn').text('Submit');
                    if (value.data.status === "success") {
                        $('#for_hidden_email').val(this.state.field.forget_email);
                        $('#forgot-content').addClass('d-none');
                        $('#check_otp').removeClass('d-none');
                    } else {
                        alert(value.data.message);
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
            <div id="forgot-content" className="modal-body login-modal_body d-none">
                <form className="forget_email" id="forget_email_form" onSubmit={this.handleSubmit.bind(this)} method="post">
                    <div className="sign-head border-0 mb-0">
                        <h3>Forgot Password</h3>
                    </div>
                    <div className="custom-input-group form-group">
                        <div className="form-control custom-input-control">
                            <div className="ci-type">
                                <label className="float-label small-label" htmlFor='forget_email'>Email</label>
                                <input ref="forget_email" onChange={this.handleChange.bind(this, "forget_email")} value={this.state.field["forget_email"]} type="text" name="forget_email" id="forget_email" className="float-input dark-label clear-control" placeholder="" />
                                <label className="error">{this.state.errors["forget_email"]}</label>
                            </div>
                        </div>
                    </div>
                    <div className="sign-btn">
                        <button type="submit" className="btn btn-shape btn-shape-primary btn-shape-lg forget_email_btn">Submit</button>
                        <span className="sign-link gotoLogin">Back to <a href="#signin" role="button">Sign In</a></span>
                    </div>
                </form>
            </div>
        );
    }
}

export default Forget_password;
