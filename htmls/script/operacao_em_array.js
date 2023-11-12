//map = percorre a lista
//index = posição

const lista = [1,2,3,4,5,6];

const novaLista = lista.map(function(item, index){
    return item * index;
});

console.log(novaLista); 

const soma = lista.reduce(function(total, proximoitem){
    return total + proximoitem;
});

console.log(soma); //pega o total e soma com o proximo item

const find = lista.find(function(item){
    return item == 6;
});

console.log(find); //procura o item