//declaração de variavel
var player =  document.getElementById('play');

var ant = document.getElementById('ant');
var prox = document.getElementById('prox');
var img_play = document.getElementById('img_play');
var imagem = document.getElementById('principal');
var seek = document.getElementById('input');
var title = document.getElementById('title');


var addres = ["audio/music_1.m4a", "audio/music_2.m4a", "audio/music_3.m4a", "audio/music_4.m4a", "audio/music_5.m4a", "audio/music_6.m4a", "audio/music_7.m4a", "audio/music_8.m4a", "audio/music_9.m4a", "audio/music_10.m4a", "audio/music_11.m4a"];

var imgs = ["img/img_1.jpg", "img/img_2.jpg", "img/img_3.jpg", "img/img_4.jpg", "img/img_5.jpg", "img/img_6.jpg", "img/img_7.jpg", "img/img_8.jpg", "img/img_9.jpg", "img/img_10.jpg", "img/img_11.jpg",];

var nome = ["Backwards", "Grandpop's Uke", "Lately w_ RYCE & Biskwiq", "My Room w_ Wizard Island", "Never Had", "Sunday", " come true (ft. Forrest)", "fly away w_ khai dreams & atwood", "Lofi", "Sheesh", "Sunday Best"];



var pos = 1

function voltar(){
    pos -= 1;
    if (pos < 1){
        pos = 11;
    }
    player.src = addres[pos-1];
    imagem.src = imgs[pos-1];
    title.innerText = nome[pos-1];
    

    if (img_play.src != 'https://i.pinimg.com/564x/e0/67/e4/e067e4714184d3072b804504cc8843ff.jpg'){

        player.pause();
        player.play();
        
    }

    seek.value = 0;
}

function proximo(){
    pos += 1;
    if (pos > 11){
        pos = 1;
    }
    player.src = addres[pos-1];
    imagem.src = imgs[pos-1];
    title.innerText = nome[pos-1];

    if (img_play.src != 'https://i.pinimg.com/564x/e0/67/e4/e067e4714184d3072b804504cc8843ff.jpg'){

        player.pause();
        player.play();

    }
    
    seek.value = 0;
}

ant.addEventListener('click', function(){
    voltar();
})
prox.addEventListener('click', function(){
    proximo();
})



// Define um intervalo para verificar a cada segundo

let interval = setInterval(function() {

    seek.addEventListener('input', function(){
        player.currentTime = (seek.value / 100)*player.duration;

    })

    // Verifica se o áudio está tocando
    if (!player.paused && !player.ended) {

        seek.value = player.currentTime * (100 / player.duration);
    }

    if (player.ended){
        proximo();
    }
}, 1000);



// função de play e pause
// varifica se teve um click na img
img_play.addEventListener('click', function(){

    //verifica de a url é a url a seguir, e se for troca a imagem e inicia a musica
    if (img_play.src == 'https://i.pinimg.com/564x/e0/67/e4/e067e4714184d3072b804504cc8843ff.jpg'){

        img_play.src = 'https://i.pinimg.com/564x/2a/c7/a3/2ac7a39bf6021df0bac14e355f61a5c0.jpg';
        
        player.play();
    }
    // depois de varificar e v~e que não é a url ele deixa a imagem original e pausa a musica
    else{

        img_play.src = 'https://i.pinimg.com/564x/e0/67/e4/e067e4714184d3072b804504cc8843ff.jpg';

        player.pause();
    }
});