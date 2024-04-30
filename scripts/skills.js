let minhas = "Minhas ";
let habilidades = " habilidades ";
let atraso = 150;

let elementoMinhas = document.querySelector(".apresentacao__conteudo__minhas");
let elementoHabilidades = document.querySelector(
  ".titulo__destaque__habilidades"
);

let contadorDeLetrasMinhas = 0;
let contadorDeLetrasHabilidades = 0;

elementoMinhas.classList.add("piscar");

function escreverMinhas() {
  if (contadorDeLetrasMinhas < minhas.length) {
    elementoMinhas.textContent += minhas.charAt(contadorDeLetrasMinhas);
    contadorDeLetrasMinhas++;
    setTimeout(escreverMinhas, atraso);
  } else {
    elementoMinhas.classList.remove("piscar");
    elementoHabilidades.classList.add("piscar");
    escreverHabilidades();
  }
}

function escreverHabilidades() {
  if (contadorDeLetrasHabilidades < habilidades.length) {
    elementoHabilidades.textContent += habilidades.charAt(
      contadorDeLetrasHabilidades
    );
    contadorDeLetrasHabilidades++;
    setTimeout(escreverHabilidades, atraso);
  }
}
escreverMinhas();
