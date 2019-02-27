import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class UserHeader extends Component {


    
    render() {
        return (
            <div>
                <h1>Stash'd Logo</h1>
                <h1> {this.props.username} </h1>
                <Link to={"/user-profile/" + this.props.userId}>

                <img class="profilePic" 
                src= {this.props.userPic} 
                alt="profile" />
                </Link>

            </div>
        );
    }
}

export default UserHeader;