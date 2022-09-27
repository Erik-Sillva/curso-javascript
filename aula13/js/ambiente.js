const a = prompt('Digite um valor:');
const num = Number(a);
const cont = 1
const res = document.getElementById('res');
res.innerHTML = num

// while (cont <= num) {
//     document.write(cont, ' | ')
//     cont++
// }

do {
    document.write(cont, ' | ')
    cont++
} while (cont <= num)