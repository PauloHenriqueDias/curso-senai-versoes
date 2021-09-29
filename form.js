let readlineSync = require('readline-sync');

var listaDePecas = [];
var pesoDePecas = [];
var capacidade = 3;

for (let index = 0; index < capacidade; index++) {
    listaDePecas[index] = readlineSync.question("Digite o nome da peca " +index + " :");
    pesoDePecas[index] = readlineSync.question("Digite o peso da peca: " +index+ " :");
    
}
console.log("-------------------------------------");

for (let index = 0; index < capacidade; index++) {
    console.log("A peca "+ listaDePecas[index]+ " tem o peso de: "+ pesoDePecas[index] );
   
}