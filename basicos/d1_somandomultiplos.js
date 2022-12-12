/* Somando Múltiplos */

var a = parseInt(gets());
var N = parseInt(gets());
 
let sum = 0;

for(let i = a; i <= N; i++){
    if(i % a === 0){
        sum += i;
    }
}

print(sum)