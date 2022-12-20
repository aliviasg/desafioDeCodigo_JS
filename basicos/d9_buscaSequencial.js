/* Busca Sequencial */

let elementos = [64, 137, -16, 43, 67, 81, -90, 212, 10, 75];
let valor = parseInt(gets());
print(
    elementos.includes(valor) ?
    ('Achei ' + valor + ' na posicao ' + elementos.findIndex(index => index === valor)) :
    'Numero ' + valor + ' nao encontrado!'
);