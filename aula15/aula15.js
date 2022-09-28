/*
    ---------- METÓDO TRADICIONAL ----------

    for (let key = 0; key < num.length; key++) {
        console.log(`A posição ${key} tem o valor ${num[key]}`);
    }

*/

//    ---------- METÓDO SIMPLIFICADO ----------

console.log(num);
console.log(`O vetor tem ${num.length} posições`);

for (const key in num) {
    console.log(`A posição ${key} tem o valor ${num[key]}`);
}