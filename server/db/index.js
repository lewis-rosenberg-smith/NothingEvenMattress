const knex = require('../../knexfile')
const config = process.env.NODE_ENV || 'development'
const database = require('knex')(knex[config])

function getSummary(db = database){
  return db('positions')
    .select('id')
    .select('position_name')
    .select('img_url')
    .select('img_description')
    .then(res => res)
}

function getPositionDetail(id){
  return 'positionDetail: ' + id
}

function updatePosition(id, position){
  return 'update position: ' + id
}

function addPosition(position){
  return 'add position'
}

function deletePosition(id){
  return 'delete position'
}

module.exports = {
  getSummary,
  getPositionDetail,
  updatePosition,
  addPosition,
  deletePosition
}