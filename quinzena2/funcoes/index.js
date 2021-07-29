// Exercicios de interpretação de codigo
// Exercicio - 1
// A) o console vai imprimir o resultado 10 (de 5*2) e 50 (de 5*10)
// B) Não vai imprimir no console, só vai retornar o valor

// Exercicio - 2
// A) Essa função pede ao usuário escrever um texto, depois ela faz com  que todas as letras fiquem em minuscula e inclue a palavra "cenoura" e imprime no console o texto do usuario com essas alterações
// B) i - na saida no console o texto será em minusculo = eu gosto de cenoura = no final do texto
// ii - na saida no console o texto será assim = cenoura é bom para a vista = em minusculo no final do texto
// iii - na saida do console o texto será assim = cenouras crescem na terra = em minuscula no final do texto

// Exercícios de escrita de código

// Exercício - 1
// A)

function imprimirFrase() {
    console.log("Eu sou Priscila, tenho 25 anos, moro em Jundiaí e sou estudante")
}
   imprimirFrase()

// B)
function imprimirFraseNova() {
    let nome = prompt("qual o seu nome?")
    let idade = Number(prompt("qual a sua idade?"))
    let endereço = prompt("Qual o seu endereço")
    let profissão = prompt("Qual a sua profissão")
    console.log(`Eu sou ${nome}, tenho ${idade} anos, moro em ${endereço} e sou ${profissão}`)
}
   imprimirFraseNova()

   // Exercicio - 2
   // A)
   function calculaValor(ingresso, entrada) {
        const valor = ingresso + entrada
        console.log(valor)
   }

   calculaValor(5, 100)

   // B)
   function calculaIdade(maior, menorNumero) {
       const idade2 = maior >= menorNumero
       console.log(idade2)
   }
   calculaIdade(25, 30)

   // c)

   function parImpar() {
       let numeroi = prompt("Diga um número")
       console.log(numeroi % 2 === 0)
   }
   parImpar()

   // D)

   function mensagem(meuTexto) {
       console.log(`Tamanho do meu texto: ${meuTexto.length}`)
       console.log(meuTexto.toUpperCase())
   }
   mensagem("Eu tenho uma CASA")

   // Exercício - 3
   
   function adicao(args, args2) {
       console.log(args + args2)
   }
   
   function subtracao(args, args2) {
       console.log(args - args2)
   }

   function divisao(args, args2) {
       console.log(args / args2)
   }

   function multiplicacao(args, args2) {
       console.log(args * args2)
   }

   const adicaoNova = Number(prompt("Me de um numero"))
   const adicaoNova2 = Number(prompt("Me de outro numero"))
   adicao(adicaoNova, adicaoNova2)
   subtracao(adicaoNova, adicaoNova2)
   divisao(adicaoNova, adicaoNova2)
   multiplicacao(adicaoNova, adicaoNova2)
