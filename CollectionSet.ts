//Escreva um programa para criar uma Collection Set do tipo number. 
// O programa deverá solicitar ao usuário, que ele digite via teclado 10 valores inteiros não repetidos e adicione-os individualmente na Collection Set.
//  Em seguida, faça o que se pede:
//Mostre na tela todos os elementos da Collection Set. 

import readlinesync = require("readline-sync");

// Criar Collection Set de números
const numeros: Set<number> = new Set<number>();

console.log("Digite 10 valores inteiros não repetidos:\n");

// Solicitar ao usuário 10 números inteiros não repetidos
let contador = 0;
while (contador < 10) {
    const valor = readlinesync.questionInt(`Digite o valor ${contador + 1}: `);
    
    // Tentar adicionar o valor ao Set
    const tamanhoAntes = numeros.size;
    numeros.add(valor);
    
    // Verificar se o valor foi adicionado (não era repetido)
    if (numeros.size > tamanhoAntes) {
        contador++;
    } else {
        console.log("Valor repetido! Digite outro valor.\n");
    }
}

// Mostrar todos os elementos do Set em ordem crescente
console.log("\nListar dados do Set:");
const numerosOrdenados = Array.from(numeros).sort((a, b) => a - b);
for (const numero of numerosOrdenados) {
    console.log(numero);
}
