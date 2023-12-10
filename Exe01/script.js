

/*
let n1 = prompt("Digite o primeiro número")
let n2 = prompt("Digite o Segundo Número")

let average = (Number (n1) + Number(n2))

result = average

alert ("A soma dos dois números: " + average)*/


let n1 = prompt ('Digite o primeiro número')
let n2 = prompt ('Digite o Segundo número')

n1 = Number(n1)
n2 = Number(n2)

const sum = n1 + n2 
const sub = n1 - n2
const multi = n1 * n2
const div = n1 / n2
const restDiv = n1 % n2

alert ('A Soma dos dois números: ' + sum)
alert ('Subtração dos dois números: ' + sub)
alert ('Multiplicação dos dois números: ' + multi)
alert ('Divisão dos dois números: ' + div)
alert ('Resto da divisão: ' + restDiv)

let average = (Number(n1) + Number(n2))

result = average

if(average % 2 == 0){
    alert(" A soma dos dois números é PAR")
} if (average % 2 == 1){   
    alert ("A soma dos dois números é impar")
}
 if(Number(n1) == Number(n2)) {
    alert("Os numeros inseridos são iguais")
 } if(Number(n1) != Number(n2)){
    alert("Os numeros inseridos são diferentes")
 }
    

    


