// some = algum
// every = todos

let nomes = [
    {nome: 'Raphael', idade: 18},
    {nome: 'Brito',  idade: 15},
    {nome: 'Souza', idade: 35}
];

//console.log(nomes.some(nomes => nomes === 'Brito')); //existe algum Brito na lista?

console.log(nomes.every(nome => nome.idade >= 18)); /// todos São maiores do que 18 anos?
