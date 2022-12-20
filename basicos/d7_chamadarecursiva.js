/* Uma chamada recursiva */

let n = parseInt(gets());

function somatorio(n) {
    return n === 0 ? 0 : n + somatorio(n - 1);
}
print(somatorio(n));