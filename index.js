
// cac 
const botaoCalcular = document.getElementById('enviar-cac');

botaoCalcular.addEventListener('click', (event) => {
    event.preventDefault();

    const investimento = parseFloat(document.querySelector('#investimento').value.replace(',', '.'));
    const clientes = parseFloat(document.querySelector('#clientes').value.replace(',', '.'));
    const cac = investimento / clientes;

    const resultado = document.querySelector('.result__cac');
    resultado.innerHTML = `O seu CAC é de R$${cac.toFixed(2)}`;
});

// ctr
const botaoCalcular2 = document.getElementById('enviar-ctr');

botaoCalcular2.addEventListener('click', (event) => {
    event.preventDefault();

    const cliques = parseFloat(document.querySelector('#cliques').value.replace(',', '.'));
    const impressoes = parseFloat(document.querySelector('#impressoes').value.replace(',', '.'));
    const ctr = cliques / impressoes;

    const resultado = document.querySelector('.result__ctr');
    resultado.innerHTML = `O seu CTR é de ${ctr.toFixed(2)}%`;
});


// cpc
const botaoCalcular3 = document.getElementById('enviar-clicks');

botaoCalcular3.addEventListener('click', (event) => {
    event.preventDefault();

    const investimento2 = parseFloat(document.querySelector('#investimento2').value.replace(',', '.'));
    const cpc = parseFloat(document.querySelector('#cpc').value.replace(',', '.'));
    const clicks = investimento2 / cpc;

    const resultado = document.querySelector('.result__clicks');
    resultado.innerHTML = `O seu Clique é de ${clicks.toFixed(2)}`;
});






