//atividade 1 
//let a = 10
//let b = 10

//console.log(b)

//b = 5
//console.log(a, b)
// no console apareceu 10 e em baixo 5, pois a é igual a 10 e b foi alterado para 5

// atividade 2
//let a = 10
//let b = 20
//let c
//c = a
//b = c
//a = b

// atividade 3
//console.log(a, b, c)
// no console apareceu erro, pórem o c imprime 10 no console pois o c é igual a
//o b imprime 10 e o a imprime 20 pois a é igual a b e b imprime 20.

let p = prompt("Quantas horas você vai trabalhar por dia?")
let t = prompt("Quanto você recebe por dia?")
alert('Você recebe ${t/p} por hora')
// esse codigo calcula quanto eu recebo por hora, vai perguntar e calcular automaticamente

// atividades de codigo

//atividade 1

let nome
let idade

typeof nome
typeof idade
// foi impresso porque preciso do typeof para fazer a pergunta aparecer no site
nome = prompt("Qual o seu nome?")
idade = prompt("Qual a sua idade?")

//atividade 2

let signo = "O seu signo é Leâo?"
let casa = "sua casa é azul?"
let rua = "sua rua é sem saida?"

typeof casa
typeof signo
typeof rua

signo = prompt("O seu signo é Leão?")
casa = prompt("sua casa é azul?")
rua = prompt("sua rua é sem saida?")

console.log(signo, casa, rua)

// atividade 3

let a = 10
let b = 25
let c = 0

c = a
a = b
b = c

console.log("O novo a agora é", a)// o valor de a é 25
console.log("O novo b agora é", b)// o valor de b é 10
