import React from 'react'
import { connect } from 'react-redux'

import Picture from './Picture'
import Information from './Information'
import { getSummary } from '../api/index.js'
import { recievePictures } from '../actions'

class PicList extends React.Component {
  componentDidMount() {
    getSummary().then(data => {
      this.props.dispatch(recievePictures(data))
    })
  }

  render() {
    return (
      <>
        <h2>PicList</h2>
        {this.props.pictures.map(pic => {
          // <Picture />
          return <p>{Object.keys(pic)}</p>
        })}

        <Information />
      </>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    pictures: state.pictures
  }
}

export default connect(mapStateToProps)(PicList)