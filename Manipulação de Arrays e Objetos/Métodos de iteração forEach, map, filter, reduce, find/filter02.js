let produtos = [
    {nome:"Panelas", preco:70.00},
    {nome:"Microondas", preco:110.00},
    {nome:"AirFry", preco:85.00},
    {nome:"Mixer", preco:30.00},
]

let produtosCaros = produtos.filter(pro => pro.preco > 50)
console.log(produtosCaros)