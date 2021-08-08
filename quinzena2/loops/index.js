// Exercícios de interpretação de código
// 1-)O codigo esta fazendo um looping e calculando o valor de "i" até chegar ao número 5
// no console ele vai imprimir 1, 2, 3, 4, e 5

// 2-) a) vai ser impresso todos os número a cima de 18 que estiver no array
// b) Não o ideia seria usar .push

// 3-) O console vai imprimir 4 filheiras de * ex:
// *
// **
// ***
// ****
// O codigo só para de imprimir quando uma filheira chegar a 4 * nela

// Exercícios de escrita de código
// 1-) a)
const quantidadeBichinhos = Number(prompt("Quantos bichinhos de estimação você tem?"))
if(quantidadeBichinhos > 0) {
    const nomes = []
    for(let i = 0; i < quantidadeBichinhos; i++) {
        nomes.push(prompt("Diga o nome dos seus bichinhos"))
    } 
console.log(nomes)
} else { 
    console.log("Que pena! Você pode adotar um pet!")
}

// 2-) a) b) C) d)

// Este array será usado para exemplificar as respostas de todos os itens
const array = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]

// a)

for(let lista of array) {
    console.log(lista)
}

// b)

for(let lista of array) {
    console.log(lista / 10) 
}

// c)

let novoArray = []
for(let lista of array) {
    if(lista % 2 === 0){
        novoArray.push(lista)
    }
 } 
 console.log(novoArray) 

// d)



let respostaElemento = "O elemento do index";

console.log(`${s} ${index} é ${variavel}`);



