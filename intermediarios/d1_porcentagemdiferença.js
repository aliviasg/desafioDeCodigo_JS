/* Porcentagem de Diferença Entre Dois Números */

let A = parseInt(gets()), B= parseInt(gets()); 
let  percentual = (B-A)/A*100; 

print(Math.trunc(percentual) + "%")