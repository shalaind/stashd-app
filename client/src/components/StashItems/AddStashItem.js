import React, { Component } from 'react';
import axios from 'axios'; 

class AddStashItem extends Component {
    state = {
        user: {
          username: "",
          email: "",
          password: "",
          profilePic: ""
        },
        redirect: false
      };
    
      handleChange = event => {
        const newState = { ...this.state.user };
        newState[event.target.name] = event.target.value;
        this.setState({ user: newState });
      };
    
      handleSubmit = event => {
        event.preventDefault();
        const userUpload = this.state.user;
        axios.post("/api/user", userUpload).then(res => {
          console.log(res.data);
        });
      };

    render() {
        return (
            <div>
                <h1>Add a new item</h1>
                <form onSubmit={this.handleSubmit}>
                    <input 
                    type="text" 
                    placeholder="title" 
                    name= "title"
                    value={this.state.categories.stashItems.title}
                    onChange={this.handleChange}
                    />
                    <input 
                    type="text" 
                    placeholder="link" 
                    name= "title"
                    value={this.state.categories.stashItems.title}
                    onChange={this.handleChange}
                    />
                    <button>Add</button>
                </form>
                
            </div>
        );
    }
}

export default AddStashItem;