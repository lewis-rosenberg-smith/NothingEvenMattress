import { RECEIVE_PICTURES } from '../actions'

function pictures(state = [], action) {
  switch (action.type) {
    case RECEIVE_PICTURES:
      return action.pictures
    default:
      return state
  }
}

export default pictures