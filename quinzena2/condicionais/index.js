// Exercicios de interpretação de codigo
// 1 - a) o código está pedindo para realizar uma divisão e caso tenha uma sobra que não seja 0 sairá como false, mas se for o resto da divisão igual a 0 será true
// b) todos os números que sejam  completos dividios por dois, por ex. "2, 4, 6, 8, 10, 12, 14, 16 e etc"
// c) todos os números que não sejam completos, que quando for dividido por 2, terá uma quebra ou sobre por ex. "3, 5, 7, 9, 11, 13, 15 etc"

// Exercicio 2- a) O código existe para passar o valor do produto escolhido pelo usuário
// b) será impressa "O preço da fruta, Maçã é R$ 2,25"
// c) será impresso "O preço da fruta, Pêra é R$ 5,5 5"

// Exercicio 3 - a) Está criando uma caixa de dialogo para o usúario colocar um numero
// b) Se o usuário digitou 10 sairá "Esse número passou no teste". se digitalr -10 não aparecerá nenhuma mensagem
// c) Sim, qualquer número a baixo de 0 como um número negativo não será validado. Pois o ideal seria utilizar if/else para caso fosse -10, não tem nenhuma variação no codigo que mostre a mensagem secreta.

// Exercícios de escrita de código
// Exercício 1 - a), b) e c)

const idadeUsuario = Number(prompt("Qual a sua idade?"))

if (idadeUsuario >= 18) {
    console.log("Você pode dirigir")
} else { 
    console.log("Você não pode dirigir")
    }
const resposta = Number(idadeUsuario)

// Exercício 2 -

const periodoAluno = prompt("Informe com siglas, 'M, V e N' se você está no periodo, maturino, vespertino ou noturno")
const periodo = periodoAluno
if (periodo === "M") {
    console.log("Bom Dia!")    
} else if (periodo === "V") {
    console.log("Boa Tarde!")
} else if (periodo === "N") {
    console.log("Boa Noite!")
} else {
    console.log("Digite uma letra valida")
}

// Exercicio 3 -

const periodoAluno = prompt("Informe com siglas, 'M, V e N' se você está no periodo, maturino, vespertino ou noturno")
const periodo = periodoAluno

switch (periodo) {
    case "M":
      console.log("Bom Dia!")
     break
    case "V":
      console.log("Boa Tarde!")
     break
    case "N":
      console.log("Boa Noite!")
      break
      default:
     console.log("Digite uma letra valida")
}

// Exercicio 4 -

const genero = prompt("Qual o genero de filme deseja assistir?")
const valor = Number(prompt("Qual preço deseja pagar?"))
function filmePerfeito(genero, valor) {
if (valor <= 15 && genero === "fantasia") {
console.log("Bom filme!")
} 
else {
console.log("Escolha outro filme")
console.log("fantasia", genero)
console.log("15", valor)
}
}
filmePerfeito(genero, valor)