const area = document.getElementById('area');
area.addEventListener('mouseenter', entrar);
area.addEventListener('click', clicou);
area.addEventListener('mouseout', saiu);

function entrar() {
    area.innerText = 'Entrou!'
    area.style.opacity = '.8'
}

function clicou() {
    area.innerText = 'Clicou!'
}

function saiu() {
    area.innerText = 'Saiu!'
    area.style.opacity = '1'
}