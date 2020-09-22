console.log("Oie, eu só sirvo pra saber se as coisas funcionaram!")
/* EX 1 
const bool1 = true
const bool2 = false
const bool3 = !bool2

let resultado = bool1 && bool2
console.log("a. ", resultado)

    a. false

resultado = bool1 && bool2 && bool3
console.log("b. ", resultado)

    b. false

resultado = !resultado && (bool1 || bool1)
console.log("c. ", resultado)

    c. caso leve em conta o resultado de "b", o novo resultado é true. Caso não leve dá erro. 

console.log("d. ", typeof resultado) 

    d. boolean */

/* EX 2 

let array
console.log('a. ', array)

    a. undefined

array = null
console.log('b. ', array)

    b. null

array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
console.log('c. ', array.length)

    c. 11

let i = 0
console.log('d. ', array[i])

    d. 3

array[i+1] = 19
console.log('e. ', array)

    e. [3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13]

const valor = array[i+6]
console.log('f. ', valor) 

f. 9

*/

/* Exercícios de escrita de código
01 */

/* let userIdade = Number(prompt("Qual é a sua idade?"));
let amigoIdade = Number(prompt("Qual é a idade do seu melhor amigo ou da sua melhor amiga?"));

console.log("Sua idade é maior do que a do seu melhor amigo? ", userIdade > amigoIdade);
console.log("A diferença das suas idades é de: ", userIdade - amigoIdade);

// EX 02

let numeroPar = Number(prompt("Por favor, insira um numero par."));

console.log(numeroPar%2); */

// Todos o resultados de todos os numeros pares quando pedimos o resto da divisão por 2 dá 0
// Todos o resultados de todos os numeros ímpares quando pedimos o resto da divisão por 2 dá 1

//EX 3
/*
let listaDeTarefas = [];

alert("Escreva, uma a uma, 3 tarefas que vocês precise realizar hoje.");
listaDeTarefas[0] = prompt("Tarefa 1");
listaDeTarefas[1] = prompt("Tarefa 2:");
listaDeTarefas[2] = prompt("Tarefa 3:");
console.log(listaDeTarefas);

let tarefaRealizada = Number(prompt("Digite o índice de uma tarefa já realizada para removê-la: \n  0: " + listaDeTarefas[0]  + " \n 1: " + listaDeTarefas[1] + " \n 2: " + listaDeTarefas[2]));

listaDeTarefas.splice(tarefaRealizada, 1);
console.log(listaDeTarefas); */

//EX 4 
/*
let nomeDoUsuario = prompt("Digite seu nome:");
let emailDoUsuario = prompt("Digite seu e-mail:");

console.log(`O e-mail ${emailDoUsuario} foi cadastrado com sucesso. Seja bem-vinda(o), ${nomeDoUsuario}!`);
*/

// EXTRAS
//01

//a.
/*
let k = (77 - 32)*5/9 + 273.15;
console.log(k,"K ,","77F");
*/

//b.
 /*
let f = 80*9/5 + 32;
console.log(f,"F ,", "80C"); 
*/

//c.
/*
let f = 30*9/5 + 32;
let k = (f - 32)*5/9 + 273.15;
console.log("30C ,", f, "F ,", k,"K");
*/

//d.
/*
let c = prompt("Insira um valor em Celcius para converter");
let f = c*9/5 + 32;
let k = (f - 32)*5/9 + 273.15;
console.log(c,"C ,", f, "F ,", k,"K");
*/

//02
/*
let kWh = Number(prompt("Insira o quilowatt-hora consumido por usa residência:"));

console.log("R$", kWh*0.05);

// 280*0.05 = 14

let desconto = Number(prompt("Insira a porcentagem de desconto:"));

console.log(kWh*0.05 - (kWh*0.05)*desconto/100);
// 280*0.05 - (280*0.05)*15/100 = 11.9
*/

/*
EX 3 


//a. 
let kg = 20/2.2046;
console.log(`20lb equivalem a ${kg} kg`);

//b.
let kg = 10.5/35.274;
console.log(`10.5oz equivalem a ${kg} kg`);

//c.
let metros = 100/0.00062137;
console.log(`100mi equivalem a ${metros} m`);

//d.
let metros = 50/3.2808;
console.log(`50ft equivalem a ${metros} m`);

//e.
let litro = 103.56/0.26417;
console.log(`103.56gal equivalem a ${litro} l`);

//f.
let litro = (450*6)/25;
console.log(`450 xic equivalem a ${litro} l`);
*/

//g.
let xicara = Number(prompt("Digite o valor em Xícaras para converter para Litros"));
let litro = (xicara*6)/25;
console.log(`${xicara} xic equivalem a ${litro} l`);
