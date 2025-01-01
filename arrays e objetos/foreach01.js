const usuarios = ["Ana", "Bruno", "Carla", "Da", "Enzo", "Fernanda", "Gu"]

usuarios.forEach(usuario => {
    if(usuario.length > 3) {
        console.log(`${usuario} - Nome válido.`)
    }else {
        console.log(`${usuario} - Nome inválido.`)
    }
})