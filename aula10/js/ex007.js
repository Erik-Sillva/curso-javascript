function somar() {
    const tn1 = document.getElementById('txtn1');
    const tn2 = document.getElementById('txtn2');
    const res = document.getElementById('res');
    const n1 = Number(tn1.value);
    const n2 = Number(tn2.value);
    const soma = n1 + n2
    res.innerText = soma
}