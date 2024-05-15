const usuarios = [
    {
        nome: "Roberto",
        receitas: [110.3, 50.7, 95.3, 15.5],
        despesas: [300.00, 130.00, 98.5],
    },
    {
        nome: "Joao",
        receitas: [220.0, 50.0, 39.5],
        despesas: [45.3, 10.0, 115.0]
    },
    { 
        nome: "Julia",
        receitas: [9.5, 35.00, 340.2, 45.3],
        despesas: [400.3, 33.5]
    }
]

function calculateBalance(receitas, despesas) {
    const somarReceitas = somarNumeros(receitas)
    const somarDespesas = somarNumeros(despesas)

    return somarReceitas - somarDespesas
}

function somarNumeros(numeros) {
    let soma = 0

    for(let numero of numeros) {
        soma = soma + numero
    }
    
    return soma
}

for (let usuario of usuarios) {
    const saldo = calculateBalance(usuario.receitas, usuario.despesas)

    if (saldo > 0) {
        console.log(`${usuario.nome} possui saldo POSITIVO de ${saldo.toFixed(2)}`)
    }else {
        console.log(`${usuario.nome} possui um saldo NEGATIVO de ${saldo.toFixed(2)}`)
    }
}

console.table(usuarios)