export class Produto{
    nome: string;
    categoria: string;
    marca: string;
    descricao: string;
    preco: number;
    quantidade: number;

    constructor(nm: string, categ: string, mrc: string, desc: string, prc: number, quant: number){
        
        this.nome = nm;
        this.categoria = categ;
        this.marca = mrc;
        this.descricao = desc;
        this.preco = prc;
        this.quantidade = quant;

    }


}
