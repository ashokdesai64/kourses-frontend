import React, { Component } from 'react';
import axios from 'axios';
import OwlCarousel from 'react-owl-carousel';
import Courseheader from '../component/course_header';
import Coursebody from '../component/course_body';
import Coursefooter from '../component/course_footer';
import Helper from './genral_helper';


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
        axios.post('http://localhost:8080/course_detail')
            .then((value) => {
                this.setState({ course: value.data.data });
                this.setState({ isLoading: false });
            });
    }


    render() {
        if (this.state.isLoading) {
            return <p>Loading ...</p>;
        }
        const options = {
            loop: false,
            margin: 15,
            nav: true,
            navText: ["<button className='btn btn-shape btn-shape-primary'><img src='https://kourses-codeigniter.qseksolutions.com/assets/front-end/images/left-arrow.svg' className='img-fluid owl-arrowImg'> </button>",
                "<button className='btn btn-shape btn-shape-primary btn-shape_flip'><img src='https://kourses-codeigniter.qseksolutions.com/assets/front-end/images/right-arrow.svg' className='img-fluid owl-arrowImg' /></button>"],
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 2,
                    margin: 0,
                },
                1000: {
                    items: 3
                }
            }
        };
        if (!this.state.course) return null;
        return (
            <section className="home-courses-sec">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-sm-12 col-md-10 col-lg-6">
                            <div className="section-title">
                                <h2>Featured Courses</h2>
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse dolores sapiente tenetur iure id iusto eaque.</p>
                            </div>
                        </div>
                    </div>
                    <div className="popular-carousel">
                        <OwlCarousel className="owl-theme" items={1} options={options}  responsive={options.responsive} >
                        {
                            this.state.course.map((obj, key) =>
                                <div className="item course-card mb-3" key={key}>
                                    <Courseheader action_līnk={Helper.get_user() ? '/enroll/' + obj.course_slug + '' : '/courses/' + obj.course_slug + ''} lecture={obj.L_c} lesson={obj.l_c} image={obj.image} />
                                    <Coursebody title={obj.title} subtitle={obj.subtitle} />
                                    <Coursefooter title={true} username={obj.auhtorname} image={obj.auhtorimage} />
                                </div>
                            )
                        }
                        </OwlCarousel>
                    </div>
                </div>
            </section>
        );
    }
}

export default All_course;
