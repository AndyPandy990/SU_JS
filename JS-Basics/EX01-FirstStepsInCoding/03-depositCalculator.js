function depositCalculator(input){
        // depozirana suma- 100.00 _ 10000.00
        // v mesec- 1_12
        // godishen lihven procent- 0.00 _ 100.00

        let depositedSum = Number(input[0]);
        let depositPeriod = Number(input[1]);
        let annualInterestPercent = Number(input[2] / 100);

            let sum = depositedSum + depositPeriod * ((depositedSum * annualInterestPercent) / 12);
            console.log(sum);
 
}

depositCalculator(["200", "3", "5.7"]);
                //[  0  ] [1] [  2  ]