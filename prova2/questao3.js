function numeroint(n, m) {
    n = prompt("Digite o primeiro número");
    m = prompt("Digite o segundo número");
    if (n * m >= 1){
        return true;
    } else{
        return false;
    }
}

console.log(numeroint());