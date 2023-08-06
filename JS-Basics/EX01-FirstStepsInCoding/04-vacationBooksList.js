function vacayBookList(input) {
        // br stranici - 1_1000
        //stranici za 1 chas - 1_1000
        //broi na dnite - 1_1000
        let pagesCount = Number(input[0]);
        let pagesPerHour = Number(input[1]);
        let days = Number(input[2]);

        //pagesCount = 60
        //pagesPerHour = 20
        //hours = 3

        let totalHours = pagesCount / pagesPerHour;
        let hoursPerDay = totalHours / days;
        
        console.log(hoursPerDay);

}

vacayBookList(["432", "15", "4"]);