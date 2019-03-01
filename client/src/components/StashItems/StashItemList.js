import React, { Component } from "react";
import axios from "axios";
import { Link } from 'react-router-dom'; 
import AddStashItem from './AddStashItem'; 

class StashItemList extends Component {

    state = {
        categories: {
            _id: '', 
            title: '',
            stashItems: [{}]
        },
        addStashItemVisible: false
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

  toggleAddStashItem = () => {
    this.setState({ addStashItemVisible: !this.state.addStashItemVisible });

  }

  deleteCat = () => {
    const catId = this.props.match.params.catId
    axios.delete(`/api/category/${catId}`).then(() => {
      console.log('deleted')

    });
  };

  deleteStashItem = stashItemId => {
    axios.delete(`/api/stash-items/${stashItemId}`).then(() => {
        this.getStash()
  
      console.log('page needs to be refreshed')
    });
  };


  render() {
    return (
      <div>
      <h1> Back </h1>  

       <h1 class="welcomeHeader">{this.state.categories.title}

        <button style={{marginTop: "20px", marginLeft: "20px" }} className="button is-info" onClick={this.toggleAddStashItem}>
        <i class="fas fa-plus"></i>
          </button>
          {this.state.addStashItemVisible ? (
            <AddStashItem 
              catId = {this.props.match.params.catId}
              getStash = {this.getStash}
              toggleAddStashItem = {this.toggleAddStashItem}
            /> 
          ) : null}

          </h1>


       {/* <Link to={"/add-stash-item/" + this.state.categories._id }><button> Add to the Stash </button></Link> */}

        {this.state.categories.stashItems.map((stash, i) => (
            <div key={i}>

            <a href= {stash.link} target="_blank" >  <h1>{stash.title}</h1> </a>
    
                <button 
                class="button is-info"
                onClick={() => this.deleteStashItem(stash._id)}
               >
               <i class="fas fa-times"></i>
               </button>
            </div>
        ))}

        <button class="button is-info" onClick={this.deleteCat}>Delete Stash</button>
      </div>
    )
  }
}

export default StashItemList;
