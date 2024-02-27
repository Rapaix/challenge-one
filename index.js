function hideOutputText() {
  document.getElementById("botao-output").style.display = "";
  document.getElementById("textoResultado").removeAttribute("hidden");
  document.getElementById("imagem").style.display = "none";
  document.getElementById("titulo").style.display = "none";
  document.getElementById("paragrafo").style.display = "none";
}

function exibeMensagem(mensagem) {
  document.getElementById("textoResultado").innerHTML = mensagem;
}

function botaoLimparTexto() {
  document.getElementById("imagem").style.display = "";
  document.getElementById("titulo").style.display = "";
  document.getElementById("paragrafo").style.display = "";
  document.getElementById("textoResultado").hidden = true;
  document.getElementById("textoResultado").innerHTML = "";
  document.getElementById("botao-output").style.display = "none";
  document.getElementById("texto-entrada").value = "";
}
function botaoCopiarTexto() {
  if (plainTextFinal == "") {
    navigator.clipboard.writeText(cipherTextFinal);
  } else {
    navigator.clipboard.writeText(plainTextFinal);
  }
  alert("Texto copiado para a área de transferência!");
}
