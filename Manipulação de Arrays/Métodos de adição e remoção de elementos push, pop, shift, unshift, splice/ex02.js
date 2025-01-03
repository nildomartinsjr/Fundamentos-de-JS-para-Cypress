let fila = ["Ana", "Pedro", "João"]

fila.push("Clara")
fila.unshift("Lucas")

let atendida = fila.shift()
console.log(`Já atendido: ${atendida}.`)
console.log(`Lista de espera: ${fila}.`)