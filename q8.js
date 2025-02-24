ObtainedMark(33);

function ObtainedMark (num){
    if(num > 100 || num < 0){
        console.log(`Opps!! Please input a Valid Number`)
    }else if(num >= 80){
        console.log(`A+`)
    }else if(num >= 70){
        console.log(`A`)
    }else if(num >= 60){
        console.log(`A-`)
    }else if(num >= 33){
        console.log(`Passed`)
    } else{
        console.log(`Failed`)
    }
}
