import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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
                                 <Link to="/all_course" className="nav-link">All Courses</Link>
                            </li>
                            <li className="nav-item">
                                 <Link to="/learn-path" className="nav-link">Learning Paths</Link>
                            </li>
                            <li className="nav-item">
                                 <Link to="/about" className="nav-link">About</Link>
                            </li>
                            <li className="nav-item">
                                 <Link to="/contact-us" className="nav-link">Contact</Link>
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
