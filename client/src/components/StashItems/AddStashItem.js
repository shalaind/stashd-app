import React, { Component } from "react";
import axios from "axios";

class AddStashItem extends Component {
  state = {
    stashItems: [{}],
    redirect: false,
    linkPreview: [{
      image: '',
      url: '', 
      title: '',
      description: ''
    }]
  };

  handleChange = event => {
    const newState = { ...this.state.stashItems };
    newState[event.target.name] = event.target.value;
    this.setState({ stashItems: newState });
    console.log(this.state.stashItems)
  };

  handleSubmit = event => {
    event.preventDefault();
    const stashUpload = this.state.stashItems;
    axios.post(`/api/category/${this.props.catId}/stash-items`, stashUpload).then(res => {
      this.linkPreview()
      console.log("posted a stash item with link preview")
      this.props.getStash() 
      this.props.toggleAddStashItem()
      console.log(this.state.linkPreview)

    });
  };
  
  linkPreview = () => {
    axios.get(`http://api.linkpreview.net/?key=5c7061cb8b2d714407ebebef881f1a536ffa36a9b8f6b&q=${this.state.stashItems.link}`).then(res => {
      const savePreview = res.data 
      this.setState({linkPreview: savePreview})
      console.log(this.state.linkPreview)
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit} style={{width: "200px", paddingTop: "20px"}}>
          <input
            class="input"
            type="text"
            placeholder="Title"
            name="title"
            value={this.state.stashItems.title}
            onChange={this.handleChange}
          />
          <input
            class="input"
            type="text"
            placeholder="Link"
            name="link"
            value={this.state.stashItems.link}
            onChange={this.handleChange}
          />
          <button class="button is-info">Add Item</button>
        </form>
      </div>
    );
  }
}

export default AddStashItem;
