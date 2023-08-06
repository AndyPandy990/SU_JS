function petShop(input){
    let dogFoodCount = Number(input[0]);
    let catFoodCount = Number(input[1]);
        
        let dogFoodPrice = 2.50;
        let catFoodPrice = 4;
            let dogFoodPay = dogFoodCount * dogFoodPrice;
            let catFoodPay = catFoodCount * catFoodPrice;
            let sumPrice = dogFoodPay + catFoodPay;
        
        console.log(sumPrice);
}

petShop(["13", "9"]);

//1. Броят на опаковките храна за кучета – цяло число в интервала [0… 100]
//2. Броят на опаковките храна за котки – цяло число в интервала [0… 100