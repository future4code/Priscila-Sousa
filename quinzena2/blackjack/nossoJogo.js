/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */
    console.log("Bem vindo ao BlackJack!")
    console.log(comprarCarta())
    let start = confirm("Vamos começar uma nova rodada?");
    console.log((start))
    if (start == true) {
       startGame();
    }else{
       console.log("O jogo acabou! Uma pena, quem sabe na próxima. :(");
    }
    
     function startGame(){
        let player1Carta1 = comprarCarta();
        let player1Carta2 = comprarCarta(); 
        console.log("Suas cartas são:  " + player1Carta1.texto, player1Carta2.texto)
        let player2Carta1 = comprarCarta();
        let player2Carta2 = comprarCarta();  
        console.log("As cartas do oponente são:  " + player2Carta1.texto, player2Carta2.texto)
         
    
        let resultado1 = player1Carta1.valor + player1Carta2.valor
        let resultado2 = player2Carta1.valor + player2Carta2.valor
        console.log("Usuário - cartas: " + player1Carta1.texto + " " + player1Carta2.texto + " -  " + resultado1)
        console.log("Computador - cartas: " + player2Carta1.texto + " " + player2Carta2.texto + " -  " + resultado2)
        if (resultado1 > resultado2) {
          console.log("O usuário ganhou.")
          console.log("Parabéns, você ganhou com um total de:  " + resultado1 + "  pontos.")
        }else if(resultado1 < resultado2){
          console.log("O computador ganhou.")
          console.log("Poxa, seu oponente ganhou com um total de:  " + resultado2 + "  pontos.")
       }else {
          console.log("Houve empate.")
          console.log("Vocês empataram, pois a pontuação de ambos foi: " + resultado1)
       }
    }
    