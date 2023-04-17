let faustino = [92.0, 70.0, 20.5, 50.0];

console.log(`Bim 3${faustino[2]}`);
faustino[2] = 61.0;
console.log(faustino);
let mp = (2*faustino[0] + 2*faustino[1], 3*faustino[2], 3*faustino[3]) / 10;
faustino.push(mp);
console.log(faustino);

let faustino1 ={
    "b1" : 92.0,
    "b2" : 70.0
}