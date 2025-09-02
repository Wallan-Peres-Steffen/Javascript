const funcoes_matematica = require('./funcoes_matematicas');

const calculadoraidade = require('./calculadora_idade');



console.log(`Resultado da soma: ${funcoes_matematica.somar(1, 1)}`);

console.log(`Resultado da subtração: ${funcoes_matematica.subtrair(8, 4)}`);

console.log(`Resultado da multiplicação: ${funcoes_matematica.multiplicar(2, 3)}`);

console.log(`Resultado da divisão: ${funcoes_matematica.dividir(32, 4)}`);



console.log(calculadoraidade.idade('Sophia', 2010, 2025));
