function graduation (input) {
    let students_name = input[0];
    let students_class = 1;
    let class_repeat = 0;
    let students_rating = 0;
    let total_rating = 0;
    let count = 1;
    while (students_class < 13) {
        students_rating = Number(input[count++]);
        if (students_rating >= 4) {
            students_class += 1;
            class_repeat = 0;
            total_rating += students_rating;
        } else {
            if (class_repeat == 1) {
                console.log(`${students_name} has been excluded at ${students_class} grade`);
                break;
            }
            class_repeat = 1;
        }
    }
    if (students_class == 13)
        console.log(`${students_name} graduated. Average grade: ${(total_rating / 12).toFixed(2)}`); 
}