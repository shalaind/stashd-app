import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import UserHeader from "../User/UserHeader";
import AddCat from "./AddCat";


class ViewCats extends Component {
  state = {
    user: {
      _id: "",
      username: "",
      password: "",
      email: "",
      profilePic: "",
      categories: [
        {
          title: ""
        }
      ]
    },
    catFormVisible: false,

  };

  toggleAddCatForm = () => {
    this.setState({ catFormVisible: !this.state.catFormVisible });
  };

  componentDidMount = () => {
    this.getUsers();
  };

  getUsers = () => {
    let userId = this.props.match.params.userId;
    axios.get(`/api/user/${userId}/category`).then(
      res => this.setState({ user: res.data })
    );
  };

  deleteUser = () => {
    const catId = this.props.match.params.categoryId;
    axios.delete(`/api/category/${catId}`).then(() => {
      console.log("it deleted");
    });
  };

  render() {
    return (
      <div>
        <UserHeader
          userPic={this.state.user.profilePic}
          username={this.state.user.username}
          userId={this.state.user._id}
        />
        <h1 class="welcomeHeader"> Stashes  
        
        <button style={{marginTop: "20px"}}className="button is-info" onClick={this.toggleAddCatForm}>
        <i class="fas fa-plus"></i>
          </button>
          {this.state.catFormVisible ? (
            <AddCat 
              userId = {this.props.match.params.userId}
              getUsers = {this.getUsers}
              toggleAddCatForm = {this.toggleAddCatForm}
            /> 
          ) : null}
          </h1> 
          
              <div class="stashOuter">
        {this.state.user.categories.map((cat, i) => (
          <div class="stashColumns" key={i}>
              <Link to={"/stash-items/" + cat._id}>
            <div class="catBox">
                <h1 class="catTitle">{cat.title} </h1>
            </div>
              </Link>
              </div> 
        ))}
        </div> 

       
        </div> 
    );
  }
}

export default ViewCats;
