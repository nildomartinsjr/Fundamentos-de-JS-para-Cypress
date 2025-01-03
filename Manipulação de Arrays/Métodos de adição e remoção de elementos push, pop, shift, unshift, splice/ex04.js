let agenda =  ["Dentista", "Reunião", "Academia"]

agenda.unshift("Consulta Médica")
agenda.push("Curso online")

let remove = agenda.shift()
let remove1 = agenda.pop()

console.log(`Meus compromissos: ${agenda}.`)
console.log(`Compromisso removido do início: ${remove}.`)
console.log(`Compromisso removido do final: ${remove1}.`)