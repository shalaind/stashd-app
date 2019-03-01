import React, { Component } from 'react';
import axios from 'axios'

class EditUser extends Component {
    state = {
        user: {
            username: '',
            email: '',
        }
    }

    handleChange = (event) => {
        const newState = { ...this.state.user }
        newState[event.target.name] = event.target.value
        this.setState({ user: newState })
    }

    editUser = (event) => {
        event.preventDefault()
        const userEdit = this.state.user
        const userId = this.props.userId
        axios.patch(`/api/user/${userId}`, userEdit)
        .then((res) => {
          this.props.getUsers()
          console.log("edited user")
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.editUser}>
                    <div>
                        <input type="text"
                        placeholder="username"
                        name="username"
                        value={this.state.user.username}
                        onChange={this.handleChange}
                        />
                    </div>
                    <div>
                        <input type="text"
                        placeholder="email"
                        value={this.state.user.email}
                        onChange={this.handleChange}
                        name="email"/>
                    </div>
                    <button>Submit</button>
                </form>
            </div>
        );
    }
}

export default EditUser