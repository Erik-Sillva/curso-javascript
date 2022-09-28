const promp = prompt('Digite um valor:');
const num = Number(promp);
const res = document.getElementById('res');
res.innerText = `Número digitado: ${num}`

for (let c = 1; c <= num; c++) {
    document.write(c, " | ");
}