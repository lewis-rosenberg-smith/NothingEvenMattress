import React from 'react'
import {addNewPosition} from '../api/index'

class Add extends React.Component {
  state = {
    imageUrl: "",
    imageName: "",
    positionName: "",
    postionsDescription: "",
    temperature: "",
    participants: 0,
    rating: 0,
    animal: "",
}

  handleChange = (event) => {
    this.setState({[event.target.name]: event.target.value})
  }

  handleSubmit = (event) => {
    event.preventDefault()
    addNewPosition(this.state)
  }

  render() {
    return (
      <>
      <form onSubmit={this.handleSubmit}>
        <input type="text" name="imageUrl" onChange={this.handleChange} placeholder='Image Url'/>
        <input type="text" name="imageName" onChange={this.handleChange} placeholder='Image Name'/>
        <input type="text" name="positionName" onChange={this.handleChange} placeholder='Position Name'/>
        <input type="text" name="positionsDescription" onChange={this.handleChange} placeholder='Position Description'/>
        <input type="text" name="temperature" onChange={this.handleChange} placeholder='Temperature'/>
        <input type="number" name="participants" onChange={this.handleChange} placeholder='Participants'/>
        <input type="number" name="rating" onChange={this.handleChange} placeholder='Rating'/>
        <input type="text" name="animal" onChange={this.handleChange} placeholder='Animal'/>
        <button>Save</button>
      </form>
      </>
    )
  }
}


export default Add