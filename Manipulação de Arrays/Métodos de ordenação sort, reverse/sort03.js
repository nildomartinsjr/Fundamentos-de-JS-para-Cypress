let palavras = ["banana", "figo", "abacaxi", "uva", "laranja"];
// Ordene as palavras pelo número de caracteres

palavras.sort((palavra1, palavra2) => palavra1.length - palavra2.length)

console.log(palavras)