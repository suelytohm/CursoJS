// Funções tradicionais

function saudacao(nome){
    return `Bom dia ${nome}!`;;
}


function soma(n1 = 0, n2 = 0){ // Se não enviar um valor, atribui 0 as variáveis
    return n1 + n2;
}

console.log(soma(1, 2));

const variavel = saudacao("Suelytohm");
console.log(variavel);

console.log(saudacao("Suelytohm"));
