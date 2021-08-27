// EXERCÍCIO 01
function inverteArray(array) {
  let novoArray = []
  for(let i = array.length - 1; i >= 0; i--){
    novoArray.push(array[i])
  }
return novoArray
}

// EXERCÍCIO 02
function retornaNumerosParesElevadosADois(array) {
  let arrayVazio = []
  for(let i = 0; i < array.length; i++){
    if(array[i] % 2 == 0){
    arrayVazio.push(array[i] ** 2)
    }
  }
  return arrayVazio
}

// EXERCÍCIO 03
function retornaNumerosPares(array) {
  let arrayNovo = []
  for(let i = 0; i < array.length; i++){
    if(array[i] % 2 === 0){
    arrayNovo.push(array[i])
    }
  }
  return arrayNovo
}

// EXERCÍCIO 04
function retornaMaiorNumero(array) {
//   let maiorNumero = array[0]

//     for(let c = 0; c < array.length; c++){
//         if(array[c] > maiorNumero){
//             maiorNumero = array[c]
//         }
//     }
//     return maiorNumero
//   }

  let arrayNumeroMaior = array[0]

  for(let i = 0; i < array.length; i++){
    if(array[i] > arrayNumeroMaior){
      arrayNumeroMaior = array[i]
    }
   }
   return arrayNumeroMaior
}

// EXERCÍCIO 05
function retornaQuantidadeElementos(array) {
  const tamanhoArray = array.length
  return tamanhoArray
}

// EXERCÍCIO 06
function retornaExpressoesBooleanas() {
  return [false, false, true, true, true]

}

// EXERCÍCIO 07
function retornaNNumerosPares(n) {
  let nRetorna = []
  for(let i = 0; nRetorna.length < n; i++){
    if(i % 2 === 0){
    nRetorna.push(i)
    }
   }
   console.log(n)
   return nRetorna
}

// EXERCÍCIO 08
function checaTriangulo(a, b, c) {
if(a !== b && b !== c){
  return 'Escaleno'
} else if(a === b && b !== c) {
  return 'Isósceles'
} else {
  return 'Equilátero'
}

  // return 'Escaleno'
  // return 'Equilátero'
  // return 'Isósceles'
}

// EXERCÍCIO 09
function comparaDoisNumeros(num1, num2) {
  return {
    maiorNumero: (num1 > num2) ? num1 : num2,
    maiorDivisivelPorMenor: num2 % num1 === 0,
    diferenca: (num1 > num2) ? num1 - num2 : num2 - num1,
}
  // Formato do objeto a ser retornado:
  // {
  //   maiorNumero: X,
  //   maiorDivisivelPorMenor: Y,
  //   diferenca: Z
  // }
}

// EXERCÍCIO 10
function segundoMaiorEMenor(array) {
  let arrayNovo = []
  arrayNovo.push(
    array.sort((a,b)=> a-b)[array.length -2]
  ) 
  arrayNovo.push(
    array.sort((a,b)=> a-b)[1] 
  )
  console.log(arrayNovo)
  return arrayNovo
}

// EXERCÍCIO 11
function ordenaArray(array) {
  return array.sort((a,b)=> a-b)
}

// EXERCÍCIO 12
function filmeFavorito() {
  const filme = {
    nome: "O Diabo Veste Prada",
    ano: 2006,
    diretor: "David Frankel",
    atores: ["Meryl Streep", "Anne Hathaway", "Emily Blunt", "Stanley Tucci"]
  }
 return filme
}

// EXERCÍCIO 13
function imprimeChamada() {
  const filme = {
    nome: "O Diabo Veste Prada",
    ano: 2006,
    diretor: "David Frankel",
    atores: ["Meryl Streep", "Anne Hathaway", "Emily Blunt", "Stanley Tucci"],
  }
 return `Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${filme.atores[0]}, ${filme.atores[1]}, ${filme.atores[2]}, ${filme.atores[3]}.`
}
// EXERCÍCIO 14
function criaRetangulo(lado1, lado2) {
  const retangulo = {
    largura: lado1,
    altura: lado2,
    perimetro: 2 * (lado1 + lado2),
    area: lado1 * lado2,
  }
  return retangulo
}

// EXERCÍCIO 15
function anonimizaPessoa(pessoa) {
  const pessoaNova = {
    ...pessoa,
    nome: "ANÔNIMO",
  }
  return pessoaNova
}

// não consegui realizar os desafios do projeto, infelizmente pelo tempo e trabalho ão consegui fazer mas complemento depois

// EXERCÍCIO 16A
function maioresDe18(arrayDePessoas) {

}

// EXERCÍCIO 16B
function menoresDe18(arrayDePessoas) {

}

// EXERCÍCIO 17A
function multiplicaArrayPor2(array) {

}

// EXERCÍCIO 17B
function multiplicaArrayPor2S(array) {

}

// EXERCÍCIO 17C
function verificaParidade(array) {

}

// EXERCÍCIO 18A
function retornaPessoasAutorizadas(pessoas) {

}

// EXERCÍCIO 18B
function retornaPessoasNaoAutorizadas(pessoas) {

}

// EXERCÍCIO 19A
function ordenaPorNome(consultasNome) {

}

// EXERCÍCIO 19B
function ordenaPorData(consultasData) {

}

// EXERCÍCIO 20
function calculaSaldo(contas) {

}
