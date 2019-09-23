import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';



class All_course extends Component {
    constructor(props) {
        super(props);
        this.state = {
            category: [],
            isLoading: false,
        };
    }

     componentDidMount() {
        this.setState({ isLoading: true });
         axios.post('http://localhost:8080/get_category')
            .then((value) => {
                this.setState({ category: value.data.data });
                this.setState({ isLoading: false });
            });
    }


    render() {
        if (this.state.isLoading) {
            return false;
        }
        return (
            <div className="dropdown filter-dropdown">
                <label className="dropdown-label">Category:</label>
                <a className="dropdown-toggle btn-dropdown" href="#id" role="button" id="filter-dropdown2" data-toggle="dropdown"
                    aria-haspopup="true" aria-expanded="false">All</a>

                <div className="dropdown-menu" aria-labelledby="filter-dropdown2">
                    <Link className="dropdown-item" to="/all_course">All</Link>
                    {
                        this.state.category.map((obj, key) =>
                            <Link key={key} className="dropdown-item" to={`/all_course/category/${obj.categoryid}`}>{obj.name}({obj.count})</Link>
                        )
                    }
                </div>
            </div>
        );
    }
}

export default All_course;
