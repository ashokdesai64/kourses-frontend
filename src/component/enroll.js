import React, { Component } from 'react';
import LessonCom from "./single_lesson";

class enroll extends Component {
    render() {
        return (
            <React.Fragment>
                    <section className="enroll-curriculum-section">
                        <div className="enroll-curri_content scrollbar-inner">
                            <div className="section-title">
                                <h2>className Curriculum</h2>
                            </div>
                            <div className="accordion" id="accordionExample">
                                <LessonCom.lesson course_slug={this.props.course_slug} image={this.props.image} data={this.props.data} />
                            </div>
                        </div>
                    </section>
            </React.Fragment>
        );
    }
}
export default enroll;