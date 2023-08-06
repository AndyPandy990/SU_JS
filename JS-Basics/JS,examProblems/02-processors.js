function processors(input) {
        let planedProcessors = Number(input[0]);
        let workersCount = Number(input[1]);
        let workingDays = Number(input[2]);

        let workH = 8;
        let timeToMakeOneProcessor = 3;
        let priceForOneProcessor = 110.10;

        let workedHours = workersCount * workingDays * workH;
        let totalMade = Math.floor(workedHours / timeToMakeOneProcessor);

        if (totalMade < planedProcessors) {
            let difference = planedProcessors - totalMade;
            let loss = difference * priceForOneProcessor;
            console.log(`Losses: -> ${loss.toFixed(2)} BGN`);
        } else {
            let difference = totalMade - planedProcessors;
            let win = difference * priceForOneProcessor;
            console.log(`Profit: -> ${win.toFixed(2)} BGN`);
        }

}
processors(["150", "7", "18"]);