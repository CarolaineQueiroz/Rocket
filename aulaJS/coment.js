//Criar um programa que calcula a média
//das notas entre os alunos e envia
//mensagem de cálculo média
// "" = Duplas, '' = Simples, `` = Template string

const alunosDaTurmaA = [
    {
        nome: "Carol",
        nota: 1.8
    },
    {
        nome: "Erik",
        nota: 10
    },
    {
        nome: "Salamander",
        nota: 3.7
    },
    {
        nome: "Mais um aluno",
        nota: 10
    }
    
]


const alunosDaTurmaB = [
    {
        nome: "Regina",
        nota: 5
    },
    {
        nome: "Jorge",
        nota: 1
    },
    {
        nome: "Lúcio",
        nota: 3.2
    },
    {
        nome: "Caio",
        nota: 2
    }
]


function calculaMedia(alunos) {
    let soma = 0;
    for (let i = 0; i < alunos.length; i++) {
        soma = soma + alunos[i].nota;
    }
    const media = soma / alunos.length;
    return media;
}


const media1 = calculaMedia(alunosDaTurmaA)
const media2 = calculaMedia(alunosDaTurmaB)

function enviaMensagem(media, turma) {
    if (media > 5) {
        console.log(`A média da turma ${turma} foi de ${media}. Parabéns`)
    } else {
        console.log(`A média da turma ${turma} é menor que 5`)
    }
}


enviaMensagem(media1, "Turma A")
enviaMensagem(media2, "Turma B")
