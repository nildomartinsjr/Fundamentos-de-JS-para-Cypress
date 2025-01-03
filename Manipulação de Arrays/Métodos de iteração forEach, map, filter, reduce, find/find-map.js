let usuarios = [
    {nome:"Ana", idade:18},
    {nome:"Lucas", idade:25},
    {nome:"Julia", idade:31},
    {nome:"Nice", idade:38},
    {nome:"Pamela", idade:45},
]
let usuMaior = usuarios.find(usu => usu.idade > 30)
console.log(usuMaior)

let usuMaiores = usuarios.filter(usu => usu.idade > 30)
console.log(usuMaiores)

let usuNomes = usuMaiores.map(usu => usu.nome)
console.log(usuNomes)
