console.log("Oie, eu só sirvo pra saber se as coisas funcionaram!");
//Exercícios de interpretação
//01 R: 10

//02:
// a. Seram impressos os numeros 19, 21, 23, 25, 27 e 30.

// b. Sim, 
// for (let indice of lista) {
    // console.log(indice);
// }

//Desafio 01:
// 0
// 00
// 000
// 0000 

//Exercícios de Escrita.
//03:

let arrayOriginal = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55];

//a.
    // for (i = 0; i < arrayOriginal.length; i++ ) {
        // console.log(arrayOriginal[i]);
    // }

//b.
    // for (let numero of arrayOriginal) {
        // console.log(numero/10);
    // }

//c.
    // let arrayPar = [];
    // for (let numero of arrayOriginal) {
        // if (numero%2 === 0) {
            // arrayPar.push(numero);
        // }
    // }    
    // console.log(arrayPar);

// d.
    // let arrayString = [];
    // for (i = 0; i < arrayOriginal.length; i++ ) {
        // arrayString.push( `O elemento do índex ${i} é: ${arrayOriginal[i]}`);        
    // }  
    // console.log(arrayString);

//e.
    let valorMaximo = 80
    let valorMinimo = 80

    for(let numero of arrayOriginal) {
        if( numero < valorMinimo) {
            valorMinimo = numero;
        } else if ( numero > valorMaximo) {
            valorMaximo = numero;
        }
    } 
    console.log(`O maior número é ${valorMaximo} e o menor é ${valorMinimo}`);