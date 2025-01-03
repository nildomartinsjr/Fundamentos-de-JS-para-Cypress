let pessoas = [
    { nome: "Ana", idade: 26 },
    { nome: "Carlos", idade: 30 },
    { nome: "Julia", idade: 22 }
];

let procura = pessoas.find(pessoa => pessoa.nome === "Julia")

console.log(procura)


