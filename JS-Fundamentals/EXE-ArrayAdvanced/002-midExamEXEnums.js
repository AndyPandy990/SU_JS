function numbers(arr) {
    let sequence = arr[0].split(" ").map(Number);
    let commands = arr.slice(1);
    let i = 0;

    while (i <commands.length) {
        let command = commands[i];

        if (command.startsWith("Add")) {
            let value = Number(command.split(" ")[1]);
            sequence.push(value);
        } else if (command.startsWith("Remove")) {
            let value = Number(command.split(" ")[1]);
            let index = sequence.indexOf(value);
            if (index !== -1) {
                sequence.splice(index, 1);
            }
        } else if (command.startsWith("Replace")) {
            let [value, replacement] = command.split(" ").slice(1).map(Number);
            let index = sequence.indexOf(value);
            if (index !== -1) {
                sequence[index] = replacement;            }
        } else if (command.startsWith("Collapse")) {
            let value = Number(command.split(" ")[1]);
            sequence = sequence.filter(num => num >= value);
        } else if (command === "Finish") {
            break;
        }
        i++;
    }
    console.log(sequence.join(" "));
}
numbers(["5 9 70 -56 9 9", "Replace 9 10", "Remove 9", "Finish"]);