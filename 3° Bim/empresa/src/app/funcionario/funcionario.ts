export class funcionario {

    private nome: string;
    private cargo: string;
    private salario: number;


    constructor (nome: string, cargo: string, salario: number) {
        this.nome = nome;
        this.cargo = cargo;
        this.salario = salario;

    }

    obternome(): string {
        return this.nome;
    }

    obtercargo(): string {
        return this.cargo;
    }

    obtersalario(): number {
        return this.salario;
    }

}