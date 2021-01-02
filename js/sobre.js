const { ipcRenderer, shell } = require('electron');
const process = require('process');

let linkFechar = document.querySelector("#link-fechar");
let linkMaromo = document.querySelector("#link-maromo");
let versaoElectron = document.querySelector('#versao-electron');

window.onload = function(){
    versaoElectron.textContent = process.versions.electron;
}
linkMaromo.addEventListener('click', ()=>{
    shell.openExternal("https://github.com/maromo71");
});

linkFechar.addEventListener('click', function(){
    ipcRenderer.send('fechar-janela-sobre');
});