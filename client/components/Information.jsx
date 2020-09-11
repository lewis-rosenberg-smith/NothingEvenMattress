import React from 'react'
import Delete from './Delete'

class Information extends React.Component {
  render() {
    return (
      <>
        <h4>{this.props.picData.position_name}</h4>
        <img src={this.props.picData.img_url}></img>
        <ul>
          <li>Description: {this.props.picData.position_description}</li>
          <li>Rating: {this.props.picData.rating}</li>
          <li>Temperature: {this.props.picData.temperature}</li>
          <li>Participants: {this.props.picData.participants}</li>
          <li><Delete id={this.props.picData.id} /></li>
        </ul>
      </>
    )
  }
}

export default Information
