let largura;
let altura;

const fundo = document.getElementById('bg');

function ajustarTela() {
    largura = window.innerWidth;
    altura = window.innerHeight;

    //console.log(largura + ", " + altura);

    fundo.style.width = largura + "px";
    fundo.style.height = altura + "px";
};

window.addEventListener("resize", function(){
    ajustarTela();
});

ajustarTela();