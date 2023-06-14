function calcular() {
  //document.getElementById('num').value
  let n = $('#num').val();
  let res = fatorial(n);
  let p = $('#res');
  //p.innerHTML = 'frase';
  p.html(`O fatorial de ${n} é ${res}`);
}