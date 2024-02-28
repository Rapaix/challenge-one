let textoResultado = document.getElementById("textoResultado");

function hideOutputText() {
  document.getElementById("botao-output").style.display = "";
  document.getElementById("textoResultado").removeAttribute("hidden");
  document.getElementById("imagem").style.display = "none";
  document.getElementById("titulo").style.display = "none";
  document.getElementById("paragrafo").style.display = "none";
}

function exibeMensagem(mensagem) {
  textoResultado.innerHTML = mensagem;
  hideOutputText();
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
  var content = document.getElementById("textoResultado").innerHTML;

  navigator.clipboard
    .writeText(content)
    .then(() => {
      console.log("Texto copiado para a área de transferência...");
    })
    .catch((err) => {
      console.log("Algo deu errado", err);
    });
}

let strTeste =
  "pairaibenterns poberr enterncairair enterssenter dentersaifimesober enter tenterr fimesnailimeszaidober enterlenter coberm sufatcenterssober!";

const cifrar = (texto) => {
  let preCifra = {
    e: "enter",
    i: "imes",
    a: "ai",
    o: "ober",
    u: "ufat",
  };

  let arrString = texto.split("");
  let arrResult = arrString.map((s) => (s in preCifra ? preCifra[s] : s));
  return arrResult.join("");
};

const decifrar = (texto) => {
  let posCifra = { enter: "e", imes: "i", ai: "a", ober: "o", ufat: "u" };

  for (const [key, value] of Object.entries(posCifra)) {
    texto = texto.replaceAll(key, value);
  }
  return texto;
};
function codificarTexto() {
  let texto = document.getElementById("texto-entrada").value;
  exibeMensagem(cifrar(texto));
}

function decodificarTexto() {
  let texto = document.getElementById("texto-entrada").value;
  let arrResultado = texto.split(" ");
  let resultado = [];
  arrResultado.forEach((str) => {
    resultado.push(decifrar(str));
  });

  exibeMensagem(resultado.join(" "));
}
