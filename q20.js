let a = 33, b = 131;
isMultiple(a, b);
function isMultiple (a, b){
    let multiple = a * b;
    if(a > b){
        if (multiple % a === 0){
            console.log(`yes. Divission Possible`);
        }else{
            console.log(`No!. Divission not Possible`);
        }
    }else if(b > a){
        if (multiple % b === 0){
            console.log(`yes. Divission Possible`);
        }else{
            console.log(`No!. Divission not Possible`);
        }
    }
}