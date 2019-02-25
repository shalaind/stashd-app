import React, { Component } from 'react';
import axios from "axios";
import { Link } from "react-router-dom"; 

class AddCat extends Component {
    state = {
            categories: {
                title:''
            }
        }; 

    componentDidMount = () => {
            this.getUsers();
    }

    getUsers = () => {
        axios.get(`/api/user`).then(res =>
            console.log(res.data)
            // this.setState({ user: res.data })
        )}
    
      handleChange = event => {
        const newState = { ...this.state.categories };
        newState[event.target.name] = event.target.value;
        this.setState({ category: newState });
      };
    
      handleSubmit = event => {
        event.preventDefault();
        const newCat = this.state.user;
        const userId = this.props.match.params.userId;
        axios.post(`/api/user/${userId}/category`, newCat).then(res => {
          console.log(res.data);
        });
      };

    render() {
        return (
            <div>
                <h1>Add a new category</h1>
                <form onSubmit={this.handleSubmit}>

                <input 
                type="text" 
                placeholder="title"
                name="title"
            value={this.state.categories.title}
            onChange={this.handleChange} 
            />
            <button>Submit</button>
                </form>
                
            </div>
        );
    }
}

export default AddCat;