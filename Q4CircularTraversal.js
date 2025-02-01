let matrix = [
    [1 , 2 , 3],
    [4 , 5 , 6],
    [7 , 8 , 9]
]

let n = matrix.length-1
bag = " "

for(let i = n  ; i>=0; i--){
    bag += matrix[i][0] + " "
}

for( let i=1; i<=n; i++){
    bag += matrix[0][i] + " "
}

for(let i = 1 ; i<=n; i++){
    bag += matrix[i][n] + " "
}

for(let i = n-1; i>0; i--){
    bag += matrix[n][i] + " "
}
console.log(bag)