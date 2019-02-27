import React, { Component } from 'react';
import axios from 'axios'; 
import swal from 'sweetalert';


class Profile extends Component {

    state = {
        user: {
            _id: '',
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

    deleteUser = () => {
        const userId = this.props.match.params.userId
        axios.delete(`/api/user/${userId}`).then(() => {
            console.log('it deleted')

            // swal("Good job!", "You clicked the button!", "success");

            // setTimeout(function(){ 
            //             window.location = '/welcome' 
            //         }, 2000); 


            swal({
                title: "Are you sure?",
                text: "Once deleted, you will not be able to recover this account",
                icon: "warning",
                buttons: true,
                dangerMode: true,
              })
              .then((willDelete) => {
                if (willDelete) {
                  swal("Poof! You have emptied out your stash!", {
                    icon: "success",
                  });

                  setTimeout(function(){ 
                    window.location = '/welcome' 
                }, 2000); 

                } else {
                  swal("Your account is safe...Stash Away!");
                }
              });


        });
      };

    render() {
        return (
            <div>
                <img class="profilePic" src={this.state.user.profilePic} alt="profile" /> 
                <h1>{this.state.user.username}</h1>
                <h1>{this.state.user.email}</h1>
                <h1>Edit</h1>
                <button onClick={this.deleteUser}>Delete</button>
            </div>
        );
    }
}

export default Profile;