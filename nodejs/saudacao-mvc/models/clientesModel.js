module.exports = {
    verificarLogin: (login, senha) => {
    let acessi;

    if (login === " Valentina" && senha === "12345") {
      acesso = "Logado";

    } else  {
      acesso = "Negado";
    }

    return `Olá, ${login}! Seu acesso foi: ${acesso}.`;
  }
};
