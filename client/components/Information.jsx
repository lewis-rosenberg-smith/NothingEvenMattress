import React from 'react'
import Delete from './Delete'

class Information extends React.Component {
  render() {
    return (
      <div className="listing"> 
        <h4>{this.props.picData.position_name}</h4>
        <img src={this.props.picData.img_url}></img>
        
          <p>Description: {this.props.picData.position_description}</p>
          <p>Rating: {this.props.picData.rating}</p>
          <p>Temperature: {this.props.picData.temperature}</p>
          <p>Participants: {this.props.picData.participants}</p>
          <p><Delete id={this.props.picData.id} /></p>
      </div>
    )
  }
}

export default Information
