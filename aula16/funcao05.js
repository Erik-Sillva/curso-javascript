// MANEIRA RECURSIVA / RECURSIVIDADE

function fatorial(n) {
    if (n == 1) {
        return 1
    } else {
        return n * fatorial(n - 1);
    }
}

// 1° Pegara o valor do parâmetro e fará a subtração do mesmo menos (-) 1
// 2° Fará o fatorial desse resultado
// 3° E por fim irá multiplicar o valor inicial do parâmetro por esse fatorial

console.log(fatorial(5));

/*

5! = 5 x 4 x 3 x 2 x 1
5! = 5 x 4!

n! = n x (n-1)
1! = 1

*/