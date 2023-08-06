function shoppingPc(input) {
        let budget = Number(input[0]);
        let videoCardsCount = Number(input[1]);
        let processors = Number(input[2]);
        let ram = Number(input[3]);

        let videoPrice = 250;
        let vidByCount = videoCardsCount * videoPrice

        let processorPrice = 0.35 * vidByCount;
        let pricingForProcessors = processorPrice * processors;

        let ramPrice = 0.1 * vidByCount;
        let ramPriceForCount = ram * ramPrice;

        let batchPrice = vidByCount + pricingForProcessors + ramPriceForCount;
 
        if (videoCardsCount > processors) {
             batchPrice = batchPrice * 0.85;
        }

        if (batchPrice <= budget) {
            let leftWith = Math.abs(budget - batchPrice);

            console.log(`You have ${leftWith.toFixed(2)} leva left!`);
        } else {
            let leftWith = Math.abs(batchPrice - budget);

            console.log(`Not enough money! You need ${leftWith.toFixed(2)} leva more!`)
        }
        
}

shoppingPc(["900",

"2",

"1",

"3"]);