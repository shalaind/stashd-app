import React, { Component } from "react";
import axios from "axios";
import { Link, Redirect } from "react-router-dom"; 

class Signup extends Component {
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
    window.location = "/welcome"

      console.log(res.data);
    });
  };


  render() {
    return (
      <div>
        <h1>Sign up</h1>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="Username"
            name="username"
            value={this.state.user.username}
            onChange={this.handleChange}
          /><br/>
          <input
            type="text"
            placeholder="Email"
            name="email"
            value={this.state.user.email}
            onChange={this.handleChange}
          /><br/>
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={this.state.user.password}
            onChange={this.handleChange}
          /><br/>
          <input
            type="text"
            placeholder="Profile Pic"
            name="profilePic"
            value={this.state.user.profilePic}
            onChange={this.handleChange}
          /><br/>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default Signup;
