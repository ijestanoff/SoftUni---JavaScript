function workingHours (input) {
    let hour = Number(input[0]);
    let day_of_week = input[1];
    if (((day_of_week === "Monday") | (day_of_week === "Tuesday") | (day_of_week === "Thursday") | (day_of_week === "Wednesday") |
        (day_of_week === "Friday") | (day_of_week === "Saturday")) & (10 <= hour) & (hour < 18))
        console.log("open");
    else
        console.log("closed");
}