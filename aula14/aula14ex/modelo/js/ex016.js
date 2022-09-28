function contar() {
    const inp1 = document.getElementById('ini');
    const inp2 = document.getElementById('fim');
    const inp3 = document.getElementById('pas');
    const msg = document.getElementById('msg');
    const res = document.getElementById('res');
    const ini = Number(inp1.value)
    const fim = Number(inp2.value)
    const pas = Number(inp3.value)
    res.innerHTML = ''

    if (inp1.value.length == 0 || inp2.value.length == 0 || inp3.value.length == 0 || pas == 0) {
        alert('[ERRO] Dados inválidos');
        msg.innerHTML = 'Impossível contar!'
        res.innerHTML = 'Verifique os dados e tente novamente!'
    } else {
        if (ini <= fim) {
            for (let cont = ini; cont <= fim; cont += pas) {
                msg.innerHTML = 'Contagem:'
                res.innerHTML += `${cont} \u{27A1} ` 
            }
        } else {
            for (let cont = ini; cont >= fim; cont -= pas) {
                msg.innerHTML = 'Contagem:'
                res.innerHTML += `${cont} \u{27A1} ` 
            }
        }
        res.innerHTML += `\u{1F3C1}`
    }
}