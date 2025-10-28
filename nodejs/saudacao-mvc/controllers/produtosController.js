const produtosModel = require('../models/produtosModel');
const { camisetas } = require('./siteController');

module.exports = {
	
    produtos: (req, res) => {
        res.sendFile(´produtos.html´, { root: './views' });
            },
            camisetas: (req, res) => {
                res.sendFile(´camisetas.html´, { root: './views' });
            },
    formCadProd: (req, res) => {
        res.sendFile('cadastro_produto.html', { root: './views' });
    },
    cadastrar: (req, res) => {
        const { id, descricao, quantidade, preco } = req.body;
        const mensagemCadastro = produtosModel.cadastrar(id, descricao, quantidade, preco);
        res.send(´<h1>${mensagemCadastro}</h1>´);
    }
};
