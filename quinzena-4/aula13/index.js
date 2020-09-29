console.log("Oie, eu só sirvo pra saber se as coisas funcionaram!");

//Exercícios de interpretação 
//EX 01
// A. 10
//    50
// B. O código iria fazer a multiplicação mas nada apareceria no console.

// EX 02 
// A. "Darvas"
//    "Goli"
// B. "Amanda"
//    "Caio"

// EX 03 
//  A função seleciona todos os inputs pares do array e os insere ao quadrado no arrayFinal.
//  Um melhor nome poderia ser "multiplicarParesAoQuadrado"

//Exercícios de escrita
// EX 04
//A.
// const sobreMim = () => {
//     console.log("Eu sou David, tenho 22 anos, moro em Juiz de Fora e sou estudante.");
// }

//B.
// const sobreMim = (nome, idade, cidade, estudante) => {
//     let nao = "";
//     if (estudante === false) {
//         nao = "não ";
//     }

//     console.log(`Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade} e ${nao}sou estudante.`);
// }

//EX 05
// A.
// const soma = (x, y) => {
//     return x + y;
// } 

// console.log(soma(1,2));


// B.
// const conferirSeMaiorOuIgual = (x, y) => {
//     if ( x >= y) {
//         return true;
//     }
// }

//C.
// const imprimir10vezes = (string) => {
//     for( i= 0; i<10; i++) {
//         console.log(string);
//     }
// }


// EX 6

// const array = [10, 23, 45, 78, 90, 52, 35, 67, 84, 22];

//A.
// const returnLength = (array) => {
//     return array.length;
// }

//B.
// const parOuNao = (numero) => {
//     if (numero%2 === 0) {
//         return true;
//     } else {
//         return false;
//     }
// }

//C.
// const quantidadeDePares = (array) => {
//     let quantidade = 0;
//     for (let index of array) {
//         if ( index%2 === 0 ){
//             quantidade++;
//         }
//     }
//     return quantidade
// }

//D.
// const quantidadeDePares = (array) => {
//     let quantidade = 0;
//     for (let index of array) {
//         if (parOuNao(index)) {
//             quantidade++;
//         }
//     }
//     return quantidade
// }

//Desafios
//EX 01
// const imprimeNoConsole = (parametro) => {
//     console.log(parametro);
// }

// const soma = (x,y) => {
//     let z = x + y; 
//     imprimeNoConsole(z);
// }

//EX 02
// const numeros = [0, 8, 23, 16, 10, 15, 41, 12, 13];

//A.
// const paresVezesDois = (array) => {
//     let novoArray = [];
    
//     for(let input of array) {
//         if (input%2 === 0) {
//             novoArray.push(input*2);
//         } 
//     }
    
//     return novoArray;
// }

//B.
// const maiorNumDoArray = (array) => {
//     let maiorNum = 0;

//     for(let number of array) {
//         if (number > maiorNum) {
//             maiorNum = number;
//         }
//     }

//     return maiorNum;
// }

//C.
// const indexDoMaior = (array) => {
//     let maiorNum = 0;

//     for(let number of array) {
//         if (number > maiorNum) {
//             maiorNum = number;
//         }
//     }

//     return array.indexOf(maiorNum);
// }

//D.
const inverterArray = (array) => {
    return array.reverse();
}

