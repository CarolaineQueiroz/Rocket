const usuario = {
    nome: "José",
    empresa: {
        nome: "Nubank",
        cor: "Roxo",
        foco: "Financeiro",
        endereco: {
            rua: "Rua Capote Valente",
            numero: 39
            
        }
    }
};

console.log(`A empresa ${usuario.empresa.nome} está localizada em ${usuario.empresa.endereco.rua}, ${usuario.empresa.endereco.numero}`);
