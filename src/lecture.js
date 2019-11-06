import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import LessonCom from './component/single_lesson';
import Helper from './services/genral_helper';
import $ from 'jquery';


class Lecture extends Component {
    constructor(props) {
        super(props);
        this.state = {
            course: [],
            isLoading: false,
        };
        this.handleClick = this.handleClick.bind(this);
        this.logout = this.logout.bind(this);
    }

    logout(e){
        e.preventDefault();
        const { history } = this.props;
        localStorage.removeItem("userdata");
        history.push('/home');
    }

    componentWillMount() {
        if (Helper.get_user()) {
            this.setState({ isLoading: true });
            axios.post(Helper.api_call('lecture_single'),{
                course : this.props.match.params.course ,
                lesson : this.props.match.params.lesson ,
                lecture : this.props.match.params.lecture,
                userid:  Helper.get_user('_id') 
            })
                .then((value) => {
                    if (value.data.status === "success") {
                        this.setState({ course: value.data.data });
                        this.setState({ isLoading: false });
                    } else {
                        $('.alert-danger').text(value.data.message).show();
                        $(".alert-danger").fadeTo(2000, 500).slideUp(500, function () {
                            $(".alert-danger").slideUp(500);
                        });
                    }
                })
                .catch(err => {
                    $('.alert-danger').text(err).show();
                    $(".alert-danger").fadeTo(2000, 500).slideUp(500, function () {
                        $(".alert-danger").slideUp(500);
                    });
                });
        }
    }

    handleClick(e, data) {
        e.preventDefault();
        const { history } = this.props;
        axios.post(Helper.api_call('complete_courses'), {
                'course': data.courseid, 
                'lesson': data.lessonid, 
                'lecture': data.lectureid, 
                'userid': data.userid,
        })
        .then((value) => {
            if (value.data.status === "success") {
                history.push(data.link)
                Helper.notify(value.data.status, value.data.message);
            } else {
                Helper.notify(value.data.status, value.data.message);
            }
        })
        .catch(err => {
            Helper.notify('error', err);
        });
    }

    render() {
        const { history } = this.props;
        if (!Helper.get_user()) {
            history.push('/home');
        }
        var detail = "";
        var display_blur = false;
        if (!this.state.course[0]){
            if (localStorage.getItem('single_store_data')){
                detail = JSON.parse(localStorage.getItem('single_store_data'));
                display_blur = true;
            }
        }else{
            display_blur = false;
            detail = this.state.course[0];
            localStorage.setItem('single_store_data', JSON.stringify(this.state.course[0]));
            $(document).ready(function () {
                $('.faloder').html('');
                var divLoc = $('.lecture-s_next').offset();
                if (divLoc) {
                    $('.left-sidebar').animate({ scrollTop: divLoc.top - 218 }, "slow");
                }
            })
        }
        if (detail){
            var data = { 
                courseid: detail.single_lecture.courseid,
                lessonid: detail.single_lecture.lessonid,
                lectureid: detail.single_lecture._id,
                link: !detail.next ? detail.pre : detail.next,  
                userid: Helper.get_user('_id'),
            };
        }
        return (
            < div className = { "main-wrappe" + (display_blur ? " display_blur" : "") }>
                <header>
                    <nav className="dashboard-nav">
                        <div className="backTo-pages">
                            <Link to={"/enroll/" + this.props.match.params.course} className="btn btn-icon btn-back">
                                <img alt="" src={Helper.img_url("left-arrow.svg")} className="img-fluid" />
                            </Link>
                            <Link to="/home" className="btn btn-icon btn-filter d-lg-none" id="open_filter">
                                <img alt="" src={Helper.img_url("settings.svg")} className="img-fluid" />
                            </Link>
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
                                <span className="dropdown-item logout" onClick={this.logout}>Logout</span>
                            </div>
                        </div>
                    </nav>
                </header>
                <div className="container-wrapper">
                    {
                        detail  ? (
                            <React.Fragment>
                            <aside className="left-sidebar scrollbar-inner" id="left-scrollbar">
                                <div className="lecture-sidebar_card">
                                    <div className="lecture-sidebar_card-body">
                                        <h2>{detail.title}</h2>
                                        <div className="progress">
                                            <div className="progress-bar" role="progressbar" style={{ "width": "" + detail.count+"%" }} aria-valuenow={detail.count} aria-valuemin="0"
                                                aria-valuemax="100"></div>
                                            <span className="progress-pers">{detail.count}%</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="lecture-s_listBox">
                                    <LessonCom.single_lesson course_slug={detail.course_slug} course_id={detail._id} data={detail.lesson} id={detail.single_lecture._id}/>
                                </div>
                            </aside>
                            <section className="enroll-curriculum-section ">
                                <div className="lecture-change_control">
                                    {
                                        !detail.next ?(
                                                <Link to={detail.pre} onClick={((e) => this.handleClick(e, data))} data-id={Helper.get_user('_id')} style={{ width: '100%'}} className="btn btn-shape btn-shape-primary"><img alt="" src={Helper.img_url('images/left-arrow.svg')} className="img-fluid long-arrow arrow-left" /> Complete And Previous</Link>
                                        ):(
                                                <Link to = {detail.pre} style={{ width: !detail.next && '100%', display: !detail.pre && 'none' }} className="btn btn-shape btn-shape-primary "><img alt="" src={Helper.img_url('images/left-arrow.svg')} className="img-fluid long-arrow arrow-left" /> Previous</Link>
                                        )
                                    }
                                    <Link to={detail.next} onClick={((e) => this.handleClick(e, data))} style={{ width: !detail.pre && '100%', display: !detail.next && 'none' }}  id="complete" data-id={Helper.get_user('_id')} className="complete_course_click btn btn-shape btn-shape_flip btn-shape-warning complete_lecture">Complete and Next <img alt="" src={Helper.img_url('images/left-arrow.svg')} className="img-fluid long-arrow arrow-right" /></Link>
                                </div>
                                
                                <input type="hidden" value={detail.single_lecture.courseid} id="course_id"></input>
                                <input type="hidden" value={detail.single_lecture.lessonid} id="lesson_id"></input>
                                <input type="hidden" value={detail.single_lecture._id} id="lecture_id"></input>
                                <div className="enroll-curri_content scrollbar-inner lecture-curri_content">
                                    <div className="lecture-title">
                                        <h3>{detail.single_lecture.title}</h3>
                                    </div>
                                    {
                                        detail.single_lecture.type && detail.single_lecture.type === "1" && (
                                            <div className="enroll-curri_content scrollbar-inner lecture-curri_content" dangerouslySetInnerHTML={{
                                                __html: detail.single_lecture.lecture_data
                                            }}>
                                            </div>
                                        )
                                    }
                                    {
                                        detail.single_lecture.type && detail.single_lecture.type === "2" && (
                                            <video id="my-player" controlsList="nodownload" className="video-js" controls autoPlay preload="auto" data-setup='{}' onEnded={((e) => this.handleClick(e, data))} >
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
                                            detail.download_data.map((value, no) =>
                                                value.type === "2" ? (
                                                    <div className="zip-download">
                                                        <label className="zip-download_label">Download Zip</label>
                                                        <a rel="noopener noreferrer" target="_blank" href={"https://drive.google.com/uc?export=download&id=" + value['data_link'].split("=")[1]} className="btn btn-link zip-download_link"><i className="far fa-file-archive"></i>{value.data_title}.zip </a>
                                                    </div>
                                                ) : (
                                                    <div className="enroll-curri_content scrollbar-inner lecture-curri_content">
                                                        {
                                                            value.type !== "3" && (
                                                                <div className="lecture-pdf">
                                                                        <iframe id="" title="dawonload" src={"https://drive.google.com/file/d/" + value['data_link'].split("=")[1]+"/preview"}></iframe>
                                                                </div>
                                                            )
                                                        }
                                                        <div className="zip-download">
                                                            <label className="zip-download_label">Download PDF</label>
                                                                <a rel="noopener noreferrer" target="_blank" href={"https://drive.google.com/uc?export=download&id=" + value['data_link'].split("=")[1]} className="btn btn-link zip-download_link"><i className="far fa-file-archive"></i>{value.data_title}.pdf</a>
                                                        </div>
                                                    </div>
                                                )
                                            )
                                        )
                                    }
                                </div>
                            </section>
                            </React.Fragment>
                        ):(
                                <div className="loader-container">
                                    <div className="progress-loader float shadow-loder">
                                        <div className="progress__item"></div>
                                    </div>
                                </div>
                        )
                    }
                 </div>
            </div>
        );
    }
}

export default Lecture;
