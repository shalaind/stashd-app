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
      window.location = "/welcome";

      console.log(res.data);
    });
  };

  render() {
    return (
      <div>
        <h1>Sign up</h1>
        <form onSubmit={this.handleSubmit}>
          <div class="control has-icons-left">
            <input
              class="input is-medium"
              type="text"
              name="username"
              value={this.state.user.username}
              onChange={this.handleChange}
              placeholder="Username"
            />
            <span class="icon is-left">
              <i class="fas fa-user" />
            </span>
          </div>

          <br />

          <div class="control has-icons-left">
            <input
              class="input is-medium"
              type="email"
              name="email"
              value={this.state.user.email}
              onChange={this.handleChange}
              placeholder="Email"
            />
            <span class="icon is-left">
              <i class="fas fa-envelope" />
            </span>
          </div>

          <br />

          <div class="control has-icons-left">
            <input
              class="input is-medium"
              type="password"
              name="password"
              value={this.state.user.password}
              onChange={this.handleChange}
              placeholder="Password"
            />
            <span class="icon is-left">
              <i class="fas fa-lock" />
            </span>
          </div>

          <br />

          <div class="control has-icons-left">
            <input
              class="input is-medium"
              type="text"
              name="profilePic"
              value={this.state.user.profilePic}
            onChange={this.handleChange}
              placeholder="Profile Pic"
            />
            <span class="icon is-left">
              <i class="fas fa-camera" />
            </span>
          </div>

          <br />
          <button class="button is-large is-fullwidth" type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default Signup;
