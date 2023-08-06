function vacation(peopleCount, groupType, day) {
    
    let grandTotal = 0;
    
    switch (groupType) {
        case "Students":
            if (day === "Friday") {
                grandTotal = peopleCount * 8.45;
                
            } else if (day === "Saturday") {
                grandTotal = peopleCount * 9.80;
            } else if (day === "Sunday") {
                grandTotal = peopleCount * 10.46;
            }
            if (peopleCount >= 30) {
                    grandTotal = grandTotal * 0.85;
            }
        break;
        case "Business":
            if (peopleCount >= 100) {
                peopleCount = peopleCount - 10;
            }
            if (day === "Friday") {
                grandTotal = peopleCount * 10.90;
            } else if (day === "Saturday") {
                grandTotal = peopleCount * 15.60;
            } else if (day === "Sunday") {
                grandTotal = peopleCount * 16;
            }
        
        break;
        case "Regular":
            if (day === "Friday") {
                grandTotal = peopleCount * 15;
            } else if (day === "Saturday") {
                grandTotal = peopleCount * 20;
            } else if (day === "Sunday") {
                grandTotal = peopleCount * 22.50;
            }
            if (peopleCount >= 10 && peopleCount <= 20) {
                grandTotal = grandTotal * 0.95;
            }
        break;
    }
    console.log(`Total price: ${grandTotal.toFixed(2)}`);
}
vacation([30,
    "Students",
    "Sunday"]);