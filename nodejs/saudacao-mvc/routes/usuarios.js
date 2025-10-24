const express = require("express");
const router = express.Router();
const usuarioController = require("../controllers/usuarioController");

router.get("/", usuarioController.index);
router.get("/login", usuarioController.formulario);
router.post("/login", usuarioController.login);

module.exports = router;