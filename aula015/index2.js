function criaPessoa(nome, sobrenome, idade){
    return {
        nome,
        sobrenome,
        idade
    };
}

const pessoa = criaPessoa("Suelytohm", "Oliveira", 26);

console.log(pessoa); // Retorna o JSON completo

console.log(pessoa.nome); // Retorna só o valor
