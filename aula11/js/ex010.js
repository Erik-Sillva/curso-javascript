function verificar() {
    const pais = document.querySelector('input#idnac');
    const res = document.querySelector('span#mod1');

    if (pais.value == 'Brasil' || pais.value == 'BR') {
        res.innerHTML = 'Brasileiro!'
    } else {
        res.innerHTML = 'Estrangeiro!'
    }
}