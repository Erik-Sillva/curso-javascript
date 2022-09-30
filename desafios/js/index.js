let num = document.querySelector('input#inum');
let list = document.querySelector('select#iinfo');
let res = document.querySelector('div#res');
let valores = []

function isNumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {   //Verifica se o número está entre 1 e 100, se sim retorna true
        return true
    } else {
        return false
    }
}

function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1) {  //Vai procurar o valor de n dentro de l, se ele achar retorna true
        return true
    } else {
        return false        
    }
}

function add() {
    if (isNumero(num.value) && !inLista(num.value, valores)) {
        valores.push(Number(num.value));
        let item = document.createElement('option');
        item.text = `O valor ${num.value} foi adicionado`
        list.appendChild(item);
        res.innerHTML = ''
    } else {
        alert('Valor inválido ou já encontrado na lista!');
    }
    num.value = ''
    num.focus();
}

function finalizar() {
    if (valores.length == 0) {
        alert('Adicione valores antes de finalizar');
    } else {
        let tot = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0
        for (const pos in valores) {
            soma += valores[pos]
            if (valores[pos] > maior) {
                maior = valores[pos]
            } else if (valores[pos] < menor) {
                menor = valores[pos]
            }
        }
        media = soma / tot
        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo, temos <strong> ${tot} </strong> valores cadastrados</p>`
        res.innerHTML += `<p>O maior valor digitado foi <strong>${maior}</strong></p>`
        res.innerHTML += `<p>O menor valor digitado foi <strong>${menor}</strong></p>`
        res.innerHTML += `<p>A soma total de todos os valores são <strong>${soma}</strong></p>`
        res.innerHTML += `<p>A média de todos os valores são <strong>${media}</strong></p>`
    }
}