import { RECEIVE_PICTURES } from '../actions'

//pictures reducer defines what happens if action RECIEVE_PICTURES occurs
function pictures(state = [], action) {
  switch (action.type) {
    case RECEIVE_PICTURES:
      return action.pictures
    default:
      return state
  }
}

export default pictures