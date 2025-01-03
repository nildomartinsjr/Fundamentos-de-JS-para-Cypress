let usuarios = ["Julia!", "Marta", "Helena@", "Helio", "Tulio#", "Dario$"]
let proibidos = ["!","@","#","$"]

usuarios.forEach(nome => {
    proibidos.forEach(caracter => {
        if(nome.includes(caracter)){
            console.log(`${nome} contém o caractere proibido: ${caracter}`)
        }
    });
});