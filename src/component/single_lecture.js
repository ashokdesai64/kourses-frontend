import React, { Component } from 'react';
import  { Link } from 'react-router-dom';
import Helper from "../services/genral_helper";

class lecture extends Component {
    constructor(props) {
        super(props);
        this.state = {
            no: 0,
        };
        
    }

    define(value){
        if(value === "incomplete"){
            this.setState({ no: this.state.no+1 });
        }
    }


    render() {
        let check = true;
        return (
            <React.Fragment>
                {
                    this.props.data.map((value, no) =>
                        <div key={no} className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-3">
                            {
                                Helper.get_user() ?(
                                    <Link to={"/course/" + this.props.course_slug + "/lesson/" + this.props.lesson_slug + "/lecture/" + value.lecture_slug + ""} className={'curriculum-video_card ' + (value.c === "complete" ? "curr-watch_completed" : this.state.no === 0 && check ? (check = false, "curr-next_lecture") : "")}> <div className="c-v_head"> {
                                        value.key === "1" ? (
                                            <i className="fas fa-file-alt"></i>
                                        ) : (
                                                <i className="fas fa-video"></i>
                                            )
                                    }
                                        {
                                            (Helper.get_user() &&
                                                <span className="lecture-status">
                                                    <span className="status-icon"></span>
                                                </span>
                                            )
                                        }
                                    </div>
                                        <img src={Helper.img_backend_url(this.props.image)} className="img-fluid" alt="video images" />
                                        <div className="lecture_name">
                                            <h6>{value.title}</h6>
                                        </div>
                                        {
                                            (!Helper.get_user() &&
                                                (
                                                    value.c === "incomplete" &&
                                                    this.define(value),
                                                    <span className="btn btn-shape btn-shape-primary lecture-start_btn btn-shape-sm">Start</span>
                                                )
                                            )
                                        }
                                    </Link>
                                ):(
                                        <a href='#sign-modal' data-toggle={!Helper.get_user() ? "modal" : 'none'} className='curriculum-video_card'> <div className="c-v_head"> {
                                            value.key === "1" ? (
                                                <i className="fas fa-file-alt"></i>
                                            ) : (
                                                    <i className="fas fa-video"></i>
                                                )
                                        }
                                            {
                                                (Helper.get_user() &&
                                                    <span className="lecture-status">
                                                        <span className="status-icon"></span>
                                                    </span>
                                                )
                                            }
                                        </div>
                                            <img src={Helper.img_backend_url(this.props.image)} className="img-fluid" alt="video images" />
                                            <div className="lecture_name">
                                                <h6>{value.title}</h6>
                                            </div>
                                            {
                                                (!Helper.get_user() &&
                                                    (
                                                        value.c === "incomplete" &&
                                                        this.define(value),
                                                        <span className="btn btn-shape btn-shape-primary lecture-start_btn btn-shape-sm">Start</span>
                                                    )
                                                )
                                            }
                                        </a>

                                )
                            }
                        </div>
                    )
                }
            </React.Fragment>
        );
    }
}

class single_lecture extends Component {

    render() {
        return (
            <React.Fragment>
                    {
                    this.props.data.map((val, no) =>
                            <li key={no}>
                            <Link  to={"/course/" + this.props.course_slug + "/lesson/" + this.props.lesson_slug + "/lecture/" + val.lecture_slug + ""} className={"lecture-sidebar-v_card" + (JSON.stringify(this.props.id) === JSON.stringify(val._id) ? " lecture-s_next" : val.c === "complete" ? " lecture-s_completed" : "")}>
                                    <span className="lecture-sidebar-status">
                                        <span className="status-sidebar-icon"></span>
                                    </span>
                                    <div className="lecture-s_name">
                                        <i className={"fas " + (val.type === "1" ? "fa-file-alt" : val.type === "2" ? "fa-video" : "fa-file-pdf")}></i>
                                        <h6>{val.title}</h6>
                                    </div>
                                    <span className="lecture-s_time">{val.duration}</span>
                            </Link>
                            </li>
                        )
                    }
            </React.Fragment>
        );
    }
}



export default { lecture, single_lecture};
