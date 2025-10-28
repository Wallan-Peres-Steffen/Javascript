const express = require("express");
const router = express.Router();

router.get('/cadastrar', produtosController.formCadProd);
router.get('/cadastrar', produtosController.cadastrar);

module.exports = router;