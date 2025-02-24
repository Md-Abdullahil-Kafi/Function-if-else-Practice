let num1 = 15, num2 = 35;
inputNum(num1, num2)
function inputNum(a, b){
    let sum = a + b;
    if(sum === 50){
        console.log(`Yes. The sum of the two numbers is 50.`)
    }else{
        console.log(`No!!. The sum of the two numbers is not 50. it is "${sum}"`)
    }
}