function numeroInt(n, m) {
    n = prompt("Digite o primeiro número");
    m = prompt("Digite o segundo número");
    if (n * m == n * n || m * m){
        return("É multiplo")
    } else{
        return("Não é multiplo");
    }
}

console.log(numeroInt());