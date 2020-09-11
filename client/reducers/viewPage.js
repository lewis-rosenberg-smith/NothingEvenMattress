import { CHANGE_PAGE } from '../actions'

function viewPage(state = 'pictures', action) {
  switch (action.type) {
    case CHANGE_PAGE:
      return action.page
    default:
      return state
  }
}

export default viewPage