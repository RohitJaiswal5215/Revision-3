function numberOfWish(N, S) {   
   
    const obj = {};
    obj.w = 0;
    obj.i = 0;
    obj.s = 0;
    obj.h = 0;
   
    for(const char of S){
        if (obj[char] === 0) {
            obj[char] = 1;
        } else if(obj[char]>0) {
           obj[char] += 1;
        }
    }
   
    let min = +Infinity;
    for(let key in obj){
         min = Math.min(min,obj[key]);
    }
   
    console.log(min);   
}

numberOfWish(8, "wishwish")