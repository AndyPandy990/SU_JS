function cake(input) {
    let index = 0;
    
    let lenght = Number(input[index]);
    index++;
    
    let width = Number(input[index]);
    index++;
    
    let cakeSize = lenght * width;
    
    let command = input[index];
    index++;
    
    while (command !== "STOP") {
        let peacesCount = Number(command);
        
        cakeSize -= peacesCount;
        
        if (cakeSize <= 0) {
            console.log(`No more cake left! You need ${Math.abs(cakeSize)} pieces more.`);
            break;
        }
        
        command = input[index];
        index++;
    }
    if(command === "STOP") {
     console.log(`${cakeSize} pieces are left.`);
    }
}
cake(["10",

"2",

"2",

"4",

"6",

"STOP"]);