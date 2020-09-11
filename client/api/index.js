import request from 'superagent'

const apiUrl = '/api/v1/'

export function getSummary() {
  return request.get(apiUrl)
    .then(res => {
      return res.body
    })
    .catch((err) => {
      console.log("error from getSummary", err)
    })
}

export function getPositionDetail(id) {
  return request.get(apiUrl + id)
    .then(res => {
      return res.body
    })
    .catch((err) => {
      console.log("error from getPositionDetail", err)
    })
}
export function updatePosition(positionId) {
  return request.patch(`/v1/${positionId}`)
    .send(post)
    .then(res => {
      return res.body
    })
    .catch(errorHandler('PATCH', '/v1/:id'))
}
export function deletePosition(positionId) {
  return request.del(apiUrl + positionId)
    .then(res => res)
    .catch((err) => {
      console.log("error from deletePosition: " + positionId, err)
    })
}
export function addNewPosition(newPosition) {
  const position = {
    img_url: newPosition.imageUrl,
    img_name: newPosition.imageName,
    position_name: newPosition.positionName,
    position_description: newPosition.positionsDescription,
    temperature: newPosition.temperature,
    participants: newPosition.participants,
    rating: newPosition.rating,
    animal: newPosition.animal,
  }
  return request.post(apiUrl)
    .send(newPosition)
    .then(res => {
      return res.body
    })
    .catch((err) => console.log(err))
}