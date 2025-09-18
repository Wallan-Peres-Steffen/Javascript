import(somar, subtrair, multiplicar, dividir) from './funcoes_matematicas.js';
import * as calculadoraidade from './calculadora_idade.js';

const calculadoraidade = require('./calculadora_idade');
const { somar } = require('./funcoes_matematicas');



console.log(`Resultado da soma: ${funcoes_matematica.somar(1, 1)}`);

console.log(`Resultado da subtração: ${funcoes_matematica.subtrair(8, 4)}`);

console.log(`Resultado da multiplicação: ${funcoes_matematica.multiplicar(2, 3)}`);

console.log(`Resultado da divisão: ${funcoes_matematica.dividir(32, 4)}`);



console.log(calculadoraidade.idade('Sophia', 2010, 2025));
