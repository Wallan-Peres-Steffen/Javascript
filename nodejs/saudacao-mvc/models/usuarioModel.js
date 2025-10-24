module.exports = {

    gerarMensagemLogin: (login, senha) => {
        let acesso;

        if (login === "admin" && senha === "1234") {
            acesso = "Acesso Permitido";
        } else {
            acesso = "Acesso Negado";
        }
        return ´${acesso}, usuário: ${login}´;
    }
};