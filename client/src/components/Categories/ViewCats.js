import React, { Component } from "react";
import axios from 'axios'; 
import {Link} from 'react-router-dom'; 

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

        {this.state.user.categories.map((cat, i) => (
            <div key={i}>
                  <div>
                   <Link to={"/stash-items/" + cat._id }><h1>{cat.title} </h1> </Link> 
                  </div>
            </div>
           ))}

        {/* <h1> List of all categories from user </h1> <h1> Books </h1>
        <h1> Podcasts </h1> 
        <h1> Audiobooks </h1> */}
      </div>
    );
  }
}

export default ViewCats;
