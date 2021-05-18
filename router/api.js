const express = require("express");
const Noticias = require("../models/noticias");
const router = express.Router();
//End points
// GET apenas com enable a true

router.get("/noticias", async function (req, res) {
  Noticias.find({ enable: { $eq: true } })
    .then(function (news) {
      res.send(news);
    })
    .catch("ola");
});

router.post("/noticias", async function (req, res, next) {
  Noticias.create(req.body)
    .then(function (news) {
      res.send("Feito com sucesso!! Noticia " + news.titulo + " criada.");
    })
    .catch(next);
});

router.put("/noticias/:id", async function (req, res) {
  Noticias.findOneAndUpdate({ _id: req.params.id }, req.body).then(function (
    news
  ) {
    Noticias.findOne({ _id: req.params.id }).then(function (news) {
      res.send("Feito com sucesso!! Noticia " + news.titulo + " alterada.");
    });
  });
});

router.delete("/noticias/:id", async function (req, res) {
  Noticias.findOneAndDelete({ _id: req.params.id }).then(function (news) {
    res.send(news);
  });
});

module.exports = router;
