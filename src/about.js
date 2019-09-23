import React, { Component } from 'react';
import Header from '../src/header';
import Footer from '../src/footer';

class about extends Component {


    render() {
        return (
            <React.Fragment>
                <Header />
                <section className="content-page_sec">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-sm-12 col-md-12 col-lg-10 offset-lg-1">
                                <div className="simple-content_box">
                                    <div className="section-title">
                                        <h2>About Us</h2>
                                    </div>

                                    <div className="about-card">
                                        <div className="about-card_avatar">
                                            <img src="https://kourses-codeigniter.qseksolutions.com/assets/front-end/images/avatar2.png" alt="about photos" className="img-fluid img-thumbnail" />
                                        </div>
                                            <div className="about-detaile">
                                                <p>Hi! My name is  Kourses. I am a passionate and pragmatic software engineer with 18 years of professional experience,
                                                    specializing in full-stack development using a variety of languages and frameworks.
                                        I have a Bachelor of Science in Software Engineering and a Master of Science in Networks Systems.</p>
                                                <p><b>My mission is to make coding and software engineering accessible to everyone through courses that are simple to digest, and practical to implement.</b></p>
                                                <p>
                                                    I started teaching online three years ago, to help aspiring and established developers take  their coding skills to the next level.
                                                    I love to share my knowledge with you and give you the skills you need to stand out in an interview and get your dream job.
                                                     I release a new course every 6-8 weeks, so you never have to stop learning and fine-tuning your coding.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="about-counter" id="#counter">
                                            <div className="about-counter-card student-icon">
                                                <h3><span className="Count">3</span> Million</h3>
                                                <span>STUDENTS TAUGHT</span>
                                            </div>
                                            <div className="about-counter-card fans-icon">
                                                <h3><span className="Count">250</span>k</h3>
                                                <span>YOUTUBE FANS</span>
                                            </div>
                                            <div className="about-counter-card courses-icon">
                                                <h3><span className="Count">20</span></h3>
                                                <span>CODING COURSES</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="bg-shape left-shape">
                            <img src="assets/front-end/images/left-shape.svg" className="img-fluid" alt="" />
                        </div>
                    </section>
                <Footer />
            </React.Fragment>
        );
    }
}

export default about;
