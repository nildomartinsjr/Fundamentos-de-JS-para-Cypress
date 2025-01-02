let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let numerosPares = numeros.filter(num => num % 2 === 0); // Filtra números pares
let numerosQua = numerosPares.map(num => num ** 2);      // Eleva ao quadrado os pares
let soma = numerosQua.reduce((acumulador, numero) => acumulador + numero, 0); // Soma os quadrados

console.log(soma); // Exibe o resultado final
