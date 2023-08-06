function hotelRoom(input) {
    let month = input[0];
    let nightStaysCount = Number(input[1]);

    let studio = 0;
    let apartment = 0;
    let studioDiscount = 0;
    let apartmentDiscount = 0;
    let allStayStudio = 0;
    let allStayApartment = 0;

    if (month == "May" || month == "October") {

        studio = 50;
        apartment = 65;
        if (nightStaysCount >= 8 && nightStaysCount < 14) {

            studioDiscount = studio * (95 / 100);
            allStayStudio = studioDiscount * nightStaysCount;
            allStayApartment = apartment * nightStaysCount;
        } else if (nightStaysCount >= 15) {

            studioDiscount = studio * (70 / 100);
            apartmentDiscount = apartment * (90 / 100);

            allStayStudio = studioDiscount * nightStaysCount;
            allStayApartment = apartmentDiscount * nightStaysCount;
        } else {
            allStayStudio = studio * nightStaysCount;
            allStayApartment = apartment * nightStaysCount;
        }
        
    } else if (month == "June" || month == "September") {

        studio = 75.20;
        apartment = 68.70;
        if (nightStaysCount >= 15) {

            studioDiscount = studio * (80 / 100);
            apartmentDiscount = apartment * (90 / 100);

            allStayStudio = studioDiscount * nightStaysCount;
            allStayApartment = apartmentDiscount * nightStaysCount;
        } else {
            allStayStudio = studio * nightStaysCount;
            allStayApartment = apartment * nightStaysCount;
        }

    } else if (month == "July" || month == "August") {

        studio = 76;
        apartment = 77;
        if (nightStaysCount >= 15) {

            apartmentDiscount = apartment * (90 / 100);
            allStayApartment = apartmentDiscount * nightStaysCount;
        } else {

        allStayApartment = apartment * nightStaysCount;
        }
        
        allStayStudio = studio * nightStaysCount;
    }
    console.log(`Apartment: ${allStayApartment.toFixed(2)} lv.`);
    console.log(`Studio: ${allStayStudio.toFixed(2)} lv.`);
}
hotelRoom(["September", "1"]);