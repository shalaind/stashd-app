import React, { Component } from 'react';

class AddCat extends Component {
    render() {
        return (
            <div>
                <h1>Add a new category</h1>
                <input type="text" placeholder="title" />
            </div>
        );
    }
}

export default AddCat;