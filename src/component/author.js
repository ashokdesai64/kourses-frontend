import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class All_course extends Component {
    constructor(props) {
        super(props);
        this.state = {
            author: [],
            isLoading: false,
        };
    }

    componentDidMount() {
        this.setState({ isLoading: true });
        axios.post('http://localhost:8080/get_author')
            .then((value) => {
                this.setState({ author: value.data.data });
                this.setState({ isLoading: false });
            });
    }
   


    render() {
        if (this.state.isLoading) {
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
