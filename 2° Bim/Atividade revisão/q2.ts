export class Hospede {
    private nome: string;
    private cpf: string;
    private telefone: number;
    private endereco: string;
  
    constructor(nome: string, cpf: string, telefone: number, endereco: string) {
      this.nome = nome;
      this.cpf = cpf;
      this.telefone = telefone;
      this.endereco = endereco;
    }
  
    obternome(): string {
      return this.nome;
    }
  
    obtercpf(): string {
      return this.cpf;
    }
    obtetelefone(): number {
        return this.telefone;
    }
    obterendereco(): string {
        return this.endereco;
    }
  }
  
export class Aposento {
    private tipo: string;
    private precoDiaria: number;
  
    constructor(tipo: string, precoDiaria: number) {
      this.tipo = tipo;
      this.precoDiaria = precoDiaria;
    }

    obtertipo(): string {
      return this.tipo;
    }
  
    obterprecodiaria(): number {
      return this.precoDiaria;
    }
  }
  
export class Hospedagem {
    private hospedes: Hospede[];
    private aposento: Aposento;
  
    constructor(aposento: Aposento) {
      this.hospedes = [];
      this.aposento = aposento;
    }
  
    hospedar(hospede: Hospede): void {
      this.hospedes.push(hospede);
    }
  
    calcular_total(quant_diarias: number): number {
      return this.aposento.obterprecodiaria() * quant_diarias;
    }
  
    obterhospedes(): Hospede[] {
      return this.hospedes;
    }
  
    obteraposento(): Aposento {
      return this.aposento;
    }
  }