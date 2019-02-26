import React, { Component } from 'react';
import { Link } from 'react-router-dom'; 
import axios from 'axios'; 

class StashItemList extends Component {
    state = {
        user: {
            username: '',
            password: '',
            email: '',
            profilePic:'',
            categories: [
                {
                    title: '',
                    stashItems: [
                        {
                            title: '',
                            link: ''
                        }
                    ]
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
                <h1>List of all stash items in one category</h1>


                  {this.state.user.categories.stashItems.map((stashItem, i) => (
                    <div key={i}>
                        <div>
                        <h1>{stashItem.title}</h1>
                        <h1>{stashItem.link}</h1>

                        </div>
            </div>
           ))}
            </div>
        );
    }
}

export default StashItemList;