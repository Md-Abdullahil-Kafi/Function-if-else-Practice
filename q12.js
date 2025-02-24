leapYear(50507);
function leapYear (year){
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0){
        console.log(`${year} is Leap Year`);
    }else{
        console.log(`Opps!! ${year} is not Leap Year`)
    }
}