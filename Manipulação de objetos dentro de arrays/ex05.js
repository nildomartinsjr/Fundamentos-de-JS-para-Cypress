let pessoas = [ 
    {nome:"Ana", idade: 25}, 
    {nome:"Carlos", idade: 30}, 
    {nome:"Julia", idade: 22} 
];

pessoas.forEach(pessoa => {
    if (pessoa.nome === "Ana") {
        pessoa.profissao = "Médica";
    } else if (pessoa.nome === "Carlos") {
        pessoa.profissao = "QA";
    } else if (pessoa.nome === "Julia") {
        pessoa.profissao = "Arquiteto";
    }
});

console.log(pessoas);
