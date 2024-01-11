function previousDay(year, month, day) {
    const date = new Date(year, month - 1, day);
    date.setDate(date.getDate() - 1);
    const y = date.getFullYear();
    const d = date.getDate();
    const m = date.getMonth();
    console.log(`${y}-${m + 1}-${d}`);
}

previousDay(2016, 9, 30);
previousDay(2015, 5, 10);
previousDay(2015, 1, 1);

// function daysInAMonth(a, b) {
//     const date = new Date(b, a);
//     date.setDate(date.getDate() - 1);
//     console.log(date.getDate());
// }

// daysInAMonth(1, 2012);
// daysInAMonth(2, 2021);