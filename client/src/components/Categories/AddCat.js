import React, { Component } from 'react';
import axios from "axios";
import { Link, Redirect } from "react-router-dom"; 

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
        const userId = this.props.match.params.userId;
        axios.post(`/api/user/${userId}/category`, newCat).then(res => {
          console.log(res.data);
          this.setState({redirect:true})

        });
      };

    render() {
        if(this.state.redirect){
            return <Redirect to={'/view-categories/' + this.props.match.params.userId}/>
        }
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
                <button>
                    Submit
                </button>
                </form>
                
            </div>
        );
    }
}

export default AddCat;