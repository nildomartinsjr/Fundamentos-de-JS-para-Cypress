let produtos = [
    {nome:"Camisa", preco:50},
    {nome:"Calça", preco:70},
    {nome:"Jaqueta", preco:90},
    {nome:"Sapato", preco:100},
    {nome:"Cueca", preco:20},
    {nome:"Meia", preco:10},
]
let produtoMaior = produtos.find(prod => prod.preco > 50)
    console.log(produtoMaior)