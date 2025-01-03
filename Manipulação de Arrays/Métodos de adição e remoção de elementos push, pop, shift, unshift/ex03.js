let pilhaDeLivros = ["Harry Potter", "Senhor dos Anéis", "Game of Thrones"]

pilhaDeLivros.push("Percy Jackson")
pilhaDeLivros.unshift("O Hobbit")

let ultimoRemovido = pilhaDeLivros.pop()

console.log(`Estado final da pilha: ${pilhaDeLivros}.`)
console.log(`Último livro removido: ${ultimoRemovido}.`)