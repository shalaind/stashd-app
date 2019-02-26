import React, { Component } from 'react';
import { Link } from 'react-router-dom'; 
import axios from 'axios';

class SelectCat extends Component {
    state = {
        user: [{}]
    };
    componentDidMount = () => {
        this.getUsers();
}

getUsers = () => {
    axios.get(`/api/user`).then(res =>
        this.setState({ user: res.data })
        // this.setState({ user: res.data })
    )}

    render() {
        return (
            <div>
            
                <h1>Select Your Categories</h1>

                <button>Books + </button>

                <button>Podcasts + </button>
                <button>Videos + </button>

               <button>Audiobooks + </button> <br />

                <Link to= {"/view-categories/" + this.props.match.params.userId} ><button>Continue</button> </Link>
            </div>
        );
    }
}

export default SelectCat;