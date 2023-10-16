function formatGrade (input) {
//   < 3.00 - "Fail"
// • >= 3.00 and < 3.50 - "Poor"
// • >= 3.50 and < 4.50 - "Good"
// • >= 4.50 and < 5.50 - "Very good"
// • >= 5.50 - "Excellent"
    let grade = Number(input);
    if (grade < 3) console.log('Fail (2)');
    else if (grade < 3.5) console.log(`Poor (${grade})`);
    else if (grade < 4.5) console.log(`Good (${grade})`);
    else if (grade < 5.5) console.log(`Very good (${grade})`);
    else console.log(`Excellent (${grade})`);
}

formatGrade ('3.33');
formatGrade ('4.50');
formatGrade ('2.99');