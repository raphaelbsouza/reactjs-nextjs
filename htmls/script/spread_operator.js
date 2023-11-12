function cadastroPessoa(info){
    let novosDados = {
        ...info,
        cargo: 'Programador',
        status: 1,
        codigo: '94933191'
    }
    return novosDados;
}

console.log(cadastroPessoa({nome:'Raphael', sobrenome: 'Souza', anoInicio: 2024}));