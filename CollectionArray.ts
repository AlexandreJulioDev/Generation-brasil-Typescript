//Escreva um programa para criar uma Collection Array de Objetos do tipo string. 
//O programa deverá solir ao usuário, que ele digite via teclado 5 cores e deverá adicioná-las individualmente no Array. Em seguida, faça o que se pede:
//Mostre na tela todas as cores adicionadas. 
//Mostre na tela todas as cores adicionadas, ordenadas em ordem crescente.

import readlinesync = require("readline-sync");

// Criar Collection Array de strings
const cores: Array<string> = [];

console.log("Digite 5 cores:\n");

// Solicitar ao usuário 5 cores
for (let i = 1; i <= 5; i++) {
    const cor = readlinesync.question(`Digite a cor ${i}: `);
    cores.push(cor);
}

// Mostrar todas as cores adicionadas
console.log("\nListar todas as cores:\n");
for (const cor of cores) {
    console.log(cor);
}

// Mostrar as cores ordenadas em ordem crescente
console.log("\nOrdenar as cores:\n");
const coresOrdenadas = [...cores].sort();
for (const cor of coresOrdenadas) {
    console.log(cor);
}