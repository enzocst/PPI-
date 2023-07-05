export class Contato {
    private nome: string;
    private email: string;
    private telefone: number;

    constructor(nm: string, eml: string, tele: number) {
        this.alterarnome(nm);
        this.alteraremail(eml);
        this.alterartelefone(tele);
    }
    alterarnome(n: string): boolean {

        this.nome
        return true;
        return false;
    }

    obternome(): string {
        return this.nome;
    }

    alteraremail(n: string): boolean {
        this.email
        return true;
        return false;

    }
    obteremail(): string {
        return this.email;
    }

    alterartelefone(n: number): boolean {
        if (n >= 0 && n <= 100) {
            this.telefone = n;
            return true;

        }
        return false;
    }

    obtertelefone(): number {
        return this.telefone;
    }
}
