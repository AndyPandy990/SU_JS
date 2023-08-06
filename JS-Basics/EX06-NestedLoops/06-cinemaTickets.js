function cinemaTickets(input) {
    let studentTic = 0;
    let standardTic = 0;
    let kidTic = 0;
    
    let index = 0;
    
    let command = input[index];
    index++;
    
    while (command !== "Finish") {
        let movieName = command;
        
        let availableSeats = Number(input[index]);
        index++;
        
        let command1 = input[index];
        index++;
        
        let placesTaken = 0;
        
        while (command1 !== "End") {
            let ticketType = command1;
            placesTaken++;
            
            if (ticketType === "student") {
                studentTic++;
            } else if (ticketType === "standard") {
                standardTic++;
            } else if (ticketType === "kid") {
                kidTic++;
            }
            
            if (placesTaken === availableSeats) {
                break;
            }
            command1 = input[index];
            index++;
        }
        let percentTaken = (placesTaken / availableSeats) * 100;
        console.log(`${movieName} - ${percentTaken.toFixed(2)}% full.`);
        
        command = input[index];
        index++;
    }
    
    let totalTickets = studentTic + standardTic + kidTic;
    console.log(`Total tickets: ${totalTickets}`);
    
    let studentTicPerc = (studentTic / totalTickets) * 100;
    let standardTicPerc = (standardTic / totalTickets) * 100;
    let kidTicPerc = (kidTic / totalTickets) * 100;
    
    console.log(`${studentTicPerc.toFixed(2)}% student tickets.`);
    console.log(`${standardTicPerc.toFixed(2)}% standard tickets.`);
    console.log(`${kidTicPerc.toFixed(2)}% kids tickets.`);
    
}
cinemaTickets(["The Matrix",
                "20",
                "student",
                "standard",
                "kid",
                "kid",
                "student",
                "student",
                "standard",
                "student",
                "End",
                "The Green Mile",
                "17",
                "student",
                "standard",
                "standard",
                "student",
                "standard",
                "student",
                "End",
                "Amadeus",
                "3",
                "standard",
                "standard",
                "standard",
                "Finish"]);