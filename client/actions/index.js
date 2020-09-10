export const RECEIVE_PICTURES = 'RECEIVE_PICTURES'

//Action returns whatever is passed into it i.e. pictures array
export const recievePictures = (pictures) => {
  return {
    type: RECEIVE_PICTURES,
    pictures: pictures
  }
}