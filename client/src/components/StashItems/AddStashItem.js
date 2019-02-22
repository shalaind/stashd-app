import React, { Component } from 'react';

class AddStashItem extends Component {
    render() {
        return (
            <div>
                <h1>add a new item</h1>
                <input type="text" placeholder="title" />
                <input type="text" placeholder="link" />

            </div>
        );
    }
}

export default AddStashItem;