function burgerBus(arr) {
    let numCities = arr[0];
    let cityData = arr.slice(1);
    let totalProfit = 0.0;

    for (let i = 0; i < numCities; i++) {
        let cityName = cityData[i * 3];
        let income = parseFloat(cityData[i * 3 + 1]);
        let expenses = parseFloat(cityData[i * 3 + 2]);
        let profit = income - expenses;

        if ((i + 1) % 3 === 0 && (i + 1) % 5 !== 0) {
            profit -= expenses * 0.5;
        }
        if ((i + 1) % 5 === 0) {
            profit -= income * 0.1;
        }
        totalProfit += profit;
        console.log(`In ${cityName} Burger Bus earned ${profit.toFixed(2)} leva.`);
    }
    console.log(`Burger Bus total profit: ${totalProfit.toFixed(2)} leva.`);
}
burgerBus(["5",

"Lille",

"2226.00",

"1200.60",

"Rennes",

"6320.60",

"5460.20",

"Reims",

"600.20",

"452.32",

"Bordeaux",

"6925.30",

"2650.40",

"Montpellier",

"680.50",

"290.20"]);