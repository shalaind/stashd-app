import React, { Component } from "react";
import axios from 'axios'; 
import {Link} from 'react-router-dom'; 
import UserHeader from "../User/UserHeader";


class ViewCats extends Component {
    state = {
        user: {
            username: '',
            password: '',
            email: '',
            profilePic:'',
            categories: [
                {
                    title: ''
                }
            ]
        }
    };


componentDidMount = () => {
        this.getUsers();
}

getUsers = () => {
    let userId = this.props.match.params.userId
    axios.get(`/api/user/${userId}/category`).then(res =>

        this.setState({ user: res.data })

        // this.setState({ user: res.data })
    )}

  render() {
    return (
      <div>
    <UserHeader getUsers = {this.state.getUsers} />

    <Link to={"/add-category/" + this.props.match.params.userId}><h1>Add Stash</h1> </Link> 

        {this.state.user.categories.map((cat, i) => (
            <div key={i}>
                  <div>
                   <Link to={"/stash-items/" + cat._id }><h1>{cat.title} </h1> </Link> 
                  </div>
            </div>
           ))}

      </div>
    );
  }
}

export default ViewCats;
