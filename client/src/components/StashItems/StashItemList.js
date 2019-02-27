import React, { Component } from "react";
import axios from "axios";
import { Link } from 'react-router-dom'; 

class StashItemList extends Component {

    state = {
        categories: {
            title: '',
            stashItems: [{}]
        }
    }

  componentDidMount = () => {
    this.getStash();
  };

  getStash = () => {
    let catId = this.props.match.params.catId;
    axios.get(`/api/category/${catId}/stash-items`).then(
      res => 
      this.setState({ categories: res.data })
    );
  };

  render() {
    return (
      <div>
       <h1>{this.state.categories.title}</h1>
       <Link to="/add-stash-item"><button> Add to the Stash </button></Link>

        {this.state.categories.stashItems.map((stash, i) => (
            <div key={i}>
                <h1>{stash.title}</h1>
                <h1>{stash.link}</h1>
            </div>
        ))}
      </div>
    )
  }
}

export default StashItemList;
