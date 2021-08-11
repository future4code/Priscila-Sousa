// Exercicio de interpretação de código
// 1- a) será impresso separadamente o nome e apelido da pessoa, mas cada um em um array separado

// 2- a) vai imprimir apenas o nome em um array, pois tem o return item.nome

// 3- a) vai imprimir todo nome e apelido que não seja Chijo

// Exercícios de escrita de código
// 1-

const pets = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},
 ]

 const nomePets = pets.map((item, index, array) => {
     return item.nome
 })
console.log(nomePets)

// b)

const nomePetsRaca = pets.filter((item, index, array) => {
    return item.raca === "Salsicha"
})
console.log(nomePetsRaca)

// c)

const descontoPets = pets
.filter(item => item.raca === "Poodle")
.map(item => console.log(`Você ganhou um cupom de desconto de 10% para tosar o/a ${item.nome} `))

// Exercício 2- a)

const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
 ]

 const nomeProdutos = produtos.map((item) => {
    return item.nome
})
console.log(nomeProdutos)

// b)

const nomeProdutos = produtos.map(item => {
    return item.nome.preco - Number((item.preco * 5) / 100)
})
console.log(nomeProdutos)

// c)

const nomeProdutos = produtos.filter((item, index, array) => {
    return item.categoria === "Bebidas"
})
console.log(nomeProdutos)

// d)

const nomeProdutos = produtos
.filter(item => item.nome === "Ype")
.map(item => console.log(nomeProdutos))


