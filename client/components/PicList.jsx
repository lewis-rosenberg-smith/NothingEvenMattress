import React from 'react'
import { connect } from 'react-redux'

import Picture from './Picture'
import Information from './Information'
import Add from './Add'
import { getSummary } from '../api/index.js'
import { recievePictures, changePage } from '../actions'

class PicList extends React.Component {
  componentDidMount() {
    getSummary().then(data => {
      this.props.dispatch(recievePictures(data.body))
    })
  }

  componentDidUpdate() {
    getSummary().then(data => {
      this.props.dispatch(recievePictures(data.body))
    })
  }


  render() {
    return (
      <>
        <h2>PicList</h2>
        <button onClick={() => this.props.dispatch(changePage("pictures"))}>HOME</button>
        <Add />

        {this.props.viewPage === "pictures"
          ? this.props.pictures.map(pic => {
            return <Picture id={pic.id} position={pic.position_name} url={pic.img_url} name={pic.img_name} />
          })
          : <Information picData={this.props.storePicture} />
        }
      </>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    pictures: state.pictures,
    viewPage: state.viewPage,
    storePicture: state.storePicture
  }
}

export default connect(mapStateToProps)(PicList)
