import React, { Component } from 'react';
import Loginmodal from '../src/component/login_modal';
import Registermodal from '../src/component/register_modal';
import Forgetmodal from '../src/component/forget_password';
import Checkmodal from '../src/component/check_otp';
import Changemodal from '../src/component/chnage_password';

class footer_call extends Component {

    render (){
         return (
             <div className="footer">
                <footer>
                    <div className="container">
                        <ul className="list-unstyled footer-menu">
                            <li className="nav-item active">
                                <a className="nav-link" href="false">All Courses</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="learn">Learning Paths</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="about">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="contact">Contact</a>
                            </li>
                        </ul>
                        <p className="copy-right">© 2018 Courses. All rights reserved.</p>
                    </div>
                </footer>
                <div className="modal fade modal-customize" id="sign-modal"  role="dialog" aria-labelledby="sign-modalTitle"
                    aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className="modal-content">
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                             <Loginmodal {...this.props}/>
                             <Registermodal {...this.props}/>
                             <Forgetmodal {...this.props}/>
                             <Checkmodal {...this.props}/>
                             <Changemodal {...this.props}/>
                            </div>
                    </div>
                </div>
            </div>  
        );    
    }
}

export default footer_call;
