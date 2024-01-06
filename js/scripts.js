//Animação

const elementos=document.querySelectorAll('[data-anima]');
const animacaoClass='animacao';


function animaScroll(){
    const topoPaginaNaJanela=window.pageYOffset+((window.innerHeight*3)/4);// 3/4 da janela
    elementos.forEach(function(elemento){
        if(topoPaginaNaJanela > elemento.offsetTop){
            elemento.classList.add(animacaoClass);
        }
        else{
            elemento.classList.remove(animacaoClass);
        }
    });
}

if(elementos.length){
    window.addEventListener('scroll',function(){
        animaScroll();
    })
}


//Janela modal

function cliqueModal(img){
    const janelaModal = document.getElementById('janelaModal');
    const imgModal = document.getElementById('imgModal');
    const txtModal = document.getElementById('txtModal');
    const btnFechar = document.getElementById('btnFechar');

janelaModal.classList.remove("escondeJanelaModal");

janelaModal.classList.add("adicionarJanelaModal");

imgModal.src=img.src;
imgModal.alt=img.alt;
txtModal.innerHTML=img.alt;

btnFechar.onclick = function(){

    janelaModal.classList.add("escondeJanelaModal");
    janelaModal.classList.remove("mostraJanelaModal");
}
}