function bonusScoringSystem (input) {
    let numberOfStudents = Number(input[0]);
    let numberOfLecture = Number(input[1]);
    let addBonus = Number(input[2]);
    if (numberOfStudents == 0 || numberOfLecture == 0) {
        console.log(`Max Bonus: 0.`);
        console.log(`The student has attended 0 lectures.`);
    } else {
        let attendances = [];
        let students = [];
        for (let i = 3; i< 3+numberOfStudents; i++) {
            attendances.push(Number(input[i]));
        }
        for (let attendance of attendances) {
            let totalBonus = attendance / numberOfLecture * (5 + addBonus);
            students.push(totalBonus);
        }
        let maxBonus = students[0];
        let maxIndex = 0;
        for (let i=0; i<students.length; i++) {
            if (students[i] > maxBonus) {
                maxBonus = students[i];
                maxIndex = i;
            }
        }
        console.log(`Max Bonus: ${Math.round(maxBonus)}.`);
        console.log(`The student has attended ${Math.round(attendances[maxIndex])} lectures.`);
    }
}

bonusScoringSystem (['0', '0', '0']);
bonusScoringSystem ([
    '5',  '25', '30',
    '12', '19', '24',
    '16', '20'
  ]
  );
bonusScoringSystem ([
    '10', '30', '14', '8',
    '23', '27', '28', '15',
    '17', '25', '26', '5',
    '18'
  ]
  );