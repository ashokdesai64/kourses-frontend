import React, { Component } from 'react';

class instructor extends Component {
    render() {
        return (
            <React.Fragment>
                <section className="enroll-curriculum-section">
                    <div className="enroll-curri_content instructor-curri_content">
                        <div className="section-title">
                            <h2>Instructor</h2>
                        </div>
                        <div className="instructor-card">
                            <div className="instructor-card_avatar">
                                <img src={"https://kourses-codeigniter.qseksolutions.com/assets/back-end/user_profile/"+this.props.author[0].image} alt="Instructor photos" className="img-fluid img-thumbnail" />
                            </div>
                            <div className="instructor-detaile" dangerouslySetInnerHTML={{
                                __html: this.props.author[0].description
                            }}>
                            </div>
                        </div>
                    </div>
                </section>
            </React.Fragment>
        );
    }
}


export default  instructor;