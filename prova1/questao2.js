function verificartranguloretangulo(a, b, c) {
    if (a <= 0 || b <= 0 || c <= 0) {
        return false;
    }

    if (a * a === b * b + c * c || b * b === a * a + c * c || c * c === a * a + b * b) {
        return true;
    } else {
        return false;
    }
}

console.log(verificartranguloretangulo(5, 4, 3)); 
console.log(verificartranguloretangulo(17, 8, 12));