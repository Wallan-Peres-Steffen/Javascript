module.exports = {
  cadastrar: (id, descricao, quantidade, preco) => {
    return `Produto cadastrado com sucesso! ID: ${id}, Descrição: ${descricao}, 
    Quantidade: ${quantidade}, Preço: R$${preco}`;
  }
};