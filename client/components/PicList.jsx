import React from 'react'
import { connect } from 'react-redux'

import Picture from './Picture'
import Information from './Information'
import { getSummary } from '../api/index.js'
import { recievePictures } from '../actions'

class PicList extends React.Component {
  componentDidMount() {
    getSummary().then(data => {
      this.props.dispatch(recievePictures(data.body))
    })
  }

  render() {
    return (
      <>
        <h2>PicList</h2>
        {this.props.pictures.map(pic => {
          (this.props.)
          return <Picture id={pic.id} position={pic.position_name} url={pic.img_url} name={pic.img_name}/>
        })}

        <Information />
      </>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    pictures: state.pictures,
    viewPage: state.viewPage,
  }
}

export default connect(mapStateToProps)(PicList)
