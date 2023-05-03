let digitos = prompt('9 PRIMEIROS DIGITOS DO CPF!!!!!');
let mult = 10;
let s1 = 0;
let pos = 0;
while(mult <=2){
    s1 += +digitos[pos] * mult;
    mult--;
    pos++;
}