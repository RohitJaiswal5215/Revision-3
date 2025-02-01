char1 =   "abcdefghijklmnopqrstuvwxyz"

char2 =   "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

number = "1234567890"

specialChars = "!@#$%&*"



function generatePassword(length , includeNumbers , includeSpecialChars){
    
    allCharters = char1 + char2

    if(includeNumbers){               
        allCharters+=number
    }
    if(includeSpecialChars){
        allCharters +=specialChars
    }


    includeOne = []

    if(includeNumbers){
        includeOne.push(  number[Math.floor(Math.random()*number.length)])
    }
    else{
        includeOne.push(  allCharters[Math.floor(Math.random()*allCharters.length)])
    }
    if(includeSpecialChars){
        includeOne.push(  specialChars[Math.floor(Math.random()*specialChars.length)])
    }
    else{
        includeOne.push(  allCharters[Math.floor(Math.random()*allCharters.length)])
    }


    for(i=0 ; i<length-2 ; i++ ){
        includeOne.push(  allCharters[Math.floor(Math.random()*allCharters.length)])
    }


    for(i=0 ; i<includeOne.length ; i++){
       num = Math.floor(Math.random()*includeOne.length)

       x= includeOne[i]

       includeOne[i] = includeOne[num]

       includeOne[num] =x

    }


    console.log(includeOne.join(''))

}

generatePassword(10 , true , true)