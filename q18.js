let num = 0;

isNum(num);
function isNum(x){
    if (x % 2 === 0 && x > 0){
        console.log(`${x} is a positive & Even Number`)
    }else if(x < 0){
        console.log(`${x} is a Negative Number`)
    }else if(x === 0){
        console.log(`${x} is a neutral number`)
    }else{
        console.log(`${x} is a Odd Number`)
    }
}