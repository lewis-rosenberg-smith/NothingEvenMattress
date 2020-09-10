const express = require('express')
const db = require('../db')

const router = express.Router()

router.get('/', (req,res) => {
  return db.getSummary()
    .then(summary => {
      return res.json({body: summary})
    })
})

router.get('/:id', (req,res) => {
  return db.getPositionDetail(req.params.id)
    .then(detail => {
      return res.json({body: detail})
    })
})

router.post('/', (req,res) => {
  return res.json({message:db.addPosition('position')})
})

router.patch('/:id', (req,res) => {
  return res.json({message:db.updatePosition(1, 'update')})
})

router.delete('/:id', (req, res) => {
 const id = req.params.id 
  return db.deletePosition(id)
  .then(count => {
    return res.json({body:count})
  })
})


module.exports = router