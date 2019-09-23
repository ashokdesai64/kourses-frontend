import React, { Component } from 'react';
import axios from 'axios';
import Header from '../src/header';
import Footer from '../src/footer';
import Helper from "../src/services/genral_helper";
import LessonCom from "../src/component/single_lesson";

class single_course extends Component {
    constructor(props) {
        super(props);
        this.state = {
            course: [],
            isLoading: false,
            i: 0,
            c: 0,
        };
    }

    componentDidMount() {
        this.setState({ isLoading: true });
        axios.post('http://localhost:8080/course_single', {
            course: this.props.match.params.course,
            // userid: Helper.get_user('_id')
        })
            .then((value) => {
                this.setState({ course: value.data.data });
                this.setState({ isLoading: false });
            });
    }


    render() {
        if (this.state.isLoading) {
            return <p>Loading ...</p>;
        }
        var detail = this.state.course[0];
        if (!detail) return null;
        var i = 0;
        // var c = 0;
        return (
            <React.Fragment>
            <Header />
            <section className="singlepage-title" >
                <div className="container">
                    <div className="row align-items-end">
                        <div className="col-12 col-sm-12 col-md-12 col-lg-6">
                            <div className="card title-card">
                                <div className="card-body">
                                    <h2>{detail.title}</h2>
                                    <p>{detail.subtitle}</p>
                                    {Helper.get_user() ? (
                                            <a href="enroll" className="btn btn-shape btn-shape-primary"><i className="fas fa-shopping-cart"></i> Enroll in Course</a>
                                    ):(
                                        <a href="#sign-modal" data-toggle="modal" className="btn btn-shape btn-shape-primary"><i className="fas fa-shopping-cart"></i> Enroll in Course</a>
                                    )}
                                </div>
                            </div>
                        </div>

                        <div className="col-12 col-sm-12 col-md-12 col-lg-6">
                            <div className="images-card">
                                <img src="https://kourses-codeigniter.qseksolutions.com/assets/front-end/images/2.jpg" alt="Title background" className="img-fluid" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
                <section className="courses-heading-section">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-sm-12 col-md-12 col-lg-8 m-auto">
                                <div className="courses-heading" dangerouslySetInnerHTML={{
                                    __html: detail.sort_description}}>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="single-page_content">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-sm-12 col-md-12 col-lg-10 m-auto">
                                <div className="courses-discription" dangerouslySetInnerHTML={{
                                    __html: detail.description
                                }}>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="curriculum-section">
                    <div className="container">
                        <div className="section-title">
                            <h2>className Curriculum</h2>
                        </div>
                        <div className="row">
                            <div className="col-12 col-sm-12 col-md-12 col-lg-12">
                                <div className="accordion" id="accordionExample">
                                    <LessonCom.lesson image={detail.image} data={detail.lesson}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            <Footer/>
            </React.Fragment>
        );
    }
}
export default single_course;