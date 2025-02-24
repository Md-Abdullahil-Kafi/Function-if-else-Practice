let a = 13, b = 5, c = 33;

isSingle(a, b, c);
function isSingle(a, b, c){
    if(a < 10 && a > 0){
        console.log(`1st ${a} is single-digit`)
    }else if(b < 10 && b > 0){
        console.log(`2nd ${b} is single-digit`)
    }else if(c < 10 && c > 0){
        console.log(`3rd ${c} is single-digit`)
    }else{
        console.log(`The input numbers are ${a}, ${b}, ${c}`)
    }
}