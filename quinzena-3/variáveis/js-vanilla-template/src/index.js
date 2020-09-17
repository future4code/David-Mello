/* Exercícios de interpretação de código

1.
a = 10
b = 10

console.log(b)

b = 5
console.log(a, b)
    R:
        10
        10 5

2.
a = 10
b = 20
c = a
b = c
a = b

console.log(a, b, c)
    R:
        10 10 10 

*/
/* Exercícios de escrita de código 

EX 1.
*/

let nome;
let idade;

console.log(typeof nome, typeof idade);

/* 
1. o console imprimiu "undefined undefined" porque não tem nenhum valor declarado nas variáveis.*/

 nome = prompt("Qual é o seu nome?");
 idade = prompt("Quantos anos você tem?");

console.log(typeof nome, typeof idade);

/* 2. o console imprimiu "string string" porque o input do usuário é armazenado como uma string, uma linha de caracteres. */

console.log("Olá " + nome + ", você tem " + idade + " anos");

/* EX 2. */

let userEndereco = prompt("Qual o seu endereço?");
console.log("Resposta: " + userEndereco );

let userCor = prompt("Qual a sua cor favorita?");
console.log("Resposta:" + userCor);

let userJogo = prompt("Qual é o seu jogo preferido?");
console.log("Resposta: " + userJogo);

let userMusica = prompt("Qual é o seu estilo musical favorito?");
console.log("Resposta: " + userMusica);

let userLinguagem = prompt("Qual é a sua linguagem de programação preferida?");
console.log("Resposta: " + userLinguagem);

/* EX 3. */
let comidasPreferidas = ["Salpicão", "Abóbora Assada", "Pizza", "Frango Frito", "Torta de Limão"];
console.log(comidasPreferidas);
console.log( "Essas são as minhas comidas preferidas: " + comidasPreferidas[0], '\n', comidasPreferidas[1], '\n', comidasPreferidas[2], '\n', comidasPreferidas[3], '\n', comidasPreferidas[4]);

comidasPreferidas[1] = prompt("Qual é a sua comida preferida?");
console.log( "Essas são as minhas comidas preferidas: " + comidasPreferidas[0], '\n', comidasPreferidas[1], '\n', comidasPreferidas[2], '\n', comidasPreferidas[3], '\n', comidasPreferidas[4]);

/* EX 4. */
let perguntas = ["Você está usando uma roupa azul hoje?", "Você tem algum animal de estimação?", "Você comeu alguma das suas comidas preferidas hoje?"];
let respostas = [false, false, true];
console.log(perguntas[0], respostas[0], perguntas[1], respostas[1], perguntas[2], respostas[2]);