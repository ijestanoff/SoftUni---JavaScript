function schoolRegister(input) {
    let students = [];
    for (let part of input) {
        let items = part.split(', ');
        let name = items[0].split('Student name: ')[1];
        let grade = Number(items[1].split('Grade: ')[1]);
        let average = Number(items[2].split('Graduated with an average score: ')[1]);
        if (average >= 3) students.push({ name, grade: grade + 1, average });
    }
    students.sort((a, b) => a.grade - b.grade);

    for (let schoolClass = 2; schoolClass < 14; schoolClass++) {
        let currentClass = students.filter(obj => obj.grade == schoolClass);
        if (!currentClass.length) continue;
        let averageScore = 0;
        let output = '';
        let count = 0;
        output = `${currentClass[0].grade} Grade\nList of students: `;
        for (let i = 0; i < currentClass.length; i++) {
            count++;
            averageScore += currentClass[i].average;
            output += `${currentClass[i].name}`
            if (i < currentClass.length - 1) output += ', ';
        }
        output += `\nAverage annual score from last year: ${(averageScore / count).toFixed(2)}\n`
        console.log(output);
    }
}

schoolRegister(["Student name: Mark, Grade: 8, Graduated with an average score: 4.75",
    "Student name: Ethan, Grade: 9, Graduated with an average score: 5.66",
    "Student name: George, Grade: 8, Graduated with an average score: 2.83",
    "Student name: Steven, Grade: 10, Graduated with an average score: 4.20",
    "Student name: Joey, Grade: 9, Graduated with an average score: 4.90",
    "Student name: Angus, Grade: 11, Graduated with an average score: 2.90",
    "Student name: Bob, Grade: 11, Graduated with an average score: 5.15",
    "Student name: Daryl, Grade: 8, Graduated with an average score: 5.95",
    "Student name: Bill, Grade: 9, Graduated with an average score: 6.00",
    "Student name: Philip, Grade: 10, Graduated with an average score: 5.05",
    "Student name: Peter, Grade: 11, Graduated with an average score: 4.88",
    "Student name: Gavin, Grade: 10, Graduated with an average score: 4.00"]);
// schoolRegister(['Student name: George, Grade: 5, Graduated with an average score: 2.75',
//     'Student name: Alex, Grade: 9, Graduated with an average score: 3.66',
//     'Student name: Peter, Grade: 8, Graduated with an average score: 2.83',
//     'Student name: Boby, Grade: 5, Graduated with an average score: 4.20',
//     'Student name: John, Grade: 9, Graduated with an average score: 2.90',
//     'Student name: Steven, Grade: 2, Graduated with an average score: 4.90',
//     'Student name: Darsy, Grade: 1, Graduated with an average score: 5.15']);