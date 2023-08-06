function schoolGrades(input) {
  function calculateAverage(grades) {
    const sum = grades.reduce((acc, grade) => acc + grade, 0);
    const average = sum / grades.length;
    return average.toFixed(2);
  }

  const studentGradesMap = new Map();

  for (const studentString of input) {
    const [student, ...gradesStr] = studentString.split(" ");
    const grades = gradesStr.map(gradeStr => parseInt(gradeStr));

    if (studentGradesMap.has(student)) {
      const existingGrades = studentGradesMap.get(student);
      const updatedGrades = existingGrades.concat(grades);
      studentGradesMap.set(student, updatedGrades);
    } else {
      studentGradesMap.set(student, grades);
    }
  }

  const sortedStudents = [...studentGradesMap.keys()].sort();
  sortedStudents.forEach(student => {
    const grades = studentGradesMap.get(student);
    const averageGrade = calculateAverage(grades);
    console.log(`${student}: ${averageGrade}`);
  });
}
schoolGrades(['Steven 3 5 6 4',
'George 4 6',
'Tammy 2 5 3',
'Steven 6 3']
);
