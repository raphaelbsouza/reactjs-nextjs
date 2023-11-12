//Este é o meu nome
//var name = "Raphael";

/*
este é
este é
*/

//Função entrar
//*
function entrar(){
    var area = document.getElementById('area');
    var texto = prompt('Qual o seu nome?');

    if(texto == '' || texto == null){
        alert('Digite seu nome novamente')
        area.innerHTML = 'Bem vindo ... Digite Novamente o seu nome!'
    }else{
        area.innerHTML = 'Bem vindo ' + texto;
    }
}

function entrar2(){
    var area = document.getElementById('area2');
    var texto = prompt('Qual o seu sobrenome.');
}

var lista = [ "Nome1", "Nome2", "Nome3", "Nome4"]
