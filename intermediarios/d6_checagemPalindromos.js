/* Checagem de Palíndromos */

let palavra = gets();
let aux = palavra.length;

function checaPalindromo(entrada){
for(i=0;i<entrada.length;i++){
    aux--;
    if(entrada[i]==entrada[aux]){
    } else {
        return `FALSE`;
        break;
    }
}
return `TRUE`;
}

print(checaPalindromo(palavra));