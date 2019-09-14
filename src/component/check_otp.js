import React, { Component } from 'react';

class Check_otp extends Component {

    constructor(props) {
        super(props);

        this.state = {
            login: {}
        }
    }

    handleValidation() {
        let fields = this.state.login;
        let errors = {};
        let formIsValid = true;

        //Email
        if (!fields["login_email"]) {
            formIsValid = false;
            errors["login_email"] = "Cannot be empty";
        }

        if (typeof fields["login_email"] !== "undefined") {
            let lastAtPos = fields["login_email"].lastIndexOf('@');
            let lastDotPos = fields["login_email"].lastIndexOf('.');

            if (!(lastAtPos < lastDotPos && lastAtPos > 0 && fields["login_email"].indexOf('@@') === -1 && lastDotPos > 2 && (fields["email"].length - lastDotPos) > 2)) {
                formIsValid = false;
                errors["login_email"] = "Email is not valid";
            }
        }
        this.setState({ errors: errors });
        return formIsValid;
    }

    contactSubmit(e) {
        e.preventDefault();
        if (this.handleValidation()) {
            alert("Form submitted");
        } else {
            alert("Form has errors.")
        }

    }

    handleChange(field, e) {
        let fields = this.state.login;
        fields[field] = e.target.value;
        this.setState({ fields });
    }

    render() {
        return (
            <div id="check_otp" className="modal-body login-modal_body d-none">
                <form className="login-form" id="check_otp_form" method="POST">
                    <div className="sign-head border-0 mb-0">
                        <h3>Enter OTP</h3>
                    </div>
                    <div className="custom-input-group form-group">
                        <div className="form-control custom-input-control">
                            <div className="ci-type">
                                <label className="float-label small-label">OTP</label>
                                <input type="text" name="otp" className="float-input dark-label clear-control" placeholder="" />
                                <input type="hidden" name="user_email" id="user_email" />
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
