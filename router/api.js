const express = require("express");
const router = express.Router();

router.get("/noticias", function (req, res) {
  res.send({ type: "GET" });
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
