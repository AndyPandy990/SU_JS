function cinemaTicket(input) {
    let day = input[0];

    switch(day){
        case "Monday": day = 12; break;
        case "Tuesday": day = 12; break;
        case "Wednesday": day = 14; break;
        case "Thursday": day = 14; break;
        case "Friday": day = 12; break;
        case "Saturday": day = 16; break;
        case "Sunday": day = 16; break;

    }
    console.log(day);
}
cinemaTicket(["Sunday"]);