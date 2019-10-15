import React, { Component } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import Header from './header';
import Footer from './footer';
import Helper from "./services/genral_helper";
import Enroll from "./component/enroll";
import Instructor from "./component/instructor";

class enroll extends Component {
    constructor(props) {
        super(props);
        this.state = {
            course: [],
            isLoading: false,
        };
    }
    
    componentDidMount() {
        if (Helper.get_user()) {
            this.setState({ isLoading: true });
            axios.post(Helper.api_call('course_single'),{
                course: this.props.match.params.course,
                userid: Helper.get_user('_id') 
            })
            .then((value) => {
                if (value.data.status === "success") {
                    this.setState({ course: value.data.data });
                    this.setState({ isLoading: false });
                } else {
                    Helper.notify(value.data.status, value.data.message);
                }
            })
            .catch (err => {
                Helper.notify('error', err);
            });
        }
    }
    
    
    render() {
        const { history } = this.props;
        if (this.state.course[0]) {
            var detail = this.state.course[0];
        }
        if (!Helper.get_user() && this.state.course[0]){
            history.push('/courses/' + this.props.match.params.course);
        }else{
            history.push('/home');
        }
        return (
            <React.Fragment>
                <Header {...this.props}/>
                <div className="container-wrapper">
                {
                    detail && !this.state.isLoading ? (
                        <React.Fragment>
                                <aside className="left-sidebar scrollbar-inner">
                                    <div className="lecture-sidebar_card mt-4">
                                        <div className="l-side_head">
                                            <img src={Helper.img_backend_url(detail.image)} alt="" className="img-fluid" />
                                        </div>
                                        <div className="lecture-sidebar_card-body">
                                                <h2>{detail.title}</h2>
                                            <div className="progress">
                                                <div className="progress-bar" role="progressbar" style={{ "width": "" + detail.count + "%" }} aria-valuenow={detail.count} aria-valuemin="0"
                                                    aria-valuemax="100"></div>
                                                <span className="progress-pers">{detail.count}%</span>
                                            </div>
                                        </div>
                                    </div>
                                    <ul className="list-unstyled l-sidebar_menu">
                                        <li className="menu-item">
                                            <Link to={"/enroll/" + this.props.match.params.course} className={"menu-link" + (this.props.link_action === "enroll" ? " active" : "")}><i className="far fa-list-alt"></i> className Curriculum</Link>
                                        </li>
                                        <li className="menu-item">
                                            <Link to={"/instructor/" + this.props.match.params.course} className={"menu-link" + (this.props.link_action !== "enroll" ? " active" : "")}><i className="far fa-user"></i> Your Instructor</Link>
                                        </li>
                                    </ul>
                                </aside>
                            {
                                this.props.link_action === "instructor" ?(
                                    <Instructor author={detail.author}/>
                                    ):(
                                        <Enroll course_slug={detail.course_slug} image={detail.image} data={detail.lesson}/>
                                    )
                            }
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
                <Footer {...this.props}/>
            </React.Fragment>
        );
    }
}
export default enroll;