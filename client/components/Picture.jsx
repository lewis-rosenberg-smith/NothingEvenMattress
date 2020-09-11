import React from 'react'
import { connect } from 'react-redux'

class Picture extends React.Component {
  render() {
    return (
      <>
        <h4>{this.props.position}</h4>
        <button onClick>Information</button>
        <img src={this.props.url}></img>
      </>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    page: state.page
  }
}

export default connect(mapStateToProps)(Picture)