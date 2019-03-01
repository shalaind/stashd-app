import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class UserHeader extends Component {


    
    render() {
        return (
            <div>
                
                    <div class="userHead">
                        <div class="profileCon2">
                            <Link to={"/user-profile/" + this.props.userId} >
                                <img class="profilePic" 
                                    src= {this.props.userPic} 
                                    alt="profile" />
                            </Link>
                        </div> 
                           <h1 style={{marginTop: "40px"}}> <strong>{this.props.username}</strong> </h1> 
                    </div> 

            </div>
        );
    }
}

export default UserHeader;