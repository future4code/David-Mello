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

//  console.log("Bem vindo ao jogo de BlackJack!");

//  if(confirm("Quer iniciar uma nova rodada?")) {
//    let cartasJogador =  [comprarCarta(), comprarCarta()];
//    let cartasComputador = [comprarCarta(), comprarCarta()];  
//    // Compra as cartas do jogador e do computador
   
//    const pontuacaoJogador = cartasJogador[0].valor + cartasJogador[1].valor;
//    const pontuacaoComputador = cartasComputador[0].valor + cartasComputador[1].valor;
//    //define a pontuação
   
//    console.log(`Usuário - cartas: ${cartasJogador[0].texto} ${cartasJogador[1].texto}  - pontuação ${pontuacaoJogador}`); 
//    console.log(`Computador - cartas: ${cartasComputador[0].texto} ${cartasComputador[1].texto}  - pontuação ${pontuacaoComputador}`);
//    //imprime pontuação e cartas no console

//    if (pontuacaoJogador > pontuacaoComputador) {
//       console.log("O usuário ganhou!");
//    } else if (pontuacaoComputador > pontuacaoJogador) {
//       console.log("O computador ganhou!");
//    } else {
//       console.log("Empate.");
//    } // define e imprime quem ganhou

// } else {
// 	console.log("O jogo acabou.");
// }