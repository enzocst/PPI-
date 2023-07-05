export enum Situação {
    INDEFINIDA = 'Indefinida', AVFINAL = 'Avaliação Final',
    APROVADO = 'Aprovado', REPROVADO = 'Reprovado(a)'
}

export class Nota {
    private bim1: number = 0;
    private bim2: number = 0;
    private bim3: number = 0;
    private bim4: number = 0;
    private avFinal: number | undefined;
    private situacao: Situação;

    constructor(b1: number,
        b2: number,
        b3: number,
        b4: number) {
        this.alterarBim1(b1);
        this.alterarBim2(b2);
        this.alterarBim3(b3);
        this.alterarBim4(b4);
        this.avFinal = undefined;
        this.situacao = Situação.INDEFINIDA;
    }
    alterarBim1(n: number): boolean {
        if (n >= 0 && n <= 100) {
            this.bim1 = n;
            return true;
        }
        return false;
    }

    obterBim1(): number {
        return this.bim1;
    }

    alterarBim2(n: number): boolean {
        if (n >= 0 && n <= 100) {
            this.bim2 = n;
            return true;
        }
        return false;

    }
    obterBim2(): number {
        return this.bim2;
    }

    alterarBim3(n: number): boolean {
        if (n >= 0 && n <= 100) {
            this.bim3 = n;
            return true;

        }
        return false;
    }

    obterBim3(): number {
        return this.bim3;
    }

    alterarBim4(n: number): boolean {
        if (n >= 0 && n <= 100) {
            this.bim4 = n;
            return true;
        }
        return false;
    }

    obterBim4(): number {
        return this.bim4;
    }

    alterarTodas(b1: number, b2: number,
        b3: number, b4: number) {
        this.alterarBim1(b1);
        this.alterarBim2(b2);
        this.alterarBim3(b3);
        this.alterarBim4(b4);
    }

    calcularMédiaParcial() {
        return (this.bim1 * 2 +
            this.bim2 * 2 +
            this.bim3 * 3 +
            this.bim4 * 3) / 10;
    }

    alterarNotaAvaliaçãoFinal(nav: number):
        boolean {
        if (nav >= 0 && nav <= 100) {
            this.avFinal = nav;
            return true;
        }
        return false;
    }

    obterNotaAvaliaçãoFinal(): number | undefined {
        return this.avFinal;

    }


    /** Média pós avaliação final 
     * @param nav - nota da avaliação final
     * 
     * @return A média final do estudante (mp + nav) / 2;
    */
    calcularMédiaFinal(nav: number) {
        let mp = this.calcularMédiaParcial();
        this.alterarNotaAvaliaçãoFinal(nav);
        let mf = mp;
        if (mp < 60 && this.obterNotaAvaliaçãoFinal()) {
            mf = (mp + nav) / 2;
        }
        if (mf >= 60) {
            this.situacao = Situação.APROVADO;
        } else {
            this.situacao = Situação.REPROVADO;
        }

        return mf;
    }

    obterSituação(): Situação {
        return this.situacao;
    }
}

