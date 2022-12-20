/* Matriz Par e Impar */

let arr = gets().split(''); 
let arrVazio = []; 

for(i = 0; i < arr.length; i++) {
    if(arr[i] % 2 == 0){
        arrVazio.splice(0, 0, arr[i]);
    } else {
        arrVazio.splice(arrVazio.length, 0, arr[i]);
    }
}

print(arrVazio);