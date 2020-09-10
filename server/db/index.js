const knex = require('../../knexfile')
const config = process.env.NODE_ENV || 'development'
const database = require('knex')(knex[config])

function getSummary(){
  return 'summary'
}

function getPositionDetail(id, db = database){
  return db('positions')
    .where('id', id)
    .first()
    .then(res=>res)
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