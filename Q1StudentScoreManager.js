
let score = [15,56,5,77,78,98,66,12,46,88]
let count = 0

for(i=0; i<score.length; i++){
    if(score[i] < 40){
        score[i] += 20
    }

    if(score[i] > 90){
        score[i] = 90
    }      
   
}

for(i=0; i<score.length; i++){
    if(score[i] >= 50){
        count++
    }
}
console.log(score)
console.log(count)




