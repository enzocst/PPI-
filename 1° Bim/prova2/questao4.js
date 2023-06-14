function triang(a, b, c,) {
    a = +prompt("Digite o primeiro lado");
    b = +prompt("Digite o segundo lado");
    c = +prompt("Digite o terceiro lado");

    if(a == b && b == c){
        return("1 – triângulo equilátero");
    }
    else if(a == b || a == c || b == c){
        return("2 – triângulo isósceles");
    }
    else if(a != b && b != c && c != a){
        return("3 – triângulo escaleno");
    }
    else{
        return("0 – não é um triângulo");
    }
}

console.log(triang());