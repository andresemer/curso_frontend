const form = document.getElementById('form-validacao');

//ao clicar no botao, relizar o script
form.addEventListener('submit', function(e){
    //fazer as informacoes n sumirem da tela ao clicar no botao
    e.preventDefault();

    //pegar as informacoes do form
    const x = document.getElementById('numero-a').value;
    const y = document.getElementById('numero-b').value;

    //transformar as informacoes em numero
    const valorA = Number (x);
    const valorB = Number (y);

    const msgSucesso = document.querySelector('.msg-positiva');
    const msgNegativa = document.querySelector('.msg-negativa');

    const txtSucesso = `${y} é maior que ${x}`;
    const txtNegativo = `${y} não é maior que ${x}`;

    if (valorB > valorA) {
        msgSucesso.innerHTML = txtSucesso;
        msgNegativa.innerHTML = '';
        msgSucesso.style.display = 'block';
        msgNegativa.style.display = 'none'
    } else {
        msgNegativa.innerHTML = txtNegativo;
        msgSucesso.innerHTML = '';
        msgNegativa.style.display = 'block';
        msgSucesso.style.display = 'none'
    }

    x.value = '';
    y.value = '';
})

