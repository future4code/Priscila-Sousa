// Exercícios de interpretação de código

// exercíco 1 -

// a) Undefined
// b) null
// c) 11
// d) 3
// e) 11 [3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13]
// f) 9

// exercício 2 -

// A frase que o usuario escrever será impressa no console em maiusculo, com a quantidade de letras e trocando o A pelo I

// Exercícios de escrita de código

// Exercício 1

const frase = prompt("Digite o seu e-mail")
const frase2 = prompt("Diga o seu nome")
const fraseNova = `O e-mail,  ${frase} foi cadastrado com sucesso. Seja bem-vinda(o), ${frase2} !`
console.log(fraseNova)

// Exercício 2

// a) lista de comidas

//const listaDeComidas = ["Lasanha", "pizza", "sushi", "Hot-Dog", "Marmitex"]
//console.log(listaDeComidas)

// b) comidas favoritas

const listaFavoritos = prompt("Essas são minhas comidas preferidas")
const lista1 = ["Lasanha"]
const lista2 = ["pizza"] 
const lista3 = ["sushi"] 
const lista4 = ["Hot-Dog"] 
const lista5 = ["Marmitex"]
console.log(lista1)
console.log(lista2)
console.log(lista3)
console.log(lista4)
console.log(lista5)

// c) trocar

const pergunta = prompt("Qual a sua comida favorita?")
const listaDeComidas = "Lasanha, pizza, sushi, Hot-Dog, Marmitex"
const novaLista = pergunta.replaceALL("pizza")
console.log(novaLista)

// Exercicio 3

const listaDeTarefas = ["lavar", "secar", "limpar"]
const pergunte = prompt("1 tarefa que você faz no dia")
const pergunte2 = prompt("mais uma tarefa")
const pergunte3 = prompt("ultima tarefa")
pergunte.push("lavar")
pergunte2.push("secar")
pergunte3.push("limpar")
console.log(pergunte)
console.log(pergunte2)
console.log(pergunte3)
console.log(listaDeTarefas)
const realizado = prompt("Qual tarefa ja realizou? de 0 a 2")
listaDeTarefas.splice(1, 0)
console.log(listaDeTarefas)








