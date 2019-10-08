import React, { Component } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
import Helper from "../src/services/genral_helper";
import Categoryall from '../src/component/category';
import Authorall from '../src/component/author';
import Header from '../src/header';
import Footer from '../src/footer';
import Courseheader from '../src/component/course_header';
import Coursebody from '../src/component/course_body';
import Coursefooter from '../src/component/course_footer';


class All_course extends Component {
    _isMounted = false;
    constructor(props) {
        super(props);
        this.state = {
            course: [],
            isLoading: false,
            filter : props.match.params,
        };
    }

    componentDidMount() {
        this._isMounted = true;
        let link = "";
        let post_data = "";
        if (Helper.get_user()){
            link = Helper.api_call('complete_course_detail');
            post_data = { id: Helper.get_user('_id')};
        }else{
            link = Helper.api_call('course_detail');
            post_data = "";
        }
        axios.post(link, { post_data})
        .then((value) => {
            let data = value.data.data;
            if (this.state.filter.filter){
                if (this.state.filter.filter === "category"){
                        if (this._isMounted) {
                            this.setState({
                                course: data.filter(m => m.categoryid === this.state.filter.id) 
                            });
                        }
                    }else{
                        if (this._isMounted) {
                            this.setState({
                                course: data.filter(m => m.authorid === this.state.filter.id)
                            });
                        }
                    }
                }else{
                    this.setState({ course: data });
                }
            this._isMounted = false;
            });
    }


    componentWillUnmount() {
        this._isMounted = false;
    }
    
    render() {
        return (
            <React.Fragment key="1" >
                <Header/>
                    <section className="courses-sec">
                        <div className="container">
                            <div className="course-filter_row">
                                <div className="courses-search">
                                    <div className="search-box">
                                        <input type="text" placeholder="Search" name="search" id="search_bar" className="search-control" />
                                        <span className="search-icon">
                                        <img src={Helper.img_url("search.svg")} alt="" className="img-fluid" />
                                        </span>
                                    </div>
                                </div>
                                <div className="courses-filter">
                                    <Categoryall/>
                                    <Authorall/>
                                </div>
                            </div>
                            <div className="row" id="nocoursetitle">
                            </div>
                            <div className="row" id="course_full">
                                {
                                 this._isMounted ?(
                                    this.state.course.map((obj,key) =>
                                        <div key={key+'1'} className="col-12 col-sm-12 col-md-6 col-lg-4" id="search-filter">
                                            <Link to={Helper.get_user() ? '/enroll/' + obj.course_slug + '' : '/courses/' + obj.course_slug + ''} className="course-card enroll-course_card">
                                                <Courseheader action_līnk={Helper.get_user() ? '/enroll/' + obj.course_slug + '' : '/courses/' + obj.course_slug + ''} lecture={obj.L_c} lesson={obj.l_c} image={obj.image} />
                                                {Helper.get_user() ? (
                                                    <div className="course-card-body">
                                                    <h2>{obj.title}</h2>
                                                        <div className="progress">
                                                        <div className="progress-bar" role="progressbar" style={{
                                                            'width': '' + Math.round(obj.complete_courses * 100 / obj.L_c) +'%'}} aria-valuenow="12" aria-valuemin="0" aria-valuemax="100"></div>

                                                        <span className="progress-pers">{Math.round(obj.complete_courses * 100 / obj.L_c)}%</span>
                                                        </div>
                                                    </div>
                                                ) : (
                                                    <Coursebody title={obj.title} subtitle={obj.subtitle} />
                                                )}
                                                <Coursefooter title={true} username={obj.auhtorname} image={obj.auhtorimage} />
                                            </Link>
                                        </div>
                                    )
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
                    </section>
                <Footer/>
            </React.Fragment>
            );
        }
    }
        
    export default All_course;
