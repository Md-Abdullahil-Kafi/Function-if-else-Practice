time = 6 ;

inputTime(time);

function inputTime (time){
    if (time >= 6 && time < 12){
        console.log(`Now time is morning at ${time} AM`);
    }else if(time >= 12 && time < 18){
        let pm = time - 12;
        if(pm === 0){
            console.log(`Now time is Afternoon at 12 PM`)
        }else{
            console.log(`Now time is Afternoon at ${pm} PM`);
        }  
    }else if((time >= 18 && time <= 24) || (time >=1 && time < 6)){
        let pm = time - 12;
        if(time >=1 && time < 6){
            console.log(`Now time is morning at ${time} AM`);
        }else if(pm === 0){
            console.log(`Now time is Night at 12 AM`)
        }
        else{
            console.log(`Now time is Night at ${pm} PM`);
        }
    }else{
        console.log(`Please input a valid Time`)
    }
}

