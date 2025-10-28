const express = require("express");
const router = express.Router();
const siteController = require('../controllers/produtosController');

router.get('/', siteController.produtos);
router.get('/camisetas', siteController.camisetas);
router.get('/cadastrar', siteController.formCadProd);
router.post('/cadastrar', siteController.cadastrar);

module.exports = router;