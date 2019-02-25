import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Intro extends Component {
    render() {
        return (
            <div>
                <h1>Stash'd Logo</h1>
                <Link to="/sign-up">Sign Up</Link>
                <h1>Sign up with facebook</h1>
            </div>
        );
    }
}

export default Intro;