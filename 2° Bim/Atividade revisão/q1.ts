export class Elevador {
    andarAtual: number;
    totalAndares: number;
    capacidade: number;
    quantidadePessoas: number;
    portaAberta: boolean;
  
    constructor(capacidade: number, totalAndares: number) {
      this.andarAtual = 0;
      this.totalAndares = totalAndares;
      this.capacidade = capacidade;
      this.quantidadePessoas = 0;
      this.portaAberta = false;
    }
  
    entrar(numeroPessoas: number): void {
      if (this.portaAberta && this.quantidadePessoas + numeroPessoas <= this.capacidade) {
        this.quantidadePessoas += numeroPessoas;
        this.portaAberta = false;
      } else {
        console.log("Não é possível entrar no elevador.");
      }
    }
  
    sair(numeroPessoas: number): void {
      if (this.portaAberta && this.quantidadePessoas - numeroPessoas >= 0) {
        this.quantidadePessoas -= numeroPessoas;
        this.portaAberta = false;
      } else {
        console.log("Não é possível sair do elevador.");
      }
    }
  
    subir(): void {
      if (this.portaAberta) {
        console.log("Por favor, feche a porta antes de subir.");
      } else if (this.andarAtual < this.totalAndares - 1) {
        this.andarAtual++;
      } else {
        console.log("Já estamos no último andar. Não é possível subir mais.");
      }
    }
  
    descer(): void {
      if (this.portaAberta) {
        console.log("Por favor, feche a porta antes de descer.");
      } else if (this.andarAtual > 0) {
        this.andarAtual--;
      } else {
        console.log("Já estamos no térreo. Não é possível descer mais.");
      }
    }
  
    abrirPorta(): void {
      this.portaAberta = true;
    }
  
    fecharPorta(): void {
      this.portaAberta = false;
    }
  
    getAndarAtual(): number {
      return this.andarAtual;
    }
  
    getQuantidadePessoas(): number {
      return this.quantidadePessoas;
    }
  
    isPortaAberta(): boolean {
      return this.portaAberta;
    }
  }
  