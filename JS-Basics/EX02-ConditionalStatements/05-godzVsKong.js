function godzVsKong(input) {
    let budget = Number(input[0]);
    let statistNum = Number(input[1]);
    let priceForCostume = Number(input[2]);
    
    let decor = 0.1 * budget;
    let costumesP = statistNum * priceForCostume;
    let discount = 0;
    
    if (statistNum >= 150) {
         discount = 0.1 * costumesP;    
    } 
    
       let costumesAll = costumesP - discount;
       let totalPrice = decor + costumesAll;

    if (budget >= totalPrice) {
        let leftMoney = budget - totalPrice;
        console.log(`Action!`);
        console.log(`Wingard starts filming with ${leftMoney.toFixed(2)} leva left.`)
     } else { 
          let neededCash = totalPrice - budget;
          console.log(`Not enough money!`);
          console.log(`Wingard needs ${neededCash.toFixed(2)} leva more.`)
     }
    
}

godzVsKong(["9587.88",

"222",

"55.68"]);