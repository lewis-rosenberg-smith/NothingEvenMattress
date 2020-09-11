import {deletePosition} from '../api'
import React from 'react'

class Delete extends React.Component {
  deletePost = id => {
    deletePosition(id)
    .then(res => {
      // todo re direct to home 
    })
  }

  render() {
    return (
      <>
        <button onClick={()=>{this.deletePost(this.props.id)}}>Delete</button>
      </>
    )
  }
}

export default Delete