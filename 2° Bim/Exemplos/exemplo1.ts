export class Correntista {
    private nome: string;
    private cpf: string;
    private dataNascimento: Date;
    private telefone: string;
  
    constructor(nome: string, cpf: string, dataNascimento: Date, telefone: string) {
      this.nome = nome;
      this.cpf = cpf;
      this.dataNascimento = dataNascimento;
      this.telefone = telefone;
    }
  
    modificarNome(nome: string): void {
      this.nome = nome;
    }
  
    obterNome(): string {
      return this.nome;
    }
  
    modificarCpf(cpf: string): void {
      this.cpf = cpf;
    }
  
    obterCpf(): string {
      return this.cpf;
    }
  
    modificarDataNascimento(dataNascimento: Date): void {
      this.dataNascimento = dataNascimento;
    }
  
    obterDataNascimento(): Date {
      return this.dataNascimento;
    }
  
    modificarTelefone(telefone: string): void {
      this.telefone = telefone;
    }
  
    obterTelefone(): string {
      return this.telefone;
    }
  }