import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

class Welcome extends Component {
  state = {
    user: [{}]
  };

  componentDidMount = () => {
    this.getUsers();
  };

  getUsers = () => {
    axios.get(`/api/user`).then(
      res => this.setState({ user: res.data })
      // this.setState({ user: res.data })
    );
  };
  render() {
    return (
      <div>
        <h1>Welcome to Stash'd</h1>
        <h1>
          This is where you can stash your entertainment and come back to enjoy
          later
        </h1>
        <h1>Lets get started</h1>
        {this.state.user.map((user, i) => (
          <div key={i}>
            <div>
              <img
                class="profilePic"
                src={user.profilePic}
                alt="user profile"
              />

              <Link to={`/select-categories/${user._id}`}>
                <h3>{user.username}</h3>
              </Link>
            </div>
          </div>
        ))}
        {/* <Link to="/select-categories"><button>Click Here</button> </Link> */}
      </div>
    );
  }
}

export default Welcome;
