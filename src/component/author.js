import React, { Component } from 'react';
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
            return <p>Loading ...</p>;
        }
        return (
            <div className="dropdown filter-dropdown">
                <label className="dropdown-label">Author:</label>
                <a className="dropdown-toggle btn-dropdown" href="#id" role="button" id="filter-dropdown1" data-toggle="dropdown"
                    aria-haspopup="true" aria-expanded="false">All</a>

                <div className="dropdown-menu" aria-labelledby="filter-dropdown1">
                    <a className="dropdown-item" href="/all_course">All</a>
                    {
                        this.state.author.map((obj, key) =>
                            <a key={key} className="dropdown-item" href={"/all_course/author/" + obj.authorid}>{obj.username}({obj.count})</a>
                        )
                    }
                </div>  
            </div>
        );
    }
}

export default All_course;
