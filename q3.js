studentNum(122);

function studentNum (num){
    if(num > 100 || num < 0){
        console.log(`Please input Accuret Number`)
    }else if(num >= 33){
        console.log(`Pass`)
    }else{
        console.log(`Fail`)
    }
}