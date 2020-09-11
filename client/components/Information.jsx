import React from 'react'

class Information extends React.Component {
  render() {
    return (
      <>
        <h4>{this.props.picData.position_name}</h4>
        <ul>
          <li>Description: {this.props.picData.position_description}</li>
          <li>Rating: {this.props.picData.rating}</li>
          <li>Temperature: {this.props.picData.temperature}</li>
          <li>Participants: {this.props.picData.participants}</li>
        </ul>
      </>
    )
  }
}

export default Information
