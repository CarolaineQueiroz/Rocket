const nome = "Silvana";
const sexo = "F";
const idade = 48;
const contribuicao = 23;

const calcularContribuicao = idade + contribuicao

const homemAposento = sexo == "M" && contribuicao >= 35 && calcularContribuicao >= 95
const mulherAposento = sexo == "F" && contribuicao >= 30 && calcularContribuicao >= 85

if (homemAposento || mulherAposento) {
    console.log(`${nome}, Aposenta`)
} else {
    console.log(`${nome}, Não aposenta`)
}