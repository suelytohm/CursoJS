/**
 * Suelytohm Oliveira tem 26 anos, pesa 76.5 kg
 * tem 1.78 de altura e seu IMC é de 24,14
 * Suelytohm Oliveira nasceu em 1994
 */

const nome = "Suelytohm";
const sobrenome = "Oliveira";
const idade = 26;
const peso = 76.5;
let altura = 1.78;
let imc = peso / (altura * altura);
let anoAtual = new Date().getFullYear();

const anoNascimento = anoAtual - idade;


console.log(nome, sobrenome, 'tem', idade,'anos, pesa', peso, 'kg.');
console.log('Tem', altura,'de altura e seu IMC é de', imc);
console.log(nome, 'nasceu em', anoNascimento);