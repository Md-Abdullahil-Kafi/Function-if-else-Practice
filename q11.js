sumNum(33, 49, 9);

function sumNum (num1, num2, num3){
    let sum = num1 + num2 + num3;
    if(sum >= 100){
        console.log(`The sum of the 3 numbers here is more than 100.`)
    }else{
        console.log(`Here the sum of 3 numbers is less than 100 and the sum is "${sum}"`)
    }
}