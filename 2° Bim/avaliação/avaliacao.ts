export class Data {
    private dia: number;
    private mes: number;
    private ano: number;

    constructor(dd: number,
        mm: number,
        aa: number) {
        this.modificarDia(dd);
        this.modificarMes(mm);
        this.modificarAno(aa);
    }

    modificarDia(dia: number) {
        if (dia >= 1 && dia <= 31) {
            this.dia = dia;
        } else {
            this.dia = 1;
        }
    }

    obterDia(): number {
        return this.dia;
    }

    modificarMes(mm: number) {
        if (mm >= 1 && mm <= 12) {
            this.mes = mm;
        } else {
            this.mes = 1;
        }
    }

    obterMes(): number {
        return this.mes;
    }

    modificarAno(aa: number) {
        const anoAtual = new Date().getFullYear();
        if (aa >= anoAtual) {
            this.ano = aa;
        } else {
            this.ano = anoAtual;
        }
    }

    obterAno(): number {
        return this.ano;
    }

    obterData(): string {
        return `${this.dia}/${this.mes}/${this.ano}`;
    }
}

export class Voo {
    data: Data;
    numero: number;
    reservas: boolean[];

    constructor(data: Data, num: number) {
        this.data = data;
        this.numero = num;
        this.reservas = [false, false, false, false, false, false, false, false];
    }

    ocupado(num: number) {
        if (num >= 0 && num < this.reservas.lenght) {
            return this.reservas[num];
        }
        return false
    }

    quantidadeocupados(): number {
        let quant = 0;
        for (let i = 0; i < this.reservas.lenght; i++) {
            if (this.reservas[i]) {
                quant++;
            }
        }
    }

    reservar(num: number) {
        if (!this.ocupado(num)) {
            this.reservas[num] = true;
            return true;
        }
        return false
    }
}