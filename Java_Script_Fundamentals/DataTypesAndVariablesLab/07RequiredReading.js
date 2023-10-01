function requaredReading (pages, pages_per_hour, days_per_book) {
    let total_time = pages / pages_per_hour;
    let hours_per_day = total_time/days_per_book;
    console.log(hours_per_day);
}

requaredReading (212, 20 , 2);