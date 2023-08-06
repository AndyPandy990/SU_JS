function foodDeliver(input) {
        let chikenMenuCount = Number(input[0]);
        let fishMenuCount = Number(input[1]);
        let vegMenuCount = Number(input[2]);

            let chikenMenuPrice = chikenMenuCount * 10.35;
            let fishMenuPrice = fishMenuCount * 12.40;
            let vegMenuPrice = vegMenuCount * 8.15;

                let totalMenuPrice = chikenMenuPrice + fishMenuPrice + vegMenuPrice;
                let dessertPrice = 0.2 * totalMenuPrice;

                let priceWithDessert = totalMenuPrice + dessertPrice;
                let priceWithDelivery = priceWithDessert + 2.50;

                console.log(priceWithDelivery);
}

foodDeliver(["2", "4", "3"]);
