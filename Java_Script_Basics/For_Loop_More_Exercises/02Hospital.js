function hospital (input) {
    let calculation_period = Number(input[0]);
    let doctors = 7;
    let treated_patients = 0;
    let untreated_patients = 0;
    let count=1;
    for (day=0; day< calculation_period;day++) {
        let patients = Number(input[count++]);
        if ((day+1) % 3 == 0)
            if (untreated_patients > treated_patients)
                doctors += 1;
        if (patients > doctors) {
            treated_patients += doctors;
            untreated_patients += patients - doctors;
        }
        else
            treated_patients += patients;
    }
    console.log(`Treated patients: ${treated_patients}.`);
    console.log(`Untreated patients: ${untreated_patients}.`);
}