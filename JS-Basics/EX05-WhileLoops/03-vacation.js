function vacation(input) {
    let index = 0;
    
    let needMoneyForVacation = Number(input[index]);
    index++;
    
    let moneyIHave = Number(input[index]);
    index++;
    
    let counter = 0;
    let totalDaysPast = 0;
    
    while(moneyIHave < needMoneyForVacation) {
        let action = input[index];
        index++;
        
        let sum = Number(input[index]);
        index++;
        
        if (action === "save") {
            moneyIHave += sum;
            counter = 0;
        } else if (action === "spend") {
            
            if (sum > moneyIHave) {
                moneyIHave = 0;
            } else {
                moneyIHave -= sum;
            }
            
            counter++;
        }
        
        totalDaysPast++;
        
        if (counter === 5) {
            console.log("You can't save the money.");
            console.log(totalDaysPast);
            break;
        }
    }
    
    if(moneyIHave >= needMoneyForVacation) {
        console.log(`You saved the money for ${totalDaysPast} days.`);
    }
    
}
vacation(["2000",
            "1000",
            "spend",
            "1200",
            "save",
            "2000"]);