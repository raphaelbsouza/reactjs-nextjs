/*function minhaLista(...nomes){
    console.log(nomes);
}

minhaLista("Raphael","José","Miguel");
*/

function cadastrar(usuarios, ...novosUsuarios){
    let totalUsuarios = [
        ...usuarios,
        ...novosUsuarios
    ];

    return console.log(totalUsuarios);
}

let usuarios = ["Raphael", "João"];

let novosUsuarios = cadastrar(usuarios, "Henrique", "Lucas");