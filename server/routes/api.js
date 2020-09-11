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

router.post("/", (req, res) => {
  const position = {
    img_url: req.body.img_url,
    img_name: req.body.img_name,
    position_name: req.body.position_name,
    position_description: req.body.position_description,
    temperature: req.body.temperature,
    participants: req.body.participants,
    rating: req.body.rating,
    animal: req.body.animal,
  };
  return db.addPosition(position).then((ids) => {
    return res.json({body: ids[0]});
  });
});

router.patch('/:id', (req,res) => {
  const id = req.params.id
  const position = {
    img_url: req.body.img_url || "",
    img_name: req.body.img_name || "",
    position_name: req.body.position_name || "",
    position_description: req.body.position_description || "",
    temperature: req.body.temperature || "",
    participants: req.body.participants || 0,
    rating: req.body.rating || 0,
    animal: req.body.animal || "",
  }
  return db.updatePosition(id, position)
  .then((count) => { 
  return res.json({body:count})
  })
})

router.delete('/:id', (req, res) => {
 const id = req.params.id 
  return db.deletePosition(id)
  .then(count => {
    return res.json({body:count})
  })
})


module.exports = router
