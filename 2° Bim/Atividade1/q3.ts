class Televisao {
    private volume: number;
    private canal: number;

    constructor() {
        this.volume = 0;
        this.canal = 0;
    }

    public alterarVolume(volume: number) {
        if (volume >= 0 && volume <= 100) {
            this.volume = volume;
        }
    }

    public obterVolume(): number {
        return this.volume;
    }

    public alterarCanal(canal: number) {
        if (canal >= 0 && canal <= 800) {
            this.canal = canal;
        }
    }

    public obterCanal(): number {
        return this.canal;
    }
}

class ControleRemoto {
    private televisao: Televisao;

    constructor(televisao: Televisao) {
        this.televisao = televisao;
    }

    public aumentarVolume() {
        const volumeAtual = this.televisao.obterVolume();
        if (volumeAtual < 100) {
            this.televisao.alterarVolume(volumeAtual + 1);
        }
    }

    public diminuirVolume() {
        const volumeAtual = this.televisao.obterVolume();
        if (volumeAtual > 0) {
            this.televisao.alterarVolume(volumeAtual - 1);
        }
    }

    public consultarVolume(): number {
        return this.televisao.obterVolume();
    }

    public aumentarCanal() {
        const canalAtual = this.televisao.obterCanal();
        if (canalAtual < 800) {
            this.televisao.alterarCanal(canalAtual + 1);
        }
    }

    public diminuirCanal() {
        const canalAtual = this.televisao.obterCanal();
        if (canalAtual > 0) {
            this.televisao.alterarCanal(canalAtual - 1);
        }
    }

    public trocarCanal(canal: number) {
        this.televisao.alterarCanal(canal);
    }

    public consultarCanal(): number {
        return this.televisao.obterCanal();
    }
}
