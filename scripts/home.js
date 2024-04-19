let nome = "Mateus Matos de ";
let sobrenome = " Oliveira ";
let atraso = 180;

let elementoNome = document.querySelector(".apresentacao__conteudo__nome");
let elementoSobrenome = document.querySelector(".titulo__destaque__nome");

let contadorDeLetrasNome = 0;
let contadorDeLetrasSobrenome = 0;

elementoNome.classList.add('piscar');

function escreverNome() {
    if (contadorDeLetrasNome < nome.length) {
        elementoNome.textContent += nome.charAt(contadorDeLetrasNome);
        contadorDeLetrasNome++;
        setTimeout(escreverNome, atraso);
    } else {
        elementoNome.classList.remove('piscar');
        elementoSobrenome.classList.add('piscar');
        escreverSobrenome();
    }
}

function escreverSobrenome() {
    if (contadorDeLetrasSobrenome < sobrenome.length) {
        elementoSobrenome.textContent += sobrenome.charAt(contadorDeLetrasSobrenome);
        contadorDeLetrasSobrenome++;
        setTimeout(escreverSobrenome, atraso);
    }
}
escreverNome();
