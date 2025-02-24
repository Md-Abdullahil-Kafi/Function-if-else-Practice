maxNum(29, 126, 28);
// 1st Approch----------
function maxNum(num1, num2, num3){
    let maxNum = Math.max(num1, num2, num3);
    console.log(maxNum);
}

//2nd Approch-------

function maxNum(num1, num2, num3){
    if(num1 > num2 && num1 > num3){
        console.log(`${num1} is largest`);
    }else if(num2 > num1 && num2 > num3){
        console.log(`${num2} is largest`);
    }else{
        console.log(`${num3} is largest`);
    }
}