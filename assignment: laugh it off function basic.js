var randomvar = "";
function laugh(num) {
    for (var i = 0; i < num; i++) {
        randomvar = randomvar + "ha" ;
    }
    randomvar = randomvar + "!";
    return randomvar;
}

console.log(laugh(5)) ;


var sound = "" ; 
function laugh(num) {
    for (var x = 0 ; x < num ; x++) {
        sound = sound + "ha" ;  
    }
    sound = sound +"!"; 
    return sound; 
}

console.log(laugh(5)) ;
