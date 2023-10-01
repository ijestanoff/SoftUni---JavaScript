function nextDay(year, month, day) {
    const specificDate = new Date(year, month - 1, day);
    specificDate.setDate(specificDate.getDate() + 1);
    const year_ = specificDate.getFullYear();
    const month_ = specificDate.getMonth(); // Month is 0-based (0 for January, 1 for February, etc.)
    const day_ = specificDate.getDate();
    console.log(`${year_}-${month_+1}-${day_}`);
}

nextDay (2016, 9, 30);