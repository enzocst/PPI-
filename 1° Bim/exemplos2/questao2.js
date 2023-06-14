let pessoas = ['Andréa', 'Gilmar', 'Osvaldo', 'Gabriela', 'Edílson', 'Fábio',
    'Ana', 'Luiz', 'Cléber', 'Humberto', 'Erika', 'Iara', 'Beatriz', 'Uirá'];

// Percorrendo a lista de pessoas
for (let i = 0; i < pessoas.length; i++) {
    let nome = pessoas[i];

    // Verificando se o nome possui mais de 4 letras
    if (nome.length > 4) {
        console.log(nome);
    }
}
