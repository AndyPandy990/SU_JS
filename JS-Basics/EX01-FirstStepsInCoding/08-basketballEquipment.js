function basketExpenses(input) {
    let totalYearPrice = Number(input[0]);

    let basketballShoesPrice = totalYearPrice * 0.6;
    let basketballTeamPrice = basketballShoesPrice * 0.8;
    let basketballPrice = basketballTeamPrice / 4;
    let basketballAcPrice = basketballPrice / 5;

    let total = totalYearPrice + basketballShoesPrice + basketballTeamPrice + basketballPrice + basketballAcPrice;
     
  
  
  console.log(total);
  
}

basketExpenses(["550"]);