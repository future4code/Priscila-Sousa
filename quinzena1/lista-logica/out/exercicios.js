// Exemplos

// Exercício 0A
function soma() {
  // escreva seu código aqui
  const num1 = prompt('Digite o primeiro número')
  const num2 = prompt('Digite o segundo número')

  console.log(Number(num1) + Number(num2))
}

// Exercício 0B
function imprimeMensagem() {
  // escreva seu código aqui
  const mensagem = prompt('Digite sua mensagem')

  console.log(mensagem)
}

// ---------------------------------------------------
// Exercícios

// Exercício 1
function calculaAreaRetangulo() {
  // escreva seu código aqui
  const area1 = prompt('Qual a largura do retandulo?')
  const area2 = prompt('Qual a altura do retangulo?')

  console.log(Number(area1) * Number(area2))
}

// Exercício 2
function imprimeIdade() {
  // escreva seu código aqui
  const ano1 = prompt('Qual ano você nasceu?')
  const ano2 = prompt('Qual ano estamos?')
  console.log(Number(ano1) - (ano2))
}

// Exercício 3
function calculaIMC() {
  // escreva seu código aqui
  const peso = prompt('Qual o seu peso?')
  const altura = prompt('Qual a sua altura?')
  console.log(Number (peso) / (altura * altura))
}

// Exercício 4
function imprimeInformacoesUsuario() {
  // escreva seu código aqui
  const nome = prompt('Qual o seu nome?')
  const idade = prompt('Qual a sua idade?')
  const email = prompt('Qual os eu e-mail?')
  console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)
  //console.log('Meu nome é ' + nome + ', tenho ' + idade + ' anos, e o meu email é ' + email + '.')
}

// Exercício 5
function imprimeTresCoresFavoritas() {
  // escreva seu código aqui
  const cor1 = prompt('Qual sua primeira cor favorita?')
  const cor2 = prompt('Qual sua segunda cor favorita?')
  const cor3 = prompt('Qual sua terceira cor favorita?')
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
  const espetaculo = prompt('Qual o valor do evento?')
  const ingresso = prompt('Qual o valor do ingresso?')
  console.log(Number(espetaculo / ingresso))
}

// Exercício 8
function checaStringsMesmoTamanho() {
  // escreva seu código aqui
  const frase1 = prompt('Me diga uma palavra')
  const frase2 = prompt('me diga mais uma palavra')
  frase1.length
  frase2.length
  console.log(frase1.length === frase2.length)
}

// Exercício 9
function checaIgualdadeDesconsiderandoCase() {
  // escreva seu código aqui
  const frase = prompt('fale uma palavra')
  const frase2 = prompt('Fale uma palavra diferente')
  console.log(frase.toUpperCase() === frase2.toUpperCase())
}

// Exercício 10
function checaRenovacaoRG() {
  // escreva seu código aqui
  const anoAtual = Number(prompt('Em que ano estamos?'))
  const anoNascimento = Number(prompt('Diga o seu ano de nascimento'))
  const anoCarteira = Number(prompt('Em que ano sua carteira foi emitida'))
  let renovacao20Anos = anoAtual - anoNascimento <= 20 && anoAtual - anoCarteira >= 5
  let renovacao50Anos = anoAtual - anoNascimento > 20 && anoAtual - anoNascimento <= 50 && anoAtual - anoCarteira >= 10
  let renovacao50MaisAnos = anoAtual - anoNascimento > 50 && anoAtual - anoCarteira >= 15
  let criterios = renovacao20Anos || renovacao50Anos || renovacao50MaisAnos
  console.log(criterios)
}

// Exercício 11
function checaAnoBissexto() {
  // escreva seu código aqui
  const ano = prompt('Em que ano estamos?')
  console.log((ano % 4 == 0) && ((ano % 100 != 0) || (ano % 400 == 0)))
}

// Exercício 12
function checaValidadeInscricaoLabenu() {
  // escreva seu código aqui
  const qualSuaIdade = prompt('Qual a sua idade?')
  const graduacao = prompt('Qual sua graduação?')
  const disponibilidade = prompt('Qual a sua disponibilidade?')
  console.log(qualSuaIdade.toLowerCase() === "sim" && graduacao.toLocaleLowerCase() === "sim" && disponibilidade.toLowerCase() === "sim" )
}