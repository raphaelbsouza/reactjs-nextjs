//localStorage = salva no navegador do usuário
//sessionStorage = somente quando o navegador estiver aberto.

/*
localStorage.getItem("nome", "Raphael");
"Raphael"
localStorage.getItem(nome)
null
localStorage.getItem("nome")
"Raphael"
localStorage.removeItem("nome");
undefined 
localstorage.nome;
"Raphael"
*/

var nome = '';

if( typeof localStorage.nome == 'undefined'){
    localStorage.nome = prompt("Digite seu nome?");
}

nome = localStorage.nome;

document.getElementById('nome').innerHTML = document.write("Seu nome é :"+ nome);