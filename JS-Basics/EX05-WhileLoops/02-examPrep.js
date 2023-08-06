function examPreparation(input) {
    let index = 0;
    let negativeGradeCounter = Number(input[index]);
    index++;
    
    let command = input[index];
    index++;
    
    let negativeCounter = 0;
    let gradeCounter = 0;
    let sumGrade = 0;
    let isNeedBreak = false;
    let taskName = "";
    
    while (command !== "Enough") {
        taskName = command;
        let grade = Number(input[index]);
        index++;
        
        if(grade <= 4) {
            negativeCounter++;
            if (negativeGradeCounter <= negativeCounter) {
                isNeedBreak = true;
                break;
            }
        }
        
        gradeCounter++;
        sumGrade += grade;
        
        command = input[index];
        index++;
    }
    
    if (isNeedBreak) {
        console.log(`You need a break, ${negativeCounter} poor grades.`);
    } else {
        let avgGrade = sumGrade / gradeCounter;
        console.log(`Average score: ${avgGrade.toFixed(2)}`);
        console.log(`Number of problems: ${gradeCounter}`);
        console.log(`Last problem: ${taskName}`);
    }
}
examPreparation(["3",
"Money",
"6",
"Story",
"4",
"Spring Time",
"5",
"Bus",
"6",
"Enough"]);