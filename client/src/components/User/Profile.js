import React, { Component } from "react";
import { Link } from 'react-router-dom'; 
import axios from "axios";
import swal from "sweetalert";
import EditUser from "./EditUser";

class Profile extends Component {
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
    editUserFormVisible: false,

  };

  toggleEditUserForm = () => {
    this.setState({ editUserFormVisible: !this.state.editUserFormVisible });
  };

  componentDidMount = () => {
    this.getUsers();
  };

  getUsers = () => {
    let userId = this.props.match.params.userId;
    axios
      .get(`/api/user/${userId}/category`)
      .then(res => this.setState({ user: res.data }));
  };

  deleteUser = () => {
    const userId = this.props.match.params.userId;
    axios.delete(`/api/user/${userId}`).then(() => {
      swal({
        title: "Are you sure?",
        text: "Once deleted, you will not be able to recover this account",
        icon: "warning",
        buttons: true,
        dangerMode: true
      }).then(willDelete => {
        if (willDelete) {
          swal("Poof! You have emptied out your stash!", {
            icon: "success"
          });

          setTimeout(function() {
            // this.setState({redirect:true})

            window.location = "/welcome";
          }, 2000);
        } else {
          swal("Your account is safe...Stash Away!");
        }
      });
    });
  };

  editUser = userId => {
    axios.patch(`/api/user/${userId}`).then(() => console.log("user updated"));
  };

  

  render() {
    return (
      <div>
    
        <div style={{padding: "20px"}}>

        <Link to={`/view-categories/${this.state.user._id}`}> Back </Link> 
        </div>

      <div class="container" style={{width: "260px"}}> 
        <div class="profileCon3">
          <img

            src={this.state.user.profilePic}
            alt="profile"
          />
        </div> 
      </div>

      <div style={{padding: "20px", textAlign: "center"}}>
        <strong>Username:</strong> {this.state.user.username} <br /> 
        <strong>Email:</strong> {this.state.user.email} <br /> 
      </div>
        <div  style={{textAlign: "center"}}>

        <button className="button is-text" onClick={this.toggleEditUserForm}> 
        Edit
          </button> 

          {this.state.editUserFormVisible ? (
            <EditUser
              userId = {this.props.match.params.userId}
              getUsers = {this.getUsers}
              toggleEditUserForm = {this.toggleEditUserForm}
            /> 
          ) : null}


        <button class="button is-info" onClick={this.deleteUser}>Delete</button>
        </div> 

      </div>
    );
  }
}

export default Profile;
