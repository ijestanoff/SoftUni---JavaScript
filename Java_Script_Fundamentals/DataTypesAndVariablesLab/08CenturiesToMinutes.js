function centuriesToMinutes (centures) {
    let years = centures * 100;
    let days = Math.floor(years * 365.2422);
    let hours = days * 24;
    let minutes = hours * 60;
    console.log(`${centures} centuries = ${years} years = ${days} days = ${hours} hours = ${minutes} minutes`);
}

centuriesToMinutes (5);