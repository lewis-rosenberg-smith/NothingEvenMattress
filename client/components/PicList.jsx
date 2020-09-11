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
<<<<<<< HEAD
        {this.props.pictures.map(pic => {
          // (this.props.)
          return <Picture id={pic.id} position={pic.position_name} url={pic.img_url} name={pic.img_name}/>
        })}
=======
>>>>>>> e8772b091bfb2d6a4a333ede319da77e57865c5b

        {this.props.viewPage === "pictures"
          ? this.props.pictures.map(pic => {
            return <Picture id={pic.id} position={pic.position_name} url={pic.img_url} name={pic.img_name} />
          })
          : <Information picData={this.props.storePicture} />
        }
        {/* //store in global state on click, then render it */}
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
