function fishingBoat(input) {
  let groupBudget = Number(input[0]);
  let season = input[1];
  let fishermanCount = Number(input[2]);

  let boatRent = 0;
  let discount = 0;
  let leftWith = 0;

  switch (season) {
    case "Summer":
      boatRent = 4200;
      break;
    case "Spring":
      boatRent = 3000;
      break;
    case "Autumn":
      boatRent = 4200;
      break;
    case "Winter":
      boatRent = 2600;
      break;
    default:
      break;
  }

  if (fishermanCount % 2 == 0 && season != "Autumn") {
    boatRent *= 0.95;
  }

  if (fishermanCount <= 6) {
    discount = boatRent * 0.9;
  } else if (fishermanCount >= 7 && fishermanCount <= 11) {
    discount = boatRent * 0.85;
  } else if (fishermanCount >= 12) {
    discount = boatRent * 0.75;
  }

  if (groupBudget < discount) {
    leftWith = discount - groupBudget;
    console.log(`Not enough money! You need ${leftWith.toFixed(2)} leva.`);
  } else {
    leftWith = groupBudget - discount;
    console.log(`Yes! You have ${leftWith.toFixed(2)} leva left.`);
  }
}
  
  fishingBoat(["0", "Winter", "13"]);
  