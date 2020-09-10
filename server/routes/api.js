const express = require("express");
const db = require("../db");

const router = express.Router();

router.get("/", (req, res) => {
  return db.getSummary().then((summary) => {
    return res.json(summary);
  });
});

router.get("/:id", (req, res) => {
  return res.json({ message: db.getPositionDetail(1) });
});

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

router.patch("/:id", (req, res) => {
  return res.json({ message: db.updatePosition(1, "update") });
});

router.delete("/:id", (req, res) => {
  return res.json({ message: db.deletePosition(1) });
});

module.exports = router;
