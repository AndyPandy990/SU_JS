function accountBalance(input) {
    let index = 0;
    let balance = 0;

    let comma = input[index];
    index++;

    while (comma !== "NoMoreMoney") {
        let cash = Number(comma);
        if (cash < 0) {
            console.log("Invalid operation!");
            break;
        }
        balance += cash;
        console.log(`Increase: ${cash.toFixed(2)}`);

        comma = input[index];
        index++;
    }

    console.log(`Total: ${balance.toFixed(2)}`);
}
accountBalance(["5.51",
"69.42",
"100",
"NoMoreMoney"])