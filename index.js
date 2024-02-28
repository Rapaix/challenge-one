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

let cripto = {
  e: "enter",
  i: "imes",
  a: "ai",
  o: "ober",
  u: "ufat",
};

let cifra = { enter: "e", imes: "i", ai: "a", ober: "o", ufat: "ufat" };
function decifrar(texto) {}
let teste = "gato";

let arrString = teste.split("");

let arrResult = arrString.map((s) => (s in cripto ? cripto[s] : s));

console.log(arrResult.join(""));
console.log("arrResult");
console.log();

const decifrar = (searhString, pattern) =>
  [...searhString.matchAll(new RegExp(pattern, "gi"))].map((a) => a.index);

for (const [key, value] of Object.entries(cifra)) {
  console.log(decifrar(decifrar, key));
  console.log(key, value);
}
let texto = decifrar;

console.log();
for (const [key, value] of Object.entries(cifra)) {
  texto = texto.replace(key, value);
  console.log(texto);
}
