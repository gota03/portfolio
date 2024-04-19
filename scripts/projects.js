let meus = "Meus";
let projetos = "projetos ";
let atraso = 180;

let elementoMeus = document.querySelector(".apresentacao__conteudo__projetos");
let elementoProjetos = document.querySelector(".titulo__destaque__projetos");

let contadorDeLetrasMeus = 0;
let contadorDeLetrasProjetos = 0;

elementoMeus.classList.add('piscar');

function escreverMeus() {
    if (contadorDeLetrasMeus < meus.length) {
        elementoMeus.textContent += meus.charAt(contadorDeLetrasMeus);
        contadorDeLetrasMeus++;
        setTimeout(escreverMeus, atraso);
    } else {
        elementoMeus.classList.remove('piscar');
        elementoProjetos.classList.add('piscar');
        escreverProjetos();
    }
}

function escreverProjetos() {
    if (contadorDeLetrasProjetos < projetos.length) {
        elementoProjetos.textContent += projetos.charAt(contadorDeLetrasProjetos);
        contadorDeLetrasProjetos++;
        setTimeout(escreverProjetos, atraso);
    }
}
escreverMeus();