function toyStore(input) {
    let tripp = Number(input[0]);
    let puzle = Number(input[1]);
    let dolls = Number(input[2]);
    let tedds = Number(input[3]);
    let minions = Number(input[4]);
    let trucks = Number(input[5]);

    let puzleP = puzle * 2.60;
    let dollsP = dolls * 3;
    let teddsP = tedds * 4.10;
    let minionsP = minions * 8.20;
    let trucksP = trucks * 2;

    let toysP = puzleP + dollsP + teddsP + minionsP + trucksP;
    let toysCount = puzle + dolls + tedds + minions + trucks;

    if (toysCount >= 50) {
        toysP = 0.75 * toysP;
    }
    toysP = 0.9 * toysP;

    if (toysP >= tripp) {
        let rest = toysP - tripp;
        console.log(`Yes! ${rest.toFixed(2)} lv left.`);
    } else {
        let notEnought = tripp - toysP;
        console.log(`Not enough money! ${notEnought.toFixed(2)} lv needed.`);         
    }
}

toyStore(["320", "8", "2", "5", "5", "1"]);