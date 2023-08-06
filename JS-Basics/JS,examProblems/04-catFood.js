function catFood(input) {
    let catCount = Number(input[0]);

    let group1 = 0;
    let group2 = 0;
    let group3 = 0;
    let foodPerDay = 0;
    let foodPriceForDay = 0;

    for (let x = 0; x < catCount; x++) {
        let grams = Number(input[x + 1]);

        if (100 <= grams && grams < 200) {
            group1 += 1
        } else if (200 <= grams && grams < 300) {
            group2 += 1;
        } else if (300 <= grams && grams <= 400) {
            group3 += 1;
        }
                      
        foodPerDay += grams;
    }

    foodPriceForDay = (foodPerDay / 1000) * 12.45;

    console.log(`Group 1: ${group1} cats.`);
    console.log(`Group 2: ${group2} cats.`);
    console.log(`Group 3: ${group3} cats.`);
    console.log(`Price for food per day: ${foodPriceForDay.toFixed(2)} lv.`);
}
catFood(["6",
"102",
"236",
"123",
"399",
"342",
"222"]);
