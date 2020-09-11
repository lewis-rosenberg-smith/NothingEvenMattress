import React from 'react'
import { connect } from 'react-redux'
import { changePage, storePicture } from '../actions'
import { getPositionDetail } from '../api/index.js'

class Picture extends React.Component {

  handleClick = (evt) => {
    this.props.dispatch(changePage("information"))
    getPositionDetail(this.props.id).then(data => {
      this.props.dispatch(storePicture(data.body))
    })
  }

  render() {
    return (
      <>
        <li><button onClick={this.handleClick}>{this.props.position}</button></li>
        {/* <img src={this.props.url}></img> */}
      </>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    page: state.page,
    picData: state.picData
  }
}

export default connect(mapStateToProps)(Picture)