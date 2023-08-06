function triangleOfNumbers(pyramid) {
    let spaceLine = "";

    for (let rows = 1; rows <= pyramid; rows++) {
        for (let cols = 1; cols <= rows; cols++) {
            spaceLine += `${rows} `;
        }
        console.log(spaceLine);
        spaceLine = "";
    }
}
triangleOfNumbers(10);