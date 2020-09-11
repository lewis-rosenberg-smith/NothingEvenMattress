import { combineReducers } from 'redux'

import pictures from './pictures'
import viewPage from './viewPage'
import storePicture from './storePicture'

export default combineReducers({
  pictures,
  viewPage,
  storePicture,
})
