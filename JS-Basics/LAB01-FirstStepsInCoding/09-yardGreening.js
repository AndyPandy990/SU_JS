function yardGreening(input){
        let squareMeterCount = Number(input[0]);
        let squareMeterPrice = 7.61;
        let discountPercent = 0.18;
        let totalPrice = squareMeterCount * squareMeterPrice;
        let totalDiscount = discountPercent * totalPrice;
        let finalPrice = totalPrice - totalDiscount;


        console.log(`The final price is: ${finalPrice} lv.`);
        console.log(`The discount is: ${totalDiscount} lv.`);
        
}

yardGreening(["150"]);