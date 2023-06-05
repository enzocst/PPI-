$('#btn').on('click', principal);
function principal() {
    //document.getElementById('num').value;
    //entrada
    let num = $('#num').val();
    let fat = fatorial (+num);
    //Elemento de 'p' para a saída
    let res = $('#res');
    res.html(`O fatorial de ${num} é ${fat}`);
}
function fatorial(n) {
    if(n == 0 || n == 1) {
        return 1;
    } else {
        return n * fatorial (n - 1);
    }
}