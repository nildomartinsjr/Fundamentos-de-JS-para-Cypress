let produtos = [
    {nome:"Panelas", preco:70.00},
    {nome:"Microondas", preco:110.00},
    {nome:"AirFry", preco:85.00},
    {nome:"Mixer", preco:30.00},
]
let desconto = produtos.map(pro => ({
    nome: pro.nome,
    precoComDesconto: pro.preco - (pro.preco * 0.10)
}));


console.log(desconto)