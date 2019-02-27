import React, { Component } from "react";
import axios from "axios";
import { Link } from 'react-router-dom'; 

class StashItemList extends Component {

    state = {
        categories: {
            _id: '', 
            title: '',
            stashItems: [{}]
        }
    }

  componentDidMount = () => {
    this.getStash();
  };

  getStash = () => {
    let catId = this.props.match.params.catId;
    axios.get(`/api/category/${catId}/stash-items`).then(res => 
      this.setState({ categories: res.data })
    );
  };

  deleteCat = () => {
    const catId = this.props.match.params.catId
    axios.delete(`/api/category/${catId}`).then(() => {
        console.log('page needs to be refreshed')

    });
  };

  deleteStashItem = stashItemId => {
    axios.delete(`/api/stash-items/${stashItemId}`).then(() => {
      // this.setState({
      //   categories: this.state.categories.filter(item => item._id !== stashItemId)
      // });
      console.log('page needs to be refreshed')
    });
  };


  render() {
    return (
      <div>
       <h1>{this.state.categories.title}</h1>
       <Link to={"/add-stash-item/" + this.state.categories._id }><button> Add to the Stash </button></Link>

        {this.state.categories.stashItems.map((stash, i) => (
            <div key={i}>
                <h1>{stash.title}</h1>
                <h1>{stash.link}</h1>
                <button 
                onClick={() => this.deleteStashItem(stash._id)}
               >X</button>
            </div>
        ))}

        <button onClick={this.deleteCat}>Delete Stash</button>
      </div>
    )
  }
}

export default StashItemList;
