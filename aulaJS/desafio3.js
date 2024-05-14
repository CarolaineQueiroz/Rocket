const programador = {
    nome: "Josué",
    idade: 45,
    tecnologias: [
        {nome: 'JavaScript', especialidade: 'Web/Mobile' },
        {nome: 'C++', especialidade: 'Desktop' },
        {nome: 'Python', especialidade: 'Data Science' }
    ]
};

console.log(`O usuário ${programador.nome} tem ${programador.idade} anos e usa as tecnolgias ${programador.tecnologias[2].nome} com especialidade em ${programador.tecnologias[2].especialidade}`);