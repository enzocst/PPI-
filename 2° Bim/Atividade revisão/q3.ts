export class Produto {
    private codigo: number;
    private preco: number;
    private descricao: string;

    constructor(cod: number, preco: number, desc: string) {
        this.codigo = cod;
        this.preco = preco;
        this.descricao = desc;
    }

    obtercodigo(): number {
        return this.codigo;
    }

    obterpreco(): number {
        return this.preco;
    }

    obterdescricao(): string {
        return this.descricao;
    }
}

export class ItemPedido {
    private produto: Produto;
    private quantidade: number;

    constructor(produto: Produto, quantidade: number) {
        this.produto = produto;
        this.quantidade = quantidade;
    }

    obterproduto(): Produto {
        return this.produto;
    }

    obterquantidade(): number {
        return this.quantidade;
    }
}

export class Pedido {
    private itens: ItemPedido[];

    constructor() {
        this.itens = [];
    }

    adicionar_item(item: ItemPedido): void {
        this.itens.push(item);
    }

    obter_total(): number {
        let total = 0;
        for (const item of this.itens) {
            total += item.obterproduto().obterpreco() * item.obterquantidade();
        }
        return total;
    }
}
