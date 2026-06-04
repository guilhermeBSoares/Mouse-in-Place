// Variáveis
let largura = window.innerWidth;
let altura = window.innerHeight

let posX = 15;

let aceleracao = 2;
let velocidade = 0;
let VELOCIDADE_MAXIMA = 15;

// Constantes
const fundo = document.getElementById('bg');

/* --- */

// Novo objeto para usar de personagem
const player = new Image();
player.id = "player";
player.style.width = 50 + "px";
player.style.height = 50 + "px";
player.style.top = 85 + "%";
player.style.transform = `translateX(${posX}px)`;

fundo.appendChild(player)

// Function responsável por fazer o player se mexer
window.addEventListener("keydown", function (e) {
    if (e.code === "KeyD") {
        velocidade += aceleracao;
        if (velocidade > VELOCIDADE_MAXIMA) 
        {
            velocidade = VELOCIDADE_MAXIMA;
        }
        posX += velocidade;

    }
    if (e.code === "KeyA") {
        velocidade += aceleracao;
        {
            if (velocidade > VELOCIDADE_MAXIMA) velocidade = VELOCIDADE_MAXIMA;
        }
        posX -= velocidade;
    }
    if (e.code === "Space") {
        player.style.backgroundColor = "red";
        this.setInterval(function(){
            player.style.backgroundColor = "yellowgreen";
        }, 1000);
    }
    player.style.transform = `translateX(${posX}px`;
});

window.addEventListener("keyup", function (e) {
    if (e.code === "KeyD" || e.code === "KeyA") {
        velocidade = 0;
    }
});

/* --- */

//Function responsável por ajustar o tamanho da div bg
function ajustarTela() {
    largura = window.innerWidth;
    altura = window.innerHeight;

    //console.log(largura + ", " + altura);

    fundo.style.width = largura + "px";
    fundo.style.height = altura + "px";

    player.style.left = posX + "px";
};

window.addEventListener("resize", function () {
    ajustarTela();
});

ajustarTela();