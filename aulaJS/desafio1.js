const nome =  "Carol";
const peso = 62;
const altura = 1.57
const sexo = "F";

const imc = peso / (altura * altura)


if (imc >= 30) {
    console.log (`${nome} Você está acima do peso`)
} else {
    console.log (`${nome} Você não está acima do peso`)
}