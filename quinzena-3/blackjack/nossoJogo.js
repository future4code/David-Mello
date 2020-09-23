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

 console.log("Bem vindo ao jogo de BlackJack!");

 if(confirm("Quer iniciar uma nova rodada?")) {
   const cartaJogador1 = comprarCarta(); 
   const cartaJogador2 = comprarCarta();
   const cartaComputador1 = comprarCarta();  
   const cartaComputador2 = comprarCarta();
   // Compra as cartas do jogador e do computador
   
   const pontuacaoJogador = cartaJogador1.valor + cartaJogador2.valor;
   const pontuacaoComputador = cartaComputador1.valor + cartaComputador2.valor;
   //define a pontuação
   
   console.log(`Usuário - cartas: ${cartaJogador1.texto} ${cartaJogador2.texto}  - pontuação ${pontuacaoJogador}`); 
   console.log(`Computador - cartas: ${cartaComputador1.texto} ${cartaComputador2.texto}  - pontuação ${pontuacaoComputador}`);
   //imprime pontuação e cartas no console

   if (pontuacaoJogador > pontuacaoComputador) {
      console.log("O usuário ganhou!");
   } else if (pontuacaoComputador > pontuacaoJogador) {
      console.log("O computador ganhou!");
   } else {
      console.log("Empate.");
   } // define e imprime quem ganhou

} else {
	console.log("O jogo acabou.");
}