function examPreparation (input) {
    let bad_rating_number = Number(input[0]);
    let total_rating = 0;
    let number_rating = 0;
    let current_bad_rating = 0;
    let last_name ="";
    let count = 1;
    while (true) {
        let exam_name = input[count++];
        if (exam_name == "Enough") {
            console.log(`Average score: ${(total_rating / number_rating).toFixed(2)}`);
            console.log(`Number of problems: ${number_rating}`);
            console.log(`Last problem: ${last_name}`);
            break;
        } else {
            last_name = exam_name;
            let exam_rating = Number(input[count++]);
            total_rating += exam_rating;
            number_rating += 1;
            if (exam_rating <= 4) {
                current_bad_rating += 1;
                if (current_bad_rating == bad_rating_number) {
                    console.log(`You need a break, ${current_bad_rating} poor grades.`);
                    break;
                }
            }
        }
    }
}