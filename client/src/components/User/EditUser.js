
import React, { Component } from 'react';
import axios from 'axios'; 


class EditUser extends Component {
    state = {
        comment: this.props.review.comment
    }

    //comment = this.props.review.comment;

    toggleEditUser = () => {
        this.setState({ editReviewFormVisible: !this.state.editReviewFormVisible })
    }

    handleChange = (event) => {
        // const newState = { ...this.state.review }
        // newState[event.target.name] = event.target.value
         this.setState({ comment: event.target.value })
        //this.props.review.comment = event.target.value;
    }

    handleSubmit = (event) => {
        event.preventDefault()
        let user = this.props.user
        user.username = this.state.user
        user.isVisible = false;
        axios.patch(`/api/user/${user._id}`, user)
        .then((res) => {
            console.log('it worked')
        })
    }

    render() {
        return (
            <div>
        
                <form onSubmit= {this.handleSubmit}>
                    <textarea class="textarea" type="text" onChange= {this.handleChange} placeholder="Username" name="username" value={this.state.user.username}/><br/>
                    <button class="button is-warning is-small" onClick={this.toggleEditUser}>Submit</button>
                </form>
            </div>
        );
    }
}

export default EditUser;