function cinema(input) {
        let movieType = input[0];
        let rows = Number(input[1]);
        let cols = Number(input[2]);

        let ticketsCount = rows * cols;
        let ticketsPrice = 0;

        if(movieType === "Premiere") {
            ticketsPrice = ticketsCount * 12;
        } else if (movieType === "Normal") {
            ticketsPrice = ticketsCount * 7.5;
        } else {
            ticketsPrice = ticketsCount * 5;
        }

        console.log(`${ticketsPrice.toFixed(2)} leva`);
}

cinema(["Discount", "12", "30"]);