var playNowRandom;

const lstSom = [
    "#som_tecla_pom", 
    "#som_tecla_clap", 
    "#som_tecla_tim",
    "#som_tecla_puff",
    "#som_tecla_splash",
    "#som_tecla_toim",
    "#som_tecla_psh",
    "#som_tecla_tic",
    "#som_tecla_tom"
];

function playSom(target) {
    let elemento = document.querySelector(target);

    if (elemento && elemento.localName === 'audio') {
        elemento.play();
    }
}

function playSomRandom() {
        let indexSom = Math.floor( Math.random() * lstSom.length );
        playSom( lstSom[ indexSom] );
}

let listaDeTeclas = document.querySelectorAll('.tecla');

for (let i = 0; i < listaDeTeclas.length; i++) {
    let tecla = listaDeTeclas[i];
    let instrumento = tecla.classList[1];
    let idAudio = `#som_${instrumento}`;

    tecla.onclick = function () {
        playSom(idAudio);
    }

    tecla.onkeydown = function (){
        if (evento.code === 'Space' || evento.code === 'Enter') {
            tecla.classList.add('ativa');
        }
    }

    tecla.onkeyup = function (){
        tecla.classList.remove('ativa');
    }
}


document.querySelector('.btn_random').onclick = function(){
    const tecla = document.querySelector('.btn_random');

    
    if (tecla.classList.contains('ativa')){
        tecla.classList.remove('ativa');
        clearInterval(playNowRandom);
    }else if (!tecla.classList.contains('ativa')){
        playNowRandom = setInterval(playSomRandom, 1000);
        tecla.classList.add('ativa');
    }
}


