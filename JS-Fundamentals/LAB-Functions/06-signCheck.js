function signCheck(numOne, numTwo, numThree) {

    let combine = (a, b, c) => a * b * c;
    let sum = combine(numOne, numTwo, numThree);
    if (sum < 0) {
        console.log("Negative");
    } else {
        console.log("Positive");
    }
}
signCheck(-5, 1, 1);