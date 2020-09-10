const knex = require('../../knexfile')
const config = process.env.NODE_ENV || 'development'
const database = require('knex')(knex[config])

function getSummary(db = database){
  return db('positions')
    .select('id')
    .select('position_name')
    .select('img_url')
    .select('img_name')
    .then(res => res)
}

function getPositionDetail(id, db = database){
  return db('positions')
    .where('id', id)
    .first()
    .then(res => res)
}

function updatePosition(id, position,  db = database){
  return db('positions')
  .where('id', id)
  .update(position)
  .then(res => res)
}

function addPosition(position){
  return 'add position'
}

function deletePosition(id, db = database){
  return db('positions')
  .where('id', id)
  .del()
}

module.exports = {
  getSummary,
  getPositionDetail,
  updatePosition,
  addPosition,
  deletePosition
}