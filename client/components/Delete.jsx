import { deletePosition } from '../api'
import React from 'react'

import { changePage } from '../actions'
import { connect } from 'react-redux'

class Delete extends React.Component {
  deletePost = id => {
    deletePosition(id)
      .then(res => {
        // todo re direct to home 
        this.props.dispatch(changePage("pictures"))
      })
  }

  render() {
    return (
      <>
        <button onClick={() => { this.deletePost(this.props.id) }}>Delete</button>
      </>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    viewPage: state.viewPage
  }
}

export default connect(mapStateToProps)(Delete)