import React, { Component } from "react";
import axios from "axios";

class AddStashItem extends Component {
  state = {
    stashItems: [{}],
    redirect: false
  };

  handleChange = event => {
    const newState = { ...this.state.stashItems };
    newState[event.target.name] = event.target.value;
    this.setState({ stashItems: newState });
  };

  handleSubmit = event => {
    event.preventDefault();
    const stashUpload = this.state.stashItems;
    const catId = this.props.match.params.catId;
    axios.post(`/api/category/${catId}/stash-items`, stashUpload).then(res => {
      console.log("posted a stash item");
    });
  };

  render() {
    return (
      <div>
        <h1>Add a new item</h1>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="title"
            name="title"
            value={this.state.stashItems.title}
            onChange={this.handleChange}
          />
          <input
            type="text"
            placeholder="link"
            name="link"
            value={this.state.stashItems.link}
            onChange={this.handleChange}
          />
          <button>Add</button>
        </form>
      </div>
    );
  }
}

export default AddStashItem;
