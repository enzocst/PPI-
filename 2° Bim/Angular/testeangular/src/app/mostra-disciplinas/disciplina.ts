export class Disciplinas {
    nome: string;
    docente: string;
    periodo: number;
    ch: number;

    constructor(nm: string, doc: string, per: number, ch: number) {
        this.nome = nm;
        this.docente = doc;
        this.periodo = per;
        this.ch = ch;
    }
}