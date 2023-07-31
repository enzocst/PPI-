export class Data {
    private dia: number;
    private mes: number;
    private ano: number;

    constructor(dia: number, mes: number, ano: number) {
        this.dia = dia;
        this.mes = mes;
        this.ano = ano;

    }

    modificardia(dia: number) {
        this.dia = dia;
    }

    obterdia(): number {
        return this.dia;
    }
}

export class Voo {
    private data: Data;
    private numero: number;
    private reservas: boolean;

    constructor(data: Data, numero: number) {
        this.data = data;
        this.numero = numero;
        this.reservas = false;
    }

    ocupado(assento: number): void{
        if(assento > 7){
            this.reservas = true 
        } else {
            false
        }

    }
    
    quantidadeocupados(): number{
        return this.ocupado;
    }

    reservar(numero: number): boolean{

    }
}