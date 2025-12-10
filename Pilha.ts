import readlinesync = require("readline-sync");

// Classe Stack (Pilha)
class Stack {
   private dados: Array<string> = [];
   
   // Adicionar na pilha
   push(item: string): void {
      this.dados.push(item);
   }
   
   // Remover da pilha
   pop(): string | undefined {
      if (this.isEmpty()) {
         return undefined;
      }
      return this.dados.pop();
   }
   
   // Verificar se está vazia
   isEmpty(): boolean {
      return this.dados.length === 0;
   }
   
   // Mostrar todos os elementos
   printStack(): void {
      for (let i = 0; i < this.dados.length; i++) {
         console.log(this.dados[i]);
      }
   }
}

// Programa principal
const pilha = new Stack();
let opcao: number = 0;

do {
    console.log("\n*****************************************************");
    console.log("            1 - Adicionar Livro na pilha             ");
    console.log("            2 - Listar todos os Livros               ");
    console.log("            3 - Retirar Livro da pilha               ");
    console.log("            0 - Sair                                 ");
    console.log("*****************************************************");
    
    opcao = readlinesync.questionInt("Entre com a opcao desejada: ");
    
    if (opcao === 1) {
        const nomeLivro = readlinesync.question("\nDigite o nome do Livro: ");
        pilha.push(nomeLivro);
        console.log("\nLivro adicionado!");
        
    } else if (opcao === 2) {
        if (pilha.isEmpty()) {
            console.log("\nA pilha esta vazia!");
        } else {
            console.log("\nLista de Livros na Pilha:");
            pilha.printStack();
        }
        
    } else if (opcao === 3) {
        if (pilha.isEmpty()) {
            console.log("\nA pilha esta vazia!");
        } else {
            const livro = pilha.pop();
            console.log(`\nO Livro ${livro} foi retirado!`);
        }
        
    } else if (opcao === 0) {
        console.log("\nPrograma Finalizado!");
        
    } else {
        console.log("\nOpcao invalida!");
    }
    
} while (opcao !== 0);
