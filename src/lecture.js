import React, { Component } from 'react';
import axios from 'axios';
import LessonCom from './component/single_lesson';
import Dawonload_data from './component/dawonload_data';


class All_course extends Component {
    constructor(props) {
        super(props);
        this.state = {
            course: [],
            isLoading: false,
        };
    }

    componentDidMount() {
        this.setState({ isLoading: true });
        axios.get('http://localhost:8080/lecture_single/' + this.props.match.params.course + '/' + this.props.match.params.lesson + '/' + this.props.match.params.lecture+'')
            .then((value) => {
                this.setState({ course: value.data.data });
                this.setState({ isLoading: false });
            });
    }


    render() {
        if (this.state.isLoading) {
            return <p>Loading ...</p>;
        }
        if (!this.state.course) return null;
        var detail = this.state.course[0];
        if (!detail) return null;
        return (
            <div className="main-wrapper">
                <header>
                    <nav className="dashboard-nav">
                        <div className="backTo-pages">
                            <a href={"/enroll/" + detail.course_slug} className="btn btn-icon btn-back">
                                <img alt="" src="https://kourses-codeigniter.qseksolutions.com/assets/front-end/images/left-arrow.svg" className="img-fluid" />
                            </a>
                            <a href="home" className="btn btn-icon btn-filter d-lg-none" id="open_filter">
                                <img alt="" src="https://kourses-codeigniter.qseksolutions.com/assets/front-end/images/settings.svg" className="img-fluid" />
                            </a>
                        </div>
                        <div className="faloder">
                            <i className="fas fa-circle-notch fa-spin" style={{"fontSize":"23px","color":"white"}}></i>
                        </div>
                        <div className="dropdown profile-menu">
                            <a className="profile-dropodwn" href="home" role="button" id="dropdownMenuLink" data-toggle="dropdown"
                                aria-haspopup="true" aria-expanded="false">
                                <i className="fas fa-user-alt"></i>
                            </a>
                            <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                <a className="dropdown-item logout" href="/home">Logout</a>
                            </div>
                        </div>
                    </nav>
                </header>
                <div className="container-wrapper">
                    <aside className="left-sidebar scrollbar-inner" id="left-scrollbar">
                        <div className="lecture-sidebar_card">
                            <div className="lecture-sidebar_card-body">
                                <h2>{detail.title}</h2>
                                <div className="progress">
                            <div className="progress-bar" role="progressbar" style={{"width":"12%"}} aria-valuenow="12" aria-valuemin="0"
                                        aria-valuemax="100"></div>
                                    <span className="progress-pers">12%</span>
                                </div>
                            </div>
                        </div>
                        <div className="lecture-s_listBox">
                            <LessonCom.single_lesson course_slug={detail.course_slug} data={detail.lesson} id={detail.single_lectured}/>
                        </div>
                    </aside>
                    <section className="enroll-curriculum-section ">
                        <div className="lecture-change_control">
                            <a href="abcd" className="btn btn-shape btn-shape-primary"><img alt="" src="https://kourses-codeigniter.qseksolutions.com/assets/front-end/images/left-arrow.svg" className="img-fluid long-arrow arrow-left" /> Previous</a>
            
                            <a href="abcd"  id="complete" className="btn btn-shape btn-shape_flip btn-shape-warning complete_lecture">Complete and Next <img alt="" src="https://kourses-codeigniter.qseksolutions.com/assets/front-end/images/left-arrow.svg" className="img-fluid long-arrow arrow-right" /></a>
                        </div>
                        <div className="enroll-curri_content scrollbar-inner lecture-curri_content">
                            <div className="lecture-title">
                                <h3>{detail.single_lecture.title}</h3>
                            </div>
                            {
                                detail.single_lecture.type && detail.single_lecture.type === "1" && (
                                    <div className="enroll-curri_content scrollbar-inner lecture-curri_content">
                                        {detail.single_lecture.lecture_data}
                                    </div>
                                )
                            }
                            {
                                detail.single_lecture.type && detail.single_lecture.type === "2" && (
                                    <video id="my-video" className="video-js" controls autoPlay preload="auto" data-setup=''>
                                        <source src={"https://drive.google.com/uc?export=download&id=" + detail.single_lecture.lecture_data} type='video/mp4'/>
                                    </video>
                                )
                            }
                            {
                                detail.single_lecture.type && detail.single_lecture.type === "3" && (
                                    <div className="enroll-curri_content scrollbar-inner lecture-curri_content">
                                        <div className="lecture-pdf">
                                            <iframe id="" title="pdf" src={"https://drive.google.com/file/d/" + detail.single_lecture.lecture_data+"/preview"}></iframe>
                                        </div>
                                    </div>
                                )
                            }
                            {
                                detail.download_data && (
                                    <Dawonload_data data={detail.download_data}/>
                                )
                            }
                        </div>
                    </section>
                 </div>
            </div>
        );
    }
}

export default All_course;
