let produtos = [
    {nome:"Panelas", preco:70.00},
    {nome:"Microondas", preco:110.00},
    {nome:"AirFry", preco:85.00},
    {nome:"Mixer", preco:30.00},
    {nome:"Forno", preco:180.00},

]

let produtoAcima = produtos.find(pro => pro.preco > 100.00)
console.log(produtoAcima)