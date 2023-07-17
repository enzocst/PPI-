export enum Raça{
    CARAMELO = 'Caramelo',
    FOXPAULISTINHA = 'Fox Paulistinha',
    SALSICHA = 'Salsicha',
    GOLDEN  = 'Golden',
}

export class Cachorro {
    private nome: string;
    private raça: Raça;
    private idade: number;

    constructor(nm: string, rc: string){
        this.nome = nm;
        this.idade = 0;
    }

    latir(quant:number) {
        let latido = '';
        for (let i = 0; i < quant; i++) {
            latido += 'Au';
        }
        return latido;
    }

    inserirNome(nm: string) {
        this.nome = nm;
    }

    obterNome(): string {
        return this.nome;
    }

    inserirIdade(id: number){
        if(id >= 0 && id <= 25)
        this.idade = id;
    }
    
    obterIdade(): number{
        return this.idade;
    }

    inserirRaca(rc: Raça){
        this.raça = rc;
    }

    obterRaça(): Raça{
        return this.raça;
    }
}
