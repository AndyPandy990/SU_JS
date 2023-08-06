function trip (input) {
    let budget = Number(input[0]);
    let seazon = input[1];
    
    let discount = 0;
    let destination = "";
    let placeToSleep = 0;
    
    if (budget <= 100 && budget >= 0) {
        destination = "Bulgaria";
        if (seazon === "summer") {
           discount = 0.3 * budget;
           placeToSleep = "Camp";
        } else if (seazon === "winter") {
           discount = 0.7 * budget;
           placeToSleep = "Hotel";
        }
    } else if (budget <= 1000 && budget > 100) {
        destination = "Balkans";
        if (seazon === "summer") {
           discount = 0.4 * budget;
           placeToSleep = "Camp";
        } else if (seazon === "winter") {
           discount = 0.8 * budget;
           placeToSleep = "Hotel";
        }
    } else if (budget > 1000) {
        destination = "Europe";
        if (seazon == "summer" || seazon == "winter") {
           discount = 0.9 * budget;
           placeToSleep = "Hotel";
        }
    }
            console.log(`Somewhere in ${destination}`);
            console.log(`${placeToSleep} - ${discount.toFixed(2)}`);
}
trip(["50", "summer"]);