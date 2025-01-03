let numeros = [20, 5, 60, 30, 10];
// Ordene os números em ordem crescente e depois inverta a ordem
let numerosOrd = numeros.sort((a,b) => a - b)

numerosOrd.reverse()

console.log(numerosOrd)