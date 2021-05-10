const express = require("express");
const Noticias = require("../models/noticias");
const router = express.Router();

router.get("/noticias", function (req, res) {
  Noticias.create(req.body)
    .then(function (student) {
      res.send(student);
    })
    .catch(next);
});

router.post("/noticias", function (req, res) {
  res.send({
    type: "POST",
    name: req.body.name,
    roll: req.body.roll,
  });
});

router.put("/noticias/:id", function (req, res) {
  res.send({ type: "PUT" });
});
router.delete("/noticias/:id", function (req, res) {
  res.send({ type: "DELETE" });
});

module.exports = router;
