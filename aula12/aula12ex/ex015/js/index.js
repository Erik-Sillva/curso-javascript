function verificar() {
    const date = new Date();
    const ano = date.getFullYear();
    const fAno = document.getElementById('txtano');
    const res = document.getElementById('res');

    if (fAno.value == 0 || Number(fAno.value) > ano) {
        alert('[ERRO] Ano de nascimento inválido. Tente novamente!');
    } else {
        const idade = ano - Number(fAno.value);
        let fsex = document.getElementsByName('radsex');
        let genero = ''
        let img = document.createElement('img');
        img.setAttribute('id', 'img');

        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade <= 10) {
                img.setAttribute('src', './img/crianca-h.jpg');
            } else if (idade < 21) {
                img.setAttribute('src', './img/jovem-h.jpg');
            } else if (idade < 50) {
                img.setAttribute('src', './img/adulto-h.jpg');
            } else {
                img.setAttribute('src', './img/idoso-h.jpg');
            }
        } else {
            genero = 'Mulher'
            if (idade >= 0 && idade <= 10) {
                img.setAttribute('src', './img/crianca-m.jpg');
            } else if (idade < 21) {
                img.setAttribute('src', './img/jovem-m.jpg');
            } else if (idade < 50) {
                img.setAttribute('src', './img/adulto-m.jpg');
            } else {
                img.setAttribute('src', './img/idoso-m.jpg');
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos de idade`
        res.appendChild(img);
        img.style.maxWidth = '250px'
    }
}