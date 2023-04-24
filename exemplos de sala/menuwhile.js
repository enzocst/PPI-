let op = -1; //opção a ser escolhida
do{
    console.log(
        `Opções\n
        1 = Adicionar\n
        2 - Editar\n
        3 - Remover\n
        -1 para sair`);
    op = +prompt('Escolha uma opção:')
} while(op != -1);