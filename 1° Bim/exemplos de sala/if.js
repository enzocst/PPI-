//const nav = navigator.userAgent;
//let navegador = '';

//console.log(nav);

//if (nav.indexOf('Chrome') > -1) {
//navegador = 'Chrome, Safari ou Edge';
//} else if (nav.indexOf('firefox')> -1){
    navegador = 'firefox';
//} else {
    navegador = 'outro navegador ou não detectado';
//}

//console.log(navegador);

var media = prompt("Digite sua média");

if (media >= 60){
    window.alert("Voce foi aprovado");
} else if (media >= 20){
    window.alert("Prova final");
} else {
    window.alert("reprovado");
}