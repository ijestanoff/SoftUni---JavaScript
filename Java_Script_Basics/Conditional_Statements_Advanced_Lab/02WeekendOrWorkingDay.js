function weekendOrWorkingDay (input) {
    let day_of_week = input[0]
    if ((day_of_week === "Monday") | (day_of_week === "Tuesday") | (day_of_week === "Wednesday") | (day_of_week === "Thursday") | (day_of_week === "Friday"))
        console.log("Working day");
    else if ((day_of_week === "Saturday") | (day_of_week === "Sunday"))
        console.log("Weekend");
    else
        console.log("Error");
}