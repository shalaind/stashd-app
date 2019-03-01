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
        <h1 class="welcomeHeader">Get ready to Stash!</h1>
        <p class="welcomePara">
          Stash'd is a safe haven for the things you want to save and come back to enjoy later. Store a list of the books you'd like to read, new podcast recommendations, or even a list of movies to watch! 
        </p>
        <h1 class="getStartedHeader">Click your profile below to get started</h1>

        <div class="userProfiles">

        {this.state.user.map((user, i) => (
          <div key={i}>
            <div>
            <div class="profileCon">
            <Link to={`/select-categories/${user._id}`}>
              <img
                src={user.profilePic}
                alt="user profile"
              />
              </Link>
            </div>
              {/* <Link to={`/select-categories/${user._id}`}>
                <h3>{user.username}</h3>
              </Link> */}
            </div>
          </div>
        ))}
        </div>

        {/* <Link to="/select-categories"><button>Click Here</button> </Link> */}
      </div>
    );
  }
}

export default Welcome;
