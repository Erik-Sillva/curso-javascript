function carregar() {
    const msg = document.getElementById('msg');
    const img = document.getElementById('img');
    const data = new Date();
    const hora = data.getHours();
    const min = data.getMinutes();
    
    if (hora >= 0 && hora < 12) {
        document.body.style.background = '#f4c3a1'  
        msg.innerText = `Agora são ${hora}:${min} horas, Bom Dia!`
        img.src = './img/manha.png'
    } else if (hora >= 12 && hora <= 18) {
        document.body.style.background = '#b9846f'
        msg.innerText = `Agora são ${hora}:${min} horas, Boa Tarde!`
        img.src = './img/tarde.png'
    } else {
        document.body.style.background = '#202328'
        msg.innerText = `Agora são ${hora}:${min} horas, Boa Noite!`
        img.src = './img/noite.png'
    }
}