function miningRig(input) {
    let vidCardP = Number(input[0]);
    let transientP = Number(input[1]);
    let elConsumptionP = Number(input[2]);
    let profitFromOneCardADay = Number(input[3]);

    let vidCount = 13;
    let transCount = 13;
    let restOfRig = 1000;

    let cardsPrice = vidCardP * vidCount;
    let transPrice = transientP * transCount;
    let totalSpentCash = cardsPrice + transPrice + restOfRig;
    let profFromcards = profitFromOneCardADay - elConsumptionP;
    let totalProfForDay = vidCount * profFromcards;
    let daysToDebthEnd = totalSpentCash / totalProfForDay;

    console.log(totalSpentCash);
    console.log(Math.ceil(daysToDebthEnd));

}
miningRig(["700",
            "15",
            "0.20",
            "2"]);