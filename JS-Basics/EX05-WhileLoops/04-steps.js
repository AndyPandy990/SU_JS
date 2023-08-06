function steps(input) {
    let targetSteps = 10000;
    let stepSum = 0;
    let index = 0;
    let command = input[index];

    while (command !== "Going home") {
        let steps = Number(command);
        stepSum += steps;

        if(stepSum >= targetSteps) {
            console.log("Goal reached! Good job!");
            console.log(`${stepSum - targetSteps} steps over the goal!`);
            break;
        } 
        index++;
        command = input[index]; 
    }

    if (command === "Going home") {
        let stepsToHome = Number(input[index + 1]);
        stepSum += stepsToHome;

        if (stepSum >= targetSteps) {
            console.log("Goal reached! Good job!");
            console.log(`${stepSum - targetSteps} steps over the goal!`);
        } else {
            console.log(`${targetSteps - stepSum} more steps to make.`)
        }
    } 
}
steps(["125", "250", "4000", "30", "2678", "4682"]);