let cores = ["vermelho", "azul", "verde", "amarelo", "roxo"];

// Remover o elemento no índice 2
let cores1 = cores.splice(2, 1); 
console.log(cores); // ["vermelho", "azul", "amarelo", "roxo"]

// Inserir elementos no índice 5
let cores2 = cores.splice(5, 0, "preto", "branco");
console.log(cores); // ["vermelho", "azul", "amarelo", "roxo", "preto", "branco"]

// Substituir o elemento no índice 2
let cores3 = cores.splice(2, 1, "laranja");
console.log(cores); // ["vermelho", "azul", "laranja", "roxo", "preto", "branco"]

