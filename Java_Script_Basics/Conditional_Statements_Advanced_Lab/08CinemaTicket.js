function cinemaTicket(input) {
    let day_of_week = input[0];
    let price = 0;
    if ((day_of_week === "Monday") | (day_of_week === "Tuesday") | (day_of_week === "Friday"))
        price = 12;
    else if ((day_of_week === "Wednesday") | (day_of_week === "Thursday"))
        price = 14;
    else if ((day_of_week === "Saturday") | (day_of_week === "Sunday"))
        price = 16;
    console.log(price);
}