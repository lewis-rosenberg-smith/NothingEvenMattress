import React from 'react'

class Picture extends React.Component {
  render() {
    return (
      <>
        <h4>{this.props.position}</h4>
        <img src={this.props.url}></img>
      </>
    )
  }
}

export default Picture
