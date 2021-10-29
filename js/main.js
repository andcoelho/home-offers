'use strict';

const prencherFormulario = (endereco) => {
    document.getElementById('endereco').value = endereco.logradouro;
    document.getElementById('bairro').value = endereco.bairro;
    document.getElementById('cidade').value = endereco.localidade;
    document.getElementById('estado').value = endereco.uf;
}

const pesquisarCep = async() => { // função assíncrona
    const cep = document.getElementById("cep").value;
    const url = `https://viacep.com.br/ws/${cep}/json/`;
    //fetch(url).then(responde => responde.json()).then(console.log); //Retorna valor da URL
    const dados = await fetch(url); //await - aguardar a promessa de fetch
    const endereco = await dados.json(); //await pois json tbm é promessa
    prencherFormulario(endereco);
    
}


window.document.getElementById("cep").addEventListener('focusout', pesquisarCep);