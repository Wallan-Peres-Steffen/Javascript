const express = require("express");
const router = express.Router();
const siteController = require("../controllers/siteController");

// Rota para listar todos os clientes
router.get("/", siteController.produtos);

module.exports = router;