import React, { Component } from 'react';
import { Link } from 'react-router-dom'; 

class SelectCat extends Component {
    render() {
        return (
            <div>
                <h1>Select a Category</h1>
                <h1>Books </h1>
                <h1>Podcasts</h1>
                <h1>Audiobooks</h1>
                <Link to="/add-category"><button>Create One</button> </Link>

            </div>
        );
    }
}

export default SelectCat;