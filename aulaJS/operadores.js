/* 
> maior que
< menor que
>= maior igual a
<= menor igual a
== igual a
=== igual e do mesmo tipo
!= diferente
!== difrente , inclusive do tipo
&& juntar duas condições 
*/

/*
Desafio 1  
*/

/*
console.log ( 5 > 4) // true
console.log (5 < 4 ) // false
console.log (5 >= 4) // true
console.log (4 <= 4) // true
*/ 

/*
console.log (4 == "4") // true
console.log (4 === "4") // false
console.log (4 != "5") // true
console.log (4 !== "5") // true
*/ 

 
const idade = 18
// Verificar se a pessoa é maior igual a 18 anos
// Se sim, deixar entar, se não, bloauear a entrada
if (!(idade >= 18) ||  idade === 17) {
    console.log("Bloquear entrada");
} else {
    console.log("Deixar entrar")
}



/*
Operadores Lógicos = && "E" As duas condições devem ser verdadeiras para que a condição final seja verdadeira 
|| "OU" Umas das condições deve ser verdadeira para que a condição final seja verdadeira
! "Não" Nega uma condição
*/

/* 
console.log(5 == 5 && 6 ==6) // true
console.log(5 == 5 && 6 != 6) // false

console.log(5 == 5 || 6 ==6) // true
console.log(5 == 5 || 6 != 6) // true

console.log(!(5 > 6)) // true
console.log(!(5 < 6)) // false 
*/

/*
Operadores Aritiméticos
* Multiplicação
/ Divisão
% Resto da divisão
+ adição
- subtração 
*/

console.log(2 * 2) // 4
console.log(2 / 2) // 1
console.log(2 % 1.5) // 0.5
console.log( 2 + 2) // 4
console.log(2 - 2) // 0