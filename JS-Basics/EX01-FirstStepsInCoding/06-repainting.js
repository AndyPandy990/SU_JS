function repainting(input){
        let plasticNailon = Number(input[0]);
        let paint = Number(input[1]);
        let aceton = Number(input[2]);
        let baggyes = Number(input[3]);

        let plastiNailonQM = 1.50;
        let paintL = 14.50;
        let acetonL = 5.00;
        let baggyesPrice = 0.40;

        let plasticTotal = (plasticNailon + 2) * plastiNailonQM;
        let paintTotal = (paint * 1.1) * paintL;
        let acetonTotal = aceton * acetonL;
        let grandTotal = plasticTotal + paintTotal + acetonTotal + baggyesPrice;
        let workersTotal = (grandTotal * 0.3) * baggyes;
        let total = workersTotal + grandTotal;
        
        console.log(total);

} 

repainting(["10", "11", "4", "8"]);
