function tradeCommisions(input) {
    let city = input[0];
    let cash = Number(input[1]);

    let commission = 0;

    if (cash < 0) {
        console.log("error");
        return;
    }

    switch(city) {

        case "Sofia": {
            if (cash > 10000) {
                commission = cash * (12 / 100);
            }
            else if (cash > 1000 && cash <= 10000) {
                commission = cash * (8 / 100);
            }
            else if (cash > 500 && cash <= 1000) {
                commission = cash * (7 / 100);
            }
            else if (cash >= 0 && cash <= 500) {
                commission = cash * (5 / 100); 
            }
            break;
        }

        case "Varna": {
            if (cash > 10000) {
                commission = cash * (13 / 100);
            }
            else if (cash > 1000 && cash <= 10000) {
                commission = cash * (10 / 100);
            }
            else if (cash > 500 && cash <= 1000) {
                commission = cash * (7.5 / 100);
            }
            else if (cash >= 0 && cash <= 500) {
                commission = cash * (4.5 / 100); 
            }
            break;
        }

        case "Plovdiv": {
            if (cash > 10000) {
                commission = cash * (14.5 / 100);
            }
            else if (cash > 1000 && cash <= 10000) {
                commission = cash * (12 / 100);
            }
            else if (cash > 500 && cash <= 1000) {
                commission = cash * (8 / 100);
            }
            else if (cash >= 0 && cash <= 500) {
                commission = cash * (5.5 / 100); 
            }
            break;
        } 

        default:
            console.log("error");
            return;
    }

    if (isNaN(cash)) {
        console.log("error");
        return;
    }

    console.log(commission.toFixed(2));
}

tradeCommisions(["Plovdiv", "-20"]);
