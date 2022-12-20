/* FizzBuzz */

let resultado = gets();
print(fizzBuzz(resultado));

function fizzBuzz(n) {
  var aux = ((n % 3 === 0 ? 'Fizz' : '') + (n % 5 === 0 ? 'Buzz' : ''));
  return aux === '' ? n : aux;
}