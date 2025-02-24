let pass = '12a68v44';

isCharecter(pass);
function isCharecter(input){
    if(input.length > 8){
        console.log(`The password you provided is longer than 8 characters.`);
    }else if(input.length < 8){
        console.log(`The password you provided is less than 8 characters long.`);
    }else{
        console.log(`Login Successfully.`)
    }
}