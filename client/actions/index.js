export const RECEIVE_PICTURES = 'RECEIVE_PICTURES'
export const CHANGE_PAGE = 'CHANGE_PAGE'
export const STORE_PICTURE = 'STORE_PICTURE'

export const recievePictures = (pictures) => {
  return {
    type: RECEIVE_PICTURES,
    pictures: pictures
  }
}

export const changePage = (page) => {
  return{
    type: CHANGE_PAGE,
    page: page
  }
}

export const storePicture = (picData) => {
  return{
    type: STORE_PICTURE,
    picData: picData
  }
}