listaDeCompras = []

listaDeCompras.push("arroz", "feijão", "macarrão")
listaDeCompras.unshift("batata", "tomate")

let removidoFinal = listaDeCompras.pop()
let removidoInicio = listaDeCompras.shift()

console.log(`Lista final: ${listaDeCompras}.`)
console.log(`Item removido do final: ${removidoFinal}.`)
console.log(`Item removido do início: ${removidoInicio}.`)