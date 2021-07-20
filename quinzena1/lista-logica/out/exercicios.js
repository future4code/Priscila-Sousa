// Exemplos

// Exercício 0A
function soma() {
  // escreva seu código aqui
  const num1 = prompt('1')
  const num2 = prompt('2')

  console.log(Number(num1) + Number(num2))
}

// Exercício 0B
function imprimeMensagem() {
  // escreva seu código aqui
  const mensagem = prompt('Olá Mundo')

  console.log(mensagem)
}

// ---------------------------------------------------
// Exercícios

// Exercício 1
function calculaAreaRetangulo() {
  // escreva seu código aqui
   
  const altura = prompt('Qual a altura')
  const largura = prompt('Qual a largura')
  const resultado = Number(altura) * Number(largura)
  console.log(resultado)
 }

// Exercício 2
function imprimeIdade() {
  // escreva seu código aqui
  
  const nascimento = prompt('Qual seu ano de nascimento?')
  const anoAtual = prompt('Em que ano estamos?')
  const resultado = Number(nascimento) - Number(anoAtual)
  console.log(resultado)
}

// Exercício 3
function calculaIMC() {
  // escreva seu código aqui
 
  const peso = prompt('Qual o seu peso?')
  const suaAltura = prompt("Qual a sua altura?")
  const resultado = Number(peso) / (Number(suaAltura) * Number(suaAltura))
  console.log(resultado)

}

// Exercício 4
function imprimeInformacoesUsuario() {
  // escreva seu código aqui
  const nome = prompt('Qual o seu nome?')
  const idade = prompt('Qual a sua idade?')
  const email = prompt('Qual o seu email?')
  console.log('Meu nome é' + " " + nome + "," + " " + 'tenho' + " " + idade + " " + "anos, e o meu email é" + " " + email + ".") 

}

// Exercício 5
function imprimeTresCoresFavoritas() {
  // escreva seu código aqui
  const cor1 = prompt('Qual a sua primeira cor favorita?')
  const cor2 = prompt('Qual a sua terceira cor favorita?')
  const cor3 = prompt('Qual a sua terceira cor favorita?')
  console.log([cor1, cor2, cor3])
}


// Exercício 6
function retornaStringEmMaiuscula() {
  // escreva seu código aqui
  const text = prompt("oi","bAnAnA")
  console.log(text.toUpperCase())
  
}

// Exercício 7
function calculaIngressosEspetaculo() {
  // escreva seu código aqui
}

// Exercício 8
function checaStringsMesmoTamanho() {
  // escreva seu código aqui
}

// Exercício 9
function checaIgualdadeDesconsiderandoCase() {
  // escreva seu código aqui
}

// Exercício 10
function checaRenovacaoRG() {
  // escreva seu código aqui
}

// Exercício 11
function checaAnoBissexto() {
  // escreva seu código aqui
}

// Exercício 12
function checaValidadeInscricaoLabenu() {
  // escreva seu código aqui
}