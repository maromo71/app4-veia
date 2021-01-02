const controlador = require('./js/controlador');


//Pegar todos os botões númericos pelo evento click
let botoes = document.querySelectorAll("button.btn");
let caixa = document.querySelector("#caixa-texto");

let botaoDisparado = null;
botoes.forEach((btn, index)=>{
    btn.addEventListener('click', e=>{
        console.log(btn.id.replace("btn",""));
        botaoDisparado = btn.id.replace("btn","");
        controlador.jogar(botoes, btn, caixa);
    })
})


