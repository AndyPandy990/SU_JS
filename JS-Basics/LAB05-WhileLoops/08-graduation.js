function graduation(input) {
    let index = 0;
    let studentName = input[index];
    index++;

    let averageGrade = 0;
    let badGradesC = 0;
    let excluded = false;
    let year = 1;
    while (year <= 12) {
        let grade = Number(input[index]);
        index++
        
            if (grade < 4.00) {
                badGradesC++;
                if (badGradesC > 1) {
                    excluded = true;
                    console.log(`${studentName} has been excluded at ${year} grade`);
                    break;
                }
                continue;
            }
            averageGrade += grade;
        year++;
    }
        if (!excluded) {
            console.log(`${studentName} graduated. Average grade: ${(averageGrade / 12).toFixed(2)}`);
        }
}
graduation(["Mimi", "5", "6", "5","6", "5", "6", "6", "2", "3"]);