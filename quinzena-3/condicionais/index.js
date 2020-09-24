// console.log("Oie, eu só sirvo pra saber se as coisas funcionaram!");
// Exercícios de interpretação 
// EX 01:
// O código testa se o numero dado é par ou impar, se par ele mostra no console "Passou no teste",
// se impar "Não passou no teste".

// EX 02:
// a. O código serve para mostrar o preço da fruta escolhida pelo usuário.
// b. "O preço da fruta Maçã é R$ 2.25 ".
// c. O código imprime o preço definido em "default".

// EX O3
// a. A primeira linha pede que o usuário digite um número, transforma a string digitada em número
//  e armazena na variável "numero".
// b. 10 - "Esse número passou no teste", -10 - não há mensagem.
// c. Sim, a variável "mensagem" é declarada dentro do bloco if, ficando fora do escopo onde o console.log a solicita.

// Exercícios de escrita 
// EX O4

// let userIdade = Number(prompt("Qual é a sua idade?"));

// if (userIdade >= 18) {
    // console.log("Você pode dirigir");
// } else {
    // console.log("Você não pode dirigir");
// }

// EX 05

// let periodo = prompt("Em qual turno você estuda?");

// if (periodo === "M") {
    // console.log("Bom Dia!");
// } else if (periodo === "V") {
    // console.log("Boa Tarde!");
// } else if (periodo === "N") {
    // console.log("Boa Noite!");
// } else {
    // console.log("Por favor, digite um período válido");
// }

// EX 06 

// let periodo = prompt("Em qual turno você estuda?");

// switch (periodo) {
    // case "M":
        // console.log("Bom Dia!");
    // break;
    // case "V": 
        // console.log("Boa Tarde!");
    // break;
    // case "N": 
        // console.log("Boa Noite!");
    // break;
    // default:
        // console.log("Por favor, digite um período válido");
// }

// EX 07

// let genero = prompt("Qual o gênero do filme?");
// let preco = Number(prompt("Qual é o preço do ingresso em R$?"));

// if (genero === "fantasia" && preco < 15) {
    // console.log("Bom filme!")
// } else {
    // console.log("Escolha outro filme :(");
// }

// Desafios 
// 01

// let genero = prompt("Qual o gênero do filme?");
// let preco = Number(prompt("Qual é o preço do ingresso em R$?"));

//  if (genero === "fantasia" && preco < 15) {
    // let snack = prompt("Qual snack você vai comprar?");
    // console.log("Bom filme!");
    // console.log("... com " + snack);
// } else {
    // console.log("Escolha outro filme :(");
// }

// 02

let nome = prompt("Digite seu nome completo:");
let tipo = prompt("Informe o tipo de jogo:");
let etapa = prompt("Informe a etapa do campeonato:");
let categoria = prompt("Informe a categoria do jogo:");
let quantidade = Number(prompt("Informe a quantidade de ingressos:"));
let valor;
let moeda;
let erro = false;

if (etapa === "SF") {
    etapa ="Semi-final";
    switch (categoria) {
        case "1": 
            valor = 1320;
        break;
        case "2":
            valor = 880;
        break;
        case "3":
            valor = 550;
        break;
        case "4":
            valor = 220;
        break; 
        default:
            console.log("Categoria inválida");
            erro = true;
        break; 
    }
} else if (etapa === "DT") {
    etapa = "Disputa de Terceiro Lugar";
    switch (categoria) {
        case "1": 
            valor = 660;
        break;
        case "2":
            valor = 440;
        break;
        case "3":
            valor = 330;
        break;
        case "4":
            valor = 170;
        break; 
        default:
            console.log("Categoria inválida");
            erro = true;
        break; 
    }
} else if (etapa === "FI") {
    etapa = "Final";
    switch (categoria) {
        case "1": 
            valor = 1980;
        break;
        case "2":
            valor = 1320;
        break;
        case "3":
            valor = 880;
        break;
        case "4":
            valor = 330;
        break;
        default:
            console.log("Categoria inválida");
            erro = true;
        break; 
    }
} else {
    console.log("Etapa inválida");
    erro = true;
}

if (tipo === "IN") {
    valor /= 4.10;
    moeda = "$"
    tipo = "Internacional";
} else if (tipo === "DO") {
    moeda = "R$";
    tipo = "Nacional";
} else {
    console.log("Tipo inválido");
    erro = true;
}

if ( quantidade <= 0 || erro) {
    console.log("Por favor, revise as informações.");
} else {
    console.log(`---Dados da compra---
Nome do cliente: ${nome}
Tipo do jogo:  ${tipo}
Etapa do jogo:  ${etapa}
Categoria:  ${categoria}
Quantidade de Ingressos:  ${quantidade} ingressos
---Valores---
Valor do ingresso:  ${moeda + valor}
Valor total: ${moeda + valor * quantidade} `);
}