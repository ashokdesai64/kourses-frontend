import React, { Component } from 'react';

class Course_body extends Component {


    render() {
        return (
            <div className="course-card-body">
                <h2>{this.props.title}</h2>
                <p>{this.props.subtitle}</p>
            </div>
        );
    }
}

export default Course_body;
