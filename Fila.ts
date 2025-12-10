import readlinesync = require("readline-sync");

// Classe Queue (Fila)
class Queue {
   private dados: Array<string> = [];
   
   // Adicionar na fila
   enqueue(item: string): void {
      this.dados.push(item);
   }
   
   // Remover da fila
   dequeue(): string | undefined {
      if (this.isEmpty()) {
         return undefined;
      }
      return this.dados.shift();
   }
   
   // Verificar se está vazia
   isEmpty(): boolean {
      return this.dados.length === 0;
   }
   
   // Mostrar todos os elementos
   printQueue(): void {
      for (let i = 0; i < this.dados.length; i++) {
         console.log(this.dados[i]);
      }
   }
}

// Programa principal
const fila = new Queue();
let opcao: number = 0;

do {
    console.log("\n*****************************************************");
    console.log("            1 - Adicionar Cliente na Fila            ");
    console.log("            2 - Listar todos os Clientes             ");
    console.log("            3 - Retirar Cliente da Fila              ");
    console.log("            0 - Sair                                 ");
    console.log("*****************************************************");
    
    opcao = readlinesync.questionInt("Entre com a opcao desejada: ");
    
    if (opcao === 1) {
        const nome = readlinesync.question("\nDigite o nome do Cliente: ");
        fila.enqueue(nome);
        console.log("\nCliente adicionado!");
        
    } else if (opcao === 2) {
        if (fila.isEmpty()) {
            console.log("\nA fila esta vazia!");
        } else {
            console.log("\nLista de Clientes na Fila:");
            fila.printQueue();
        }
        
    } else if (opcao === 3) {
        if (fila.isEmpty()) {
            console.log("\nA fila esta vazia!");
        } else {
            const cliente = fila.dequeue();
            console.log(`\nO Cliente ${cliente} foi chamado!`);
        }
        
    } else if (opcao === 0) {
        console.log("\nPrograma Finalizado!");
        
    } else {
        console.log("\nOpcao invalida!");
    }
    
} while (opcao !== 0);