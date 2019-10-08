import React, { Component } from 'react';
import Helper from "../services/genral_helper";

class Course_footer extends Component {

    render() {
        return (
            <div className="course-card-footer">
                <div className="lecturer-avtar">
                    <img src={Helper.img_backend_auth_profile(this.props.image)} alt="lecturer-img" className="img-thumbnail" />
                    <h5>{this.props.username}</h5>
                </div>
                {!Helper.get_user() &&
                    <div>
                        <a href="#sign-modal" data-toggle="modal" className="btn btn-shape btn-shape-sm btn-shape-primary" >Sign in</a>
                    {!this.props.title &&
                        <div className="course-card_btn">
                            <span className=""><i className="fas fa-info-circle"></i>Sign In to access this Course</span>
                        </div>
                    }
                    </div>
                }
            </div>
        );
    }
}

export default Course_footer;
