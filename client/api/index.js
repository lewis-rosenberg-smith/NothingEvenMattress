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
  return request.del(`/v1/${positionId}`)
    .then(res => res)
    .catch((err) => {
      console.log("error from deletePosition: " + positionId, err)
    })
}
export function addNewPosition(newPosition) {
  return request.post('/v1/')
    .send(newPosition)
    .then(res => {
      return res.body
    })
    .catch(errorHandler('POST', '/v1/'))
}