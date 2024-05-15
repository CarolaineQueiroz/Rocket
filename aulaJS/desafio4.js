const usuarios = [
    {
        nome: "Jorge", tecnologias: ["HTML, CSS"],
    },
    {
        nome: "Claudete", tecnologias: ["Python", "HTML"],
    },
    {
        nome: "Maria", tecnologias: ["Nodejs", "CSS"]
    }
]

for (let usuario of usuarios) {
    console.log(`${usuario.nome} trabalha com ${usuario.tecnologias.join(',')}`)
}

function checaSeUsuarioUsaCSS(usuario) {
    for (let tecnolgia of usuario.tecnologias) {
        if (tecnolgia == 'CSS') return true
    }

    return false
}

for (let i = 0; i < usuarios.length; i++) {
    const usuarioTrabalhaComCSS = checaSeUsuarioUsaCSS(usuarios[i]);
  
    if (usuarioTrabalhaComCSS) {
      console.log(`O usuário ${usuarios[i].nome} trabalha com CSS`);
    }
  }