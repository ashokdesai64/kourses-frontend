import React, { Component } from 'react';
import axios from 'axios';
import Helper from '../services/genral_helper';
import $ from 'jquery';

class Check_otp extends Component {

    constructor(props) {
        super(props);

        this.state = {
            field: { otp: '' },
            errors: { otp: '' }
        }

    }

    handleValidation() {
        let fields = this.state.field;
        let errors = {};
        let formIsValid = true;

        //Email
        if (!fields["otp"]) {
            formIsValid = false;
            errors["otp"] = "please enter otp";
        }
        this.setState({ errors: errors });
        return formIsValid;
    }

    handleSubmit(e) {
        e.preventDefault();
        if (this.handleValidation()) {
            $('.check_otp').prop('disabled', true);
            $('.check_otp').text('loading......');
            axios.post(Helper.api_call('check_otp'), {
                otp: this.state.field.otp, // This is the body part
                email: $('#for_hidden_email').val(),
            })
                .then((value) => {
                    $('.check_otp').prop('disabled', false);
                    $('.check_otp').text('Check OTP');
                    if (value.data.status === "success") {
                        $('#check_otp').addClass('d-none');
                        $('#cng_password').removeClass('d-none');
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
            <div id="check_otp" className="modal-body login-modal_body d-none">
                <form className="login-form" id="otp_form" onSubmit={this.handleSubmit.bind(this)} method="post">
                    <input type="hidden" id="for_hidden_email"></input>
                    <div className="sign-head border-0 mb-0">
                        <h3>Enter OTP</h3>
                    </div>
                    <div className="custom-input-group form-group">
                        <div className="form-control custom-input-control">
                            <div className="ci-type">
                                <label className="float-label small-label" htmlFor='otp'>OTP</label>
                                <input ref="otp" onChange={this.handleChange.bind(this, "otp")} value={this.state.field["otp"]} type="text" name="otp" id="otp" className="float-input dark-label clear-control" placeholder="" />
                                <label className="error">{this.state.errors["otp"]}</label>
                            </div>
                        </div>
                    </div>
                    <div className="sign-btn">
                        <button type="submit" className="btn btn-shape btn-shape-primary btn-shape-lg check_otp">Check OTP</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default Check_otp;
