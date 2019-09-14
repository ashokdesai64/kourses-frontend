import React, { Component } from 'react';
import axios from 'axios';
import Header from '../src/header';
import Footer from '../src/footer';
// import Helper from "../src/services/genral_helper";
import LessonCom from "../src/component/single_lesson";

class enroll extends Component {
    constructor(props) {
        super(props);
        this.state = {
            course: [],
            isLoading: false,
        };
    }

    componentDidMount() {
        this.setState({ isLoading: true });
        axios.get('http://localhost:8080/course_single/' + this.props.match.params.course + '')
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
        return (
            <React.Fragment>
                <Header />
                <div class="container-wrapper">
                    <aside class="left-sidebar scrollbar-inner">
                        <div class="lecture-sidebar_card mt-4">
                            <div class="l-side_head">
                                <img src={'https://kourses-codeigniter.qseksolutions.com/assets/back-end/upload_data/'+detail.image} alt="" class="img-fluid" />
                            </div>
                            <div class="lecture-sidebar_card-body">
                                    <h2>{detail.title}</h2>
                                <div class="progress">
                                    <div class="progress-bar" role="progressbar" style={{"width": "22%"}} aria-valuenow="22" aria-valuemin="0"
                                        aria-valuemax="100"></div>
                                    <span class="progress-pers">22%</span>
                                </div>
                            </div>
                        </div>
                        <ul class="list-unstyled l-sidebar_menu">
                            <li class="menu-item">
                                <a href="/home" class="menu-link active"><i class="far fa-list-alt"></i> Class Curriculum</a>
                            </li>
                            <li class="menu-item">
                                    <a href="home" class="menu-link"><i class="far fa-user"></i> Your Instructor</a>
                            </li>
                        </ul>
                    </aside>
                    <section className="enroll-curriculum-section">
                        <div className="enroll-curri_content scrollbar-inner">
                            <div className="section-title">
                                <h2>className Curriculum</h2>
                            </div>
                            <div className="accordion" id="accordionExample">
                                <LessonCom.lesson course_slug={detail.course_slug} image={detail.image} data={detail.lesson} />
                            </div>
                        </div>
                    </section>
                </div>
                <Footer />
            </React.Fragment>
        );
    }
}
export default enroll;