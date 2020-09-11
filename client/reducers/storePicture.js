import { STORE_PICTURE } from '../actions'

function storePicture(state = [], action) {
  switch (action.type) {
    case STORE_PICTURE:
      return action.picData
    default:
      return state
  }
}

export default storePicture