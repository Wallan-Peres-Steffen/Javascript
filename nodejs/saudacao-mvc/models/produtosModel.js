module.exports = {
  formCadProd(req, res) {
    res.render('cadastro_produto');
  },
  cadastrar(req, res) {
    const { produto, valor, descrição } = req.body;

    // Aqui você pode adicionar a lógica para salvar o produto no banco de dados
    console.log(`Produto cadastrado: ${quantidade} ${produto}, Valor: ${valor}, Descrição: ${descrição}`);
  }
};