import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../src/header';
import Footer from '../src/footer';

class learn_path extends Component {


    render() {
        return (
            <React.Fragment>
            <Header/>
                <section className="content-page_sec">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-sm-12 col-md-12 col-lg-10 offset-lg-1">
                                <div className="simple-content_box ">
                                    <div className="section-title">
                                        <h2>Learning Path</h2>
                                    </div>

                                    <ul className="list-unstyled courses-discr_list text-left row">
                                        <li className="">Don't know where to start or what course to take next? Let us make it really simple for you.</li>
                                        <li className="">Depending on what your goals and interests are, you may want to consider becoming a <b>front-end, back-end</b> or <b>full-stack</b>
                                            developer.</li>
                                        <li className="">Every web or mobile app has 2 parts: a front-end and a back-end. The front-end is what the user sees and interacts
                                with. It’s the app on your phone or the website you visit. The back-end is where the data is processed and stored.</li>
                                        <li className=""><b>Front-end developers</b> are responsible for building beautiful and interactive user interfaces.</li>
                                        <li className=""><b>Back-end developers</b> are in charge of anything that powers the front-end, including working with databases, building web
                                services/APIs, integration with other apps (eg Facebook, Twitter, etc), implementing business rules and workflows, etc.</li>
                                        <li className=""><b>Full-stack developers</b> know both the front-end and back-end development. And for that very reason, they earn more money.</li>
                                    </ul>
                                    <div className="btn-group mt-4 learning-btnGroup">
                                    <Link to="/all_course" className="btn btn-shape btn-white">Front-end Development Path</Link>
                                    <Link to="/all_course" className="btn btn-shape btn-shape_flip btn-white">Back-end Development Path</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-shape left-shape">
                        <img alt="" src="https://kourses-codeigniter.qseksolutions.com/assets/front-end/images/left-shape.svg" className="img-fluid" />
                    </div>]
                </section>
            <Footer/>
                </React.Fragment>
        );
    }
}

export default learn_path;
