function password(input) {
    let index = 0;

    let name = input[index];
    index++;
    let password = input[index];

    let temPassword = input[index];
    index++;

    while(temPassword !== password) {
        temPassword = input[index];
        index++;
    }
    console.log(`Welcome ${name}!`);
}
password(["Nakov",
        "1234",
        "Pass",
        "1324",
        "1234"]);