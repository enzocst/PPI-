function principal() {
    return Math.floor(Math.random() * 20) + 1;
  }

  function comparar(palpite, gerado) {
    if (palpite === gerado) {
      return 'Parabéns! Você acertou o número.';
    } else if (palpite < gerado) {
      return 'Tente um número maior!';
    } else {
      return 'Tente um número menor!';
    }
  }

  function gerarNumero() {
    var gerado = principal();
    var palpite = parseInt(document.getElementById('palpite').value);
    var resultado = comparar(palpite, gerado);
    alert(resultado);
  }