import React, { Component } from 'react';

class Forget_password extends Component {

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
            <div id="forgot-content" className="modal-body login-modal_body d-none">
                <form className="login-form" id="forget_email" method="POST">
                    <div className="sign-head border-0 mb-0">
                        <h3>Forgot Password</h3>
                    </div>
                    <div className="custom-input-group form-group">
                        <div className="form-control custom-input-control">
                            <div className="ci-type">
                                <label className="float-label small-label">Email</label>
                                <input type="text" name="forget_email" className="float-input dark-label clear-control" placeholder="" />
                            </div>
                        </div>
                    </div>
                    <div className="sign-btn">
                        <button type="submit" className="btn btn-shape btn-shape-primary btn-shape-lg forget_email">Submit</button>
                        <span className="sign-link gotoLogin">Back to <a href="#signin" role="button">Sign In</a></span>
                    </div>
                </form>
            </div>
        );
    }
}

export default Forget_password;
