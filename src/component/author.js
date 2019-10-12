import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Helper from '../services/genral_helper';

class All_course extends Component {
    _isMounted = false;
    constructor(props) {
        super(props);
        this.state = {
            author: [],
        };
        
    }

    componentDidMount() {
        this._isMounted = true;
        this.setState({ isLoading: true });
        axios.post(Helper.api_call('get_author'))
            .then((value) => {
                if (this._isMounted) {
                    if (value.data.status === "success") {
                        this.setState({ author: value.data.data });
                    } else {
                        Helper.notify(value.data.status, value.data.message);
                    }
                }
            })
            .catch (err => {
                Helper.notify('error', err);
            });
    }
   
    componentWillUnmount() {
        this._isMounted = false;
    }


    render() {
        if (!this._isMounted) {
            return false;
        }
        return (
            <div className="dropdown filter-dropdown">
                <label className="dropdown-label">Author:</label>
                <a className="dropdown-toggle btn-dropdown" href="#id" role="button" id="filter-dropdown1" data-toggle="dropdown"
                    aria-haspopup="true" aria-expanded="false">All</a>

                <div className="dropdown-menu" aria-labelledby="filter-dropdown1">
                    <Link className="dropdown-item" to="/all_course">All</Link>
                    {
                        this.state.author.map((obj, key) =>
                            <Link key={key} className="dropdown-item" to={`/all_course/author/${obj.authorid}`}>{obj.username}({obj.count})</Link>
                        )
                    }
                </div>  
            </div>
        );
    }
}

export default All_course;
