// includes
// endSwith
// startSwith

let nomes = ['Raphael', 'Brito', 'Souza'];

console.log(nomes.includes('Brito')); //Verifica se existe

var nome1 = 'Pedro';

nomes.includes(nome1);

if(nomes.includes(nome1)){
    console.log(nome1 + ' Está na Lista');
}else{
    console.log(nome1 + ' Não esta na Lista');
}

console.log(nome1.endsWith('o')); // Acaba com o // retorna true/false
console.log(nome1.startsWith('c')); // Começa com c // retorna true/false

