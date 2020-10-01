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
   let pontuacaoJogador = 0;
   let pontuacaoComputador = 0;
   let stringCartasJogador = " ";
   let stringCartasComputador = " ";
   let continuarComprando = true;
   // define variaveis globais

console.log("Bem vindo ao jogo de BlackJack!");

 if(confirm("Quer iniciar uma nova rodada?")) {
   let cartasJogador =  [comprarCarta(), comprarCarta()];
   let cartasComputador = [comprarCarta(), comprarCarta()];  
   // Compra as cartas do jogador e do computador


   if (cartasComputador[0].valor === 11 && cartasComputador[1].valor === 11 || cartasJogador[0].valor === 11 && cartasJogador[1].valor === 11) {
      cartasJogador =  [comprarCarta(), comprarCarta()];
      cartasComputador = [comprarCarta(), comprarCarta()];  
   }
   //Compra cartas novamente caso algum jogador tenha tirado 2 ases

   while(pontuacaoJogador < 21 && continuarComprando) {
       //Caso o jogador passe de 21 pontos ele não poderá comprar mais cartas
      
      stringCartasJogador = " ";
      pontuacaoJogador = 0; 
      // limpa as variáveis para não deixar somar valores mais de uma vez

      for (let cartas of cartasJogador) {
         stringCartasJogador += cartas.texto + " ";
      } //agrupa os textos das cartas para colocá-los no confirm 

      if(confirm(`Suas cartas são ${stringCartasJogador}. A carta revelada do computador é ${cartasComputador[0].texto}.` +
         "\n" + "Deseja comprar mais uma carta?", pontuacaoJogador)) {
            cartasJogador.push(comprarCarta());
         } else { continuarComprando = false;} 
      //compra mais cartas para o jogador caso ele queira

      for (let cartas of cartasJogador) {
         pontuacaoJogador += cartas.valor;
      } //define a pontuação

      
   }

   stringCartasJogador = " ";
   for (let cartas of cartasJogador) {
      stringCartasJogador += cartas.texto + " ";
   } //agrupa os textos das cartas novamente para não faltar a ultima carta caso o usuário passe de 21 pontos;

      if (pontuacaoJogador === 21) {
         
         alert(`Suas cartas são ${stringCartasJogador}. Sua pontuação é 21. \n`
            +`As cartas do computador são ${cartasComputador[0].texto} ${cartasComputador[1].texto}.`
            +`A pontuação dele é ${cartasComputador[0].valor + cartasComputador[1].valor} \n`
            +`Você ganhou!!!`);
      
         } else if (pontuacaoJogador > 21) {
            alert(`Suas cartas são ${stringCartasJogador}. Sua pontuação é ${pontuacaoJogador}.\n`  
               + `As cartas do computador são ${cartasComputador[0].texto} ${cartasComputador[1].texto}. A pontuação dele é ${cartasComputador[0].valor + cartasComputador[1].valor}. \n`
               + `O computador ganhou!!!`);

            //Possibilidades de fim de jogo antes do computador precisar comprar mais cartas
      
      } else {
               while(pontuacaoJogador <= 21 && pontuacaoComputador <= pontuacaoJogador) {
                  stringCartasComputador = " ";
                  pontuacaoComputador = 0;
                   // limpa variáveis para não deixar somar valores mais de uma vez

                  for (let cartas of cartasComputador) {
                     stringCartasComputador += cartas.texto + " ";
                     pontuacaoComputador += cartas.valor;
                  }

                  cartasComputador.push(comprarCarta());
                  
      
               } //compra mais cartas para o computador caso necessário

               if (pontuacaoComputador === 21) {
         
                  alert(`Suas cartas são ${stringCartasJogador}. Sua pontuação é ${pontuacaoJogador}. \n`
                     +`As cartas do computador são ${stringCartasComputador}.`
                     + `A pontuação dele é ${pontuacaoComputador} \n` 
                     +`O computador ganhou!!!`);
               
                  } else if (pontuacaoComputador > 21) {
                     
                     alert(`Suas cartas são ${stringCartasJogador}. Sua pontuação é ${pontuacaoJogador}.\n`  
                        +`As cartas do computador são ${stringCartasComputador}.`
                        + `A pontuação dele é ${pontuacaoComputador} \n`
                        + `Você ganhou!!!`);
                  
                  } else if (pontuacaoComputador > pontuacaoJogador) {

                     alert(`Suas cartas são ${stringCartasJogador}. Sua pontuação é ${pontuacaoJogador}. \n`
                        +`As cartas do computador são ${stringCartasComputador}.`
                        +`A pontuação dele é ${pontuacaoComputador} \n`
                        +`O computador ganhou!!!`);

                  } else if (pontuacaoJogador > pontuacaoComputador) {

                     alert(`Suas cartas são ${stringCartasJogador}. Sua pontuação é ${pontuacaoJogador}.\n`  
                        +`As cartas do computador são ${stringCartasComputador}.`
                        + `A pontuação dele é ${pontuacaoComputador} \n`
                        + `Você ganhou!!!`);
                  }
               //Possibilidades de fim de jogo após o computador comprar mais cartas
      }


} else {
	console.log("O jogo acabou.");
}