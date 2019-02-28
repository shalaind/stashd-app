import React, { Component } from 'react'
import axios from 'axios'; 

export default class EditUser extends Component {

    editUser = (event) => {
         axios.patch(`/api/user/${user._id}`, user).then(res => {
          console.log("it worked");
        });
    }

  render() {
    return (
      <div>
        
      </div>
    )
  }
}
