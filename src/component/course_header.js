import React, { Component } from 'react';

class Course_header extends Component {
   

    render() {
        return (
            <React.Fragment>
                <a href="#img" className="course-card_header">
                    <img src={'https://kourses-codeigniter.qseksolutions.com/assets/back-end/upload_data/' + this.props.image} className="img-fluid" alt="" />
                </a>
                <div className="c-h-overlay">
                    <span className="video-total">{this.props.lesson} Lesson</span>
                    <span className="lecture-total">{this.props.lecture} Lecture</span>
                </div>
            </React.Fragment>
        );
    }
}

export default Course_header;
