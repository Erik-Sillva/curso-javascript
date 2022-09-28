let valores = [7, 5, 9, 2, 1]
console.log(`Formatação padrão: [${valores}]`);
console.log(`Formatação organizada: [${valores.sort()}]`);
valores.push(3)
console.log(`Adicionando um valor automático: [${valores}]`);
console.log(`O vetor acima tem: ${valores.length} posições`);
let pos = valores.indexOf(3);
console.log(`O valor 3 está na posição: ${pos}`);