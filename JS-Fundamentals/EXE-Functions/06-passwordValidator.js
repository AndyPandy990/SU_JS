function passVal(pass) {
    let isValidPass = true;
    let isInvalidLength = pass.length < 6 || pass.length > 10;

    if (isInvalidLength) {
        isValidPass = false;
        console.log("Password must be between 6 and 10 characters");
    }

    let isOnlyLettersAndDigits = true;
    let digitsCount = 0;
    

    for (let i = 0; i < pass.length; i++) {
        let currCode = pass.charCodeAt(i);
        let isNotNum = currCode < 48 || currCode > 57;
        let isNum = currCode >= 48 && currCode <= 57;
        let isNotSmallLetter = currCode < 97 || currCode > 122;
        let isNotCapitalLetter = currCode < 65 || currCode > 90;

        if (isNum) {
            digitsCount++;
        }

        if (isNotNum && isNotSmallLetter && isNotCapitalLetter) {
            isValidPass = false;
            isOnlyLettersAndDigits = false;
        }
    }

    if (!isOnlyLettersAndDigits) {
        console.log("Password must consist only of letters and digits");
    }

    if (!(digitsCount >= 2)) {
        isValidPass = false;
        console.log("Password must have at least 2 digits");
    }

    if (isValidPass) {
        console.log("Password is valid");
    }
}
passVal("Picture");