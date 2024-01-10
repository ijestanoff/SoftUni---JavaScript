function daysInAMonth(a, b) {
    const date = new Date(b, a);
    date.setDate(date.getDate() - 1);
    console.log(date.getDate());
}

daysInAMonth(1, 2012);
daysInAMonth(2, 2021);