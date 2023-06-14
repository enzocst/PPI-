export enum Raça{
    CARAMELO = 'Caramelo',
    FOXPAULISTINHA = 'Fox Paulistinha',
    SALSICHA = 'Salsicha',
    GOLDEN  = 'Golden',
}

export class Cachorro {
    nome: string;
    raça: string;
    idade: number;

    constructor(nm: string, rc: string){
        this.nome = nm;
        this.raça = rc;
        this.idade = 0;
    }
}