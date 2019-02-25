import React, { Component } from 'react';
import { Link } from 'react-router-dom'; 

class Welcome extends Component {
    render() {
        return (
            <div>
                <h1>Welcome to Stash'd</h1>
                <h1>This is where you can stash your entertainment and come back to enjoy later</h1>
                <h1>Lets get started</h1>
                <Link to="/select-categories"><button>Click Here</button> </Link>
            </div>
        );
    }
}

export default Welcome;