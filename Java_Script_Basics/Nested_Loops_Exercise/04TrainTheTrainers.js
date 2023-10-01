function trainTheTrainers (input) {
    let total_assessment = Number(input[0]);
    let average_total_assessment = 0;
    let total_presentation = 0;
    let count = 1;
    while (true) {
        let presentation = input[count++];
        if (presentation === "Finish")
            break;
        let average_assessment = 0;
        for (let cnt = 0; cnt < total_assessment; cnt++) {
            let assessment = Number(input[count++]);
            average_assessment += assessment;
        }
        console.log(`${presentation} - ${(average_assessment / total_assessment).toFixed(2)}.`);
        total_presentation += 1;
        average_total_assessment += average_assessment / total_assessment;
    }
    console.log(`Student's final assessment is ${(average_total_assessment / total_presentation).toFixed(2)}.`);
}

trainTheTrainers (["2",
"While-Loop",
"6.00",
"5.50",
"For-Loop",
"5.84",
"5.66",
"Finish"])
