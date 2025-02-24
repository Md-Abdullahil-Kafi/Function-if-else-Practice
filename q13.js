bangla = 89;
english = 77;
math = 42;
ict = 45;
physics = 58;


isPass(bangla, english, math, ict, physics);

function isPass (a, b, c, d, e){
    if(a >= 33 && b >= 33 && c >= 33 && d >= 33 && e >= 33){
        console.log(`Congratulations! You passed this test.`)
    } else{
        console.log(`So Sorry!! Better Luck next time.`)
    }
}