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
      this.setState({redirect:true})

      // window.location = "http:localhost:3000/welcome";

      console.log(res.data);
    });
  };

  render() {
    
    if(this.state.redirect){
      return <Redirect to='/welcome'/>
  }
    return (
      <div>
        <div class="container" style={{width: "250px", marginTop: "20px", marginBottom: "40px"}}>

        <img src="https://i.imgur.com/Q6b8T2M.png" alt="logo" width="250px"/> 
        </div>

        <form class="container" style={{width: "70%"}} onSubmit={this.handleSubmit}>

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
          <button style={{ backgroundColor: "#72CC72", color:"white" }} class="button is-large is-fullwidth" type="submit">Sign Up</button>
        </form>
      </div>
    );
  }
}

export default Signup;
