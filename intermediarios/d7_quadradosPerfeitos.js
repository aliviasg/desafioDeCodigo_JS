/* Quadrados Perfeitos */

let lines = gets().split("\n"); 
let n = parseInt(lines.shift()); 

const dp = new Array(n + 1).fill(Infinity); 
dp[0] = 0; 

perfectSquares = [];

for(i = 0; i < parseInt(Math.sqrt(n)); i++) {
  perfectSquares.push(Math.pow(i + 1, 2));
}

for(i = 1; i <= n; i++) {
  for(perfectSquare of perfectSquares) {
    if(i - perfectSquare >= 0) {
      dp[i] = Math.min(dp[i], dp[i - perfectSquare] + 1);
    }
  }
}

print(dp[n] === Infinity ? -1 : dp[n]);