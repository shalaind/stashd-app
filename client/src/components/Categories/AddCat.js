import React, { Component } from 'react';
import axios from "axios";
import { Redirect } from "react-router-dom"; 

class AddCat extends Component {
    state = {
            categories:[{
                    title: "",
                    stashItems: [{}]
                    }],
                redirect: false
            };
    

      handleChange = event => {
        const newState = { ...this.state.categories};
        newState[event.target.name] = event.target.value;
        this.setState({ user: newState });
      };
    
      handleSubmit = event => {
        event.preventDefault();
        const newCat = this.state.user;

        axios.post(`/api/user/${this.props.userId}/category`, newCat).then(res => {
          console.log("posted stash")
          this.props.getUsers()
          this.props.toggleAddCatForm();

        });
      };

    render() {
      
        return (
            <div>
                <form onSubmit={this.handleSubmit} style={{width: "200px", paddingTop: "20px"}}>
                <input 
                    type="text" 
                    class="input"
                    placeholder="Title"
                    name="title"
                    value={this.state.categories.title}
                    onChange={this.handleChange} 
                />
                <button
                class="button is-info">

                    Submit
                </button>
                </form>
                
            </div>
        );
    }
}

export default AddCat;