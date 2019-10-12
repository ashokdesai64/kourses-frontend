import React, { Component } from 'react';
import axios from 'axios';
import Header from '../src/header';
import Footer from '../src/footer';
import Helper from '../src/services/genral_helper';
import left_img from '../src/assets/images/left-shape.svg'
import $ from 'jquery';

class Contact extends Component {

    constructor(props) {
        super(props);

        this.state = {
            field: { email: '', contact_username: '',contact_message:'',contact_subject:'' },
            errors: { email: '', contact_username: '',contact_message:'',contact_subject:'' }
        }

    }

    handleValidation() {
        let fields = this.state.field;
        let errors = {};
        let formIsValid = true;

        //Email
        if (!fields["contact_username"]) {
            formIsValid = false;
            errors["contact_username"] = "please enter username";
        }
        if (!fields["contact_subject"]) {
            formIsValid = false;
            errors["contact_subject"] = "please enter subject";
        }
        if (!fields["contact_email"]) {
            formIsValid = false;
            errors["contact_email"] = "please enter email";
        }
        if (!fields["contact_message"]) {
            formIsValid = false;
            errors["contact_message"] = "please enter message";
        }
        if (typeof fields["contact_email"] !== "undefined") {
            let lastAtPos = fields["contact_email"].lastIndexOf('@');
            let lastDotPos = fields["contact_email"].lastIndexOf('.');

            if (!(lastAtPos < lastDotPos && lastAtPos > 0 && fields["contact_email"].indexOf('@@') === -1 && lastDotPos > 2 && (fields["contact_email"].length - lastDotPos) > 2)) {
                formIsValid = false;
                errors["contact_email"] = "Email is not valid";
            }
        }
        this.setState({ errors: errors });
        return formIsValid;
    }

    handleSubmit(e) {
        e.preventDefault();
        if (this.handleValidation()) {
            $('.alert-danger').hide();
            $('.contact_btn').html('<i className="fa fa-spinner fa-spin"></i>');
            $('.contact_btn').prop('disabled',true);
            axios.post(Helper.api_call('contact_user'), {
                email: this.state.field.contact_email, // This is the body part
                username: this.state.field.contact_username, // This is the body part
                subject: this.state.field.contact_subject, // This is the body part
                message: this.state.field.contact_message, // This is the body part
            })
                .then((value) => {
                    $('.contact_btn').html('Send');
                    $('.contact_btn').prop('disabled', false);
                    if (value.data.status === "success"){
                        Helper.notify(value.data.status, value.data.message);
                        setTimeout(() => {
                            window.location = '/home';
                        }, 1000);
                    }else{
                        Helper.notify(value.data.status, value.data.message);
                    }
                })
                .catch(err => {
                    $('.contact_btn').html('Send');
                    $('.contact_btn').prop('disabled', false);
                    Helper.notify('error', err);
                });
        }

    }

    handleChange(field, e) {
        // this.handleValidation();
        let fields = this.state.field;
        fields[field] = e.target.value;
        this.setState({ fields });
    }

    render() {
        return (
            <React.Fragment>
            <Header {...this.props}/>
                <section className="content-page_sec">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-sm-12 col-md-12 col-lg-10 offset-lg-1">
                                <div className="simple-content_box">
                                    <div className="section-title">
                                        <h2>Get In Touch</h2>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br/> Dolor illum assumenda eum iste.  </p>
                                    </div>
                                    <div className="contact-form">
                                        <form className="contact_mdl" id="contact_mdl" onSubmit={this.handleSubmit.bind(this)} method="POST">
                                            <div className="custom-flex_row">
                                                <div className="custom-input-group form-group">
                                                    <div className="form-control custom-input-control">
                                                        <div className="ci-type">
                                                            <label className="float-label small-label" htmlFor='contact_username'>Your Name (required)</label>
                                                            <input ref="contact_username" onChange={this.handleChange.bind(this, "contact_username")} value={this.state.field["contact_username"]} type="text" name="contact_username" id="contact_username" className="float-input dark-label clear-control" placeholder="" />
                                                            <label className="error">{this.state.errors["contact_username"]}</label>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="custom-input-group form-group">
                                                    <div className="form-control custom-input-control">
                                                        <div className="ci-type">
                                                            <label className="float-label small-label" htmlFor='contact_email'>Email (required)</label>
                                                            <input ref="contact_email" onChange={this.handleChange.bind(this, "contact_email")} value={this.state.field["contact_email"]} type="text" name="contact_email" id="contact_email" className="float-input dark-label clear-control" placeholder="" />
                                                            <label className="error">{this.state.errors["contact_email"]}</label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="custom-input-group  form-group">
                                                <div className="form-control custom-input-control">
                                                    <div className="ci-type">
                                                        <label className="float-label small-label" htmlFor='contact_subject'>Subject (required)</label>
                                                        <input ref="contact_subject" onChange={this.handleChange.bind(this, "contact_subject")} value={this.state.field["contact_subject"]} type="text" name="contact_subject" id="contact_subject" className="float-input dark-label clear-control" placeholder="" />
                                                        <label className="error">{this.state.errors["contact_subject"]}</label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="custom-input-group   form-group">
                                                <div className="form-control custom-input-control h-100">
                                                    <div className="ci-type">
                                                        <label className="float-label small-label" htmlFor='contact_message'>Massage (required)</label>
                                                        <textarea placeholder="Massage" onChange={this.handleChange.bind(this, "contact_message")} value={this.state.field["contact_message"]} type="Message" name="contact_message" className="clear-textarea"></textarea>
                                                        <label className="error">{this.state.errors["contact_message"]}</label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="btn-group">
                                                <button type="submit" className="btn btn-shape btn-shape-primary btn-shape-lg contact_btn">Send</button>
                                            </div>
                                            <div id="error_log_contactus" style={{ 'width': '100%', 'margin': '19px 0px 12px', 'fontWeight': '500', 'fontFamily': 'inherit','letterSpacing': '0.5px'}}>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-shape left-shape">
                        <img src={left_img} alt="left-shape" className="img-fluid"/>
                    </div>
                </section>
            <Footer {...this.props}/>
            </React.Fragment>
        );
    }
}

export default Contact;
