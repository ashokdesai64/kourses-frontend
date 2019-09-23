import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Course_header extends Component {
   

    render() {
        return (
            <React.Fragment>
                <Link to={this.props.action_līnk} className="course-card_header">
                    <img src={'https://kourses-codeigniter.qseksolutions.com/assets/back-end/upload_data/' + this.props.image} className="img-fluid" alt="" />
                </Link>
                <div className="c-h-overlay">
                    <span className="video-total">{this.props.lesson} Lesson</span>
                    <span className="lecture-total">{this.props.lecture} Lecture</span>
                </div>
            </React.Fragment>
        );
    }
}

export default Course_header;
