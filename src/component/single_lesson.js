import React, { Component } from 'react';
import  LectureCom  from "../component/single_lecture";

class lesson extends Component {

    render() {
        return (
            <React.Fragment>
                {
                    this.props.data.map((obj, key) => 
                        <div key={key} className="curriculum-card">
                            <h5 className="mb-0 curriculum-c_head" data-toggle="collapse" data-target={'#curriculum_' + key + ''} aria-expanded={key === 0 ? 'true' : 'false'} aria-controls={'#curriculum_' + key + ''}>{obj.name}</h5>
                            <div id={'curriculum_' + key + ''} className={'collapse curriculum-c_body' + (key === 0 ? " show" : " none")} data-parent="#accordionExample">
                                <div className="row">
                                    <LectureCom.lecture  course_slug={this.props.course_slug} lesson_slug={obj.lesson_slug} image={this.props.image} data={obj.lecture} />
                                </div>
                            </div>
                        </div>
                    )
                }
            </React.Fragment>
        );
    }
}

class single_lesson extends Component {
    render() {
        return (
            <React.Fragment>
                {
                    this.props.data.map((obj, key) =>
                    <React.Fragment>
                            <div key={obj.name} className="lecture-s_head">
                                <label>{obj.name}</label>
                            </div>
                            <ul className="list-unstyled lecture-s_list">
                                <LectureCom.single_lecture course_slug={this.props.course_slug} lesson_slug={obj.lesson_slug} data={obj.lecture} id={this.props.id}/>
                            </ul>
                    </React.Fragment>
                    )
                }
            </React.Fragment>
        );
    }
}
export default { lesson, single_lesson};