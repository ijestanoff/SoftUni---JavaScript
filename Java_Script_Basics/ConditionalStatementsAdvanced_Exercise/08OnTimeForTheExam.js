function OnTime (input) {
    let exam_hour = Number(input[0]);
    let exam_min = Number(input[1]);
    let arrive_hour = Number(input[2]);
    let arrive_min = Number(input[3]);

    let exam_time = exam_hour * 60 + exam_min;
    let arrive_time = arrive_hour * 60 + arrive_min;

    const zeroPad = (num, places) => String(num).padStart(places, '0');
    if (arrive_time > exam_time) {
        console.log("Late");
        if (arrive_time - exam_time < 60)
            console.log(`${arrive_time - exam_time} minutes after the start`);
        else {
            let late_hour = Math.trunc((arrive_time - exam_time) / 60);
            let late_min = (arrive_time - exam_time) % 60;
            console.log(`${late_hour}:${zeroPad(late_min,2)} hours after the start`); //02d
        }
    }
    else if  (( (exam_time - arrive_time) >= 0) & ((exam_time - arrive_time) <= 30)) {
        console.log("On time");
        if ((exam_time - arrive_time > 0) & (exam_time - arrive_time < 60))
            console.log(`${exam_time - arrive_time} minutes before the start`);
    }
    else {// after more than 30min
        console.log("Early");
        if (exam_time - arrive_time < 60)
            console.log(`${exam_time - arrive_time} minutes before the start`);
        else {
            let early_hour = Math.trunc((exam_time - arrive_time) / 60);
            let early_min = (exam_time - arrive_time) % 60;
            console.log(`${early_hour}:${zeroPad(early_min,2)} hours before the start`); //02d
        }
    }
}

// OnTime (["9",
// "00",
// "10",
// "30"])
