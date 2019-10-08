import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import logo from '../src/assets/images/logo-white.png';
import Helper from "../src/services/genral_helper";


class header_call extends Component {

constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
}

handleClick(e) {
    e.preventDefault();
    localStorage.removeItem("userdata");
    window.location = '/home';
}


    render() {
        return (
            <div className="App">
            <header>
                <div className="container">
                    <nav className="navbar navbar-expand-lg">
                        <Link className="navbar-brand" to="/home">
                            <img src={logo} className="align-top" width="150" alt="" />
                        </Link>
                        <button className="navbar-toggler menu-toggle-btn" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                            <span className="navbar-toggler-icon"></span>
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse header-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ml-auto header-nav">
                                <li className="nav-item ">
                                    <Link className="nav-link" to='/all_course' >All Course</Link>
                                </li>
                                <li className="nav-item ">
                                        <Link className="nav-link" to="/learn-path">Learning Paths</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/about">About</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/home">Contact</Link>
                                </li>   
                                { Helper.get_user() ? (
                                    <React.Fragment>
                                        <li className="nav-item">
                                            <div className="dropdown profile-menu">
                                                <Link className="profile-dropodwn" to="/home" role="button" id="filter-dropdown1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                        <img src={Helper.img_backend_auth_profile("no-user.jpg")} width="40px" height="40px" 
                                                        style={{ 'borderRadius': '50px' }} alt="" />
                                                </Link>
                                                <div className="dropdown-menu" aria-labelledby="filter-dropdown1">
                                                        <span onClick={this.handleClick}  className="dropdown-item logout" to="/home">Logout</span>
                                                </div>
                                            </div>
                                        </li>
                                    </React.Fragment>
                                ):(
                                    <React.Fragment>
                                        <li className="nav-item">
                                            <a href="#sign-modal" className="nav-link" role="button" data-toggle="modal" data-target="#sign-modal" aria-hidden="true">Login</a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="#sign-modal" className="btn btn-white btn-signup btn-shape" id="openSignUp" role="button" data-toggle="modal" data-target="#sign-modal" aria-hidden="true">Sign up</a>
                                        </li>
                                    </React.Fragment>
                                )
                                }
                            </ul>
                        </div>
                    </nav>
                </div>
            </header>
        </div>
        );
    }

}

export default header_call;
