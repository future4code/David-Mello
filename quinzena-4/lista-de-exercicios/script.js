// Lista de Exercícios 

//Exercícios de Interpretação 

//01 
// A função pega um valor  em dolares passado quando chamada, pergunta ao usuário qual é a cotação atual do dolar
// e retorna o valor multiplicado pela cotação fornecida. Se o usuário colocar no prompt o valor atual da cotação
//(5,59) o código imprimirá no console "R$558.74" 

//02
// A funcão recebe o tipo de investimento e o valor investido, dependendo do tipo multiplica o valor pelo ganho determinado
//retorna o valor apos investimento.
// O primeiro montante imprimirá no console "165".
// O segundo montante fará aparecer um Alert na tela do usuário, informando que o tipo de investimento foi informado incorretamente
// e imprimirá "undefined" no console.

//03
// O código itera por um array separando os numeros pares do impares, colocando os pares no array1 e os impares no array2
// o primeiro console.log imprimirá "Quantidade total de números" "14"
// array1.length retorna "6"
//array2.lenght retorna "8"

//04
//O código itera pelo array de numeros selecionando o maior numero e o menor numero e armazenando respectivamente 
//nas variáveis numero1 e numero2.
//numero1 será igual a -10 e numero2 será igual a 1590.

//Exercícios de Lógica de Programação

//01
//Três formas de iterar uma lista podem ser While, for e for.. of.

const exercicio01 = () => {
    const lista = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    let i = 0;
    while (i < lista.length) {
        console.log(lista[i]);
        i++;
    }


    for (i=0; i < lista.length; i++) {
        console.log(lista[i]);
    }

    for (let numero of lista) {
        console.log(numero);
    }
}

//02
// a) false
// b) false
// c) true
// d) true
// e) true

//03
//O código não funciona.
// Primeiro, para podermos utilizar o código várias vezes com diferentes valores de N, precisamos coloca-lo em uma função.
// Assim definindo a quantidadeDeNumerosPares na chamada desta função.
//Segundo, ele não acrescenta nenhum valor ao i, o que gera um loop infinito, já que i sempre será menor que quantidadeDeNumerosPares
//Terceiro, utilizando o '<=' enquanto começa no 0, o código sempre irá iterar uma vez a mais. Como queremos incluir o 0
//na resposta utilizaremos apenas o '<'.
//Uma possível correção desse código seria:

const numerosPares = (quantidadeDeNumerosPares) => {
    let i = 0
    while(i < quantidadeDeNumerosPares) {
    console.log(i*2)
    i++;
    }
}

//04

const definirTriangulo = ( a, b, c) => {
    if (a === b && b === c) {
        return "Equilátero";
    } else if (a !== b && a !== c && b !== c) {
        return "Escaleno";
    } else if ( a === b && a !== c || a === c && a !== b || b === c && b !== a) {
        return "Isósceles"
    }

}

//

const problemaCinco = (a, b) => {
   
   let maior;
   let menor;
    if (a > b ) {
        console.log(`O maior é: ${a}`);
        maior = a; 
        menor = b;
    } else if ( a < b ) {
        console.log( `O maior é: ${b}`);
        maior = b;
        menor = a;
        
    } else if ( a - b === 0) { 
        console.log(`Os números são iguais`);

    }
//determina o maior

    if (a%b === 0) {
        console.log(`${a} é divisivel por ${b}`);
    } else {
        console.log(`${a} é não divisivel por ${b}`);
    } //verifica se a é divisivel por b

    if (b%a === 0) {
        console.log(`${b} é divisivel por ${a}`);
    } else {
        console.log(`${b} é não divisivel por ${a}`);
    } //verifica se b é divisivel por a

    if (maior === undefined || menor === undefined) {
        console.log(`os números são iguais`);
    } else {
    console.log(`A diferença entre eles é ${maior - menor}`);
    }
}

// Exercícios de funções 
// 01

const funcaoUm = (array) => {
   
   
   let ordenado = false;
   while(!ordenado) {
       ordenado = true;
        for(i = 1; i < array.length; i++) {
            if ( array[i - 1] > array[i]) {
                ordenado = false;
                let numeroAnterior = array[i - 1];
                array[i - 1] = array[i];
                array[i] = numeroAnterior;

            }
        }
    }
    
    console.log(array[1], array[array.length-2]);
}

let array = [1, 2 ,4 ,5 ,3 ,6 , 8 ,10 ,19 , 123 ,4323 ,3 ,1239 ,90, 100000];
// funcaoUm(array);

//02

const funcaoNãoNomeada = () => {
    alert("Hello Future4");
}
// funcaoNãoNomeada();

//Exercícios de Objetos 
//01
