function christmasGift (input) {
    let index = 0;

    let command = input[index];
    index++;

    let ages = 0;
    let kid = 0;
    let adult = 0;
    let toys = 0;
    let sweaters = 0;

    while (command !== "Christmas") {
        ages = Number(command);

        if (ages <= 16) {
            kid++;

        } else if (ages > 16) {
            adult++;

        }

        command = input[index];
        index++;
    }

    toys = kid * 5;
    sweaters = adult * 15;
    
    console.log(`Number of adults: ${adult}`);
    console.log(`Number of kids: ${kid}`);
    console.log(`Money for toys: ${toys}`);
    console.log(`Money for sweaters: ${sweaters}`);

}
christmasGift(["16",
"16",
"16",
"16",
"16",
"Christmas"])
;