import React from 'react';
import logo from '../src/assets/images/logo-white.png';
import Helper from "../src/services/genral_helper";

function header_call() {
    return (
        <div className="App">
        <header>
            <div className="container">
                <nav className="navbar navbar-expand-lg">
                    <a className="navbar-brand" href="home">
                        <img src={logo} className="align-top" width="150" alt="" />
                    </a>
                    <button className="navbar-toggler menu-toggle-btn" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                        <span className="navbar-toggler-icon"></span>
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse header-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto header-nav">
                            <li className="nav-item ">
                                    <a className="nav-link" href="/all_course">All Courses</a>
                            </li>
                            <li className="nav-item ">
                                <a className="nav-link" href="/learn">Learning Paths</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/about">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/contact">Contact</a>
                            </li>   
                            { Helper.get_user() ? (
                                <div>
                                    <li className="nav-item">
                                        <div className="dropdown profile-menu">
                                            <a className="profile-dropodwn" href="#demo" role="button" id="filter-dropdown1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                <img src="https://kourses-codeigniter.qseksolutions.com/assets/back-end/user_profile/no-user.jpg" width="40px" height="40px" 
                                                    style={{ 'borderRadius': '50px' }} alt="" />
                                            </a>
                                            <div className="dropdown-menu" aria-labelledby="filter-dropdown1">
                                                <a className="dropdown-item logout" href="#demo">Logout</a>
                                            </div>
                                        </div>
                                    </li>
                                </div>
                            ):(
                                <div>
                                    <li className="nav-item">
                                        <a href="#sign-modal" className="nav-link" role="button" data-toggle="modal" data-target="#sign-modal" aria-hidden="true">Login</a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="#sign-modal" className="btn btn-white btn-signup btn-shape" id="openSignUp" role="button" data-toggle="modal" data-target="#sign-modal" aria-hidden="true">Sign up</a>
                                    </li>
                                </div>
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

export default header_call;
