// Exercícios de interpretação de código
// 1 - a) será impresso no console = "Matheus Nachtergaele", "Virginia Cavandish"; Canal: "Globo", horario: "14h"

// 2 -a) "Jubo", 3, SRD
// b)  ela usa a estrutura por ex o ...cachorro, usa a estrutura do "cachorro" sem modificar ela toda e modifica apenas um ou mais onbejos que você coloque como na letra a) trocou o nome por "Juba"

// 3 - a) false e undefined
// b) a function não tem nenhuma ligação com o objeto, e o console.log esta imprimindo o backender, o console.log n consegue imprimir a altura porque ela não está escrita no objeto "pessoa"

// Exercício de escrita de código
// 1 - a)  e b)

const pessoa = {
    nome: "Priscila",
    apelidos: ["pri", "prica", "Prysca"]
}
console.log(`Eu sou a ${pessoa.nome}, mas pode me chamar de: ${pessoa.apelidos[0]}, ${pessoa.apelidos[1]} ou ${pessoa.apelidos[2]}`)

function adcionarNovoApelido(pessoa) {
    const adcionarNovo = {
        ...pessoa,
        apelidos: ["prih", "pro", "pris" ]
    }
    return adcionarNovo
}
const resposta = adcionarNovoApelido(pessoa)
console.log(`Eu sou a ${pessoa.nome}, mas pode me chamar de: ${resposta.apelidos[0]}, ${resposta.apelidos[1]} ou ${resposta.apelidos[2]}`)

// 2 - a) e b)

const ficha1 = {
    nome: "Marco",
    idade: 40,
    profissão: "Advogado"
}

const ficha2 = {
    nome: "Livia",
    idade: 55,
    profissão: "Escritora",
};

const imprimeArray = (ficha1, ficha2) => [
    ficha1.nome,
    ficha1.nome.length,
    ficha1.idade,
    ficha1.profissao,
    ficha1.profissao,length,
    ficha2.nome,
    ficha2.nome.length,
    ficha2.idade,
    ficha2.profissao,
    ficha2.profissao,length,
];
console.log(imprimeArray(ficha1, ficha2))

// 3- 

const carrinho = []
const frutas1 = {
    nome: "morango",
    diponibilidade: true,
}
const frutas2 = {
    nome: "abacaxi",
    disponibilidade: true,
}
const frutas3 = {
    nome: "pêra",
    disponibilidade: true,
}

function minhaFruta(frutas1, frutas2, frutas3) {
    carrinho.push(frutas1, frutas2, frutas3)
    return carrinho
}
const carrinhoOk = minhaFruta(frutas1, frutas2, frutas3)
console.log(carrinhoOk)
