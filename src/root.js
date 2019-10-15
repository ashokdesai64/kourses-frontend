import React, { Component } from 'react';
import Home from '../src/home';

class Root extends Component {
    render() {
        return (
            <div className="App">
                <Home {...this.props}/>
            </div>
        );
    }
}

export default Root;
