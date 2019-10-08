import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import genral_helper from '../services/genral_helper';

class Course_header extends Component {
   

    render() {
        return (
            <React.Fragment>
                <Link to={this.props.action_līnk} className="course-card_header">
                    <img src={genral_helper.img_backend_url(this.props.image)} className="img-fluid" alt="" />
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
