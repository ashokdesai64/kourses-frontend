import React, { Component } from 'react';
import axios from 'axios';
import Helper from '../services/genral_helper';
import $ from 'jquery';

class Chnage_password extends Component {

    constructor(props) {
        super(props);

        this.state = {
            field: { forget_password: '', re_password: '' },
            errors: { forget_password: '', re_password:'' }
        }

    }

    handleValidation() {
        let fields = this.state.field;
        let errors = {};
        let formIsValid = true;

        //Email
        if (!fields["forget_password"]) {
            formIsValid = false;
            errors["forget_password"] = "please enter Password";
        } else if (!fields['re_password']){
            formIsValid = false;
            errors["re_password"] = "please enter Re-Password";
        } else if (fields['forget_password'] !==  fields['re_password']) {
            formIsValid = false;
            errors["re_password"] = "password not matched";
        }
        this.setState({ errors: errors });
        return formIsValid;
    }

    handleSubmit(e) {
        const { history } = this.props;
        e.preventDefault();
        if (this.handleValidation()) {
            if (!$('#for_hidden_email').val()){
                Helper.notify('error', 'something wrong please after sometime.');
                return;
            }
            $('.cng_pass').prop('disabled', true);
            $('.cng_pass').html('<i class="fas fa-spinner fa-spin"></i>');
            axios.post(Helper.api_call('password_change'), {
                email: $('#for_hidden_email').val(), // This is the body part
                password: this.state.field.forget_password, 
            })
                .then((value) => {
                    $('button.close').click();
                    $('.cng_pass').prop('disabled', false);
                    $('.cng_pass').html('Chnage Password');
                    if (value.data.status === "success") {
                        Helper.notify(value.data.status, value.data.message);
                        setTimeout(function(){
                            history.push(history.location.pathname);
                        },3000);
                    } else {
                        $('.cng_pass').prop('disabled', false);
                        $('.cng_pass').html('Chnage Password');
                        Helper.notify(value.data.status, value.data.message);
                    }
                })
                .catch(err => {
                    Helper.notify('error', err);
                });
        }
    }

    handleChange(field, e) {
        let fields = this.state.field;
        fields[field] = e.target.value;
        this.setState({ fields });
    }

    render() {
        return (
            <div id="cng_password" className="modal-body login-modal_body d-none">
                <form className="login-form" id="cng_password_form" onSubmit={this.handleSubmit.bind(this)} method="post">
                    <div className="sign-head border-0 mb-0">
                        <h3>Change Password</h3>
                    </div>
                    <div className="custom-input-group form-group">
                        <div className="form-control custom-input-control">
                            <div className="ci-type">
                                <label className="float-label small-label" htmlFor='forget_password'>Enter Password</label>
                                <input type="password" ref="forget_password" onChange={this.handleChange.bind(this, "forget_password")} value={this.state.field["forget_password"]}  name="forget_password" id="forget_password" className="float-input dark-label clear-control" placeholder="" />
                                <label className="error">{this.state.errors["forget_password"]}</label>
                            </div>
                        </div>
                    </div>
                    <div className="custom-input-group form-group">
                        <div className="form-control custom-input-control">
                            <div className="ci-type">
                                <label className="float-label small-label" htmlFor='re_password'>Enter Password</label>
                                <input type="password" ref="re_password" onChange={this.handleChange.bind(this, "re_password")} value={this.state.field["re_password"]} name="re_password" id="re_password" className="float-input dark-label clear-control" placeholder="" />
                                <label className="error">{this.state.errors["re_password"]}</label>
                            </div>
                        </div>
                    </div>
                    <div className="sign-btn">
                        <button type="submit" className="btn btn-shape btn-shape-primary btn-shape-lg cng_pass">Change Password</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default Chnage_password;
