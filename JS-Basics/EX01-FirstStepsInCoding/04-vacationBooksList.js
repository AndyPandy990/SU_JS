function vacayBookList(input) {

        let pagesCount = Number(input[0]);
        let pagesPerHour = Number(input[1]);
        let days = Number(input[2]);
        let totalHours = pagesCount / pagesPerHour;
        let hoursPerDay = totalHours / days;
        
        console.log(hoursPerDay);

}

vacayBookList(["432", "15", "4"]);
