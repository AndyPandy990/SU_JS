function cleverLilly(input) {
    let age = Number(input[0]);
    let washerPrice = Number(input[1]);
    let toyPrice = Number(input[2]);

    let bdMoney = 10;
    let sumSaved = 0;

    for (let curBd = 1; curBd <= age; curBd++) {
        if (curBd % 2 === 0) {
            sumSaved += (bdMoney - 1);

            bdMoney += 10;
        } else {
            sumSaved += toyPrice;
        }
    }

    if (sumSaved >= washerPrice) {
        let sumLeft = sumSaved - washerPrice;
        console.log(`Yes! ${sumLeft.toFixed(2)}`);
    } else {
        let sumNeeded = washerPrice - sumSaved;
        console.log(`No! ${sumNeeded.toFixed(2)}`)
    }
}
cleverLilly(["21",

"1570.98",

"3"]);