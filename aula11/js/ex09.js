function calcular() {
    const txt = document.querySelector('input#txtvel');
    const res = document.querySelector('span#txtres');
    const vel = Number(txt.value);
    
    if (vel > 60.0) {
        res.innerHTML = `Velocidade: ${vel}km/h. multado!`
    } else {
        res.innerHTML = `Velocidade: ${vel}km/h. parabéns!`
    }
    res.innerHTML += `<p>Dirija sempre usando cinto de segurança!</p>`
}