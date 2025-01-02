let produtos = [
    {nome:"Panelas", preco:70.00},
    {nome:"Microondas", preco:110.00},
    {nome:"AirFry", preco:85.00},
    {nome:"Mixer", preco:30.00},
]

soma = produtos.reduce((acumulador, pro) => acumulador + pro.preco ,0)

console.log(soma)