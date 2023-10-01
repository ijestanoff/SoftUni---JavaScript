function footballLeague(input) {
    let stadium_capacity = Number(input[0]);
    let total_fans = Number(input[1]);
    let sector_a = 0;
    let sector_b = 0;
    let sector_v = 0;
    let sector_g = 0;
    for (let number=0; number <total_fans; number++){
        let fan_sector = input[number+2];
        if (fan_sector == "A")
            sector_a ++;
        else if (fan_sector == "B")
            sector_b ++;
        else if (fan_sector == "V")
            sector_v ++;
        else if (fan_sector == "G")
            sector_g ++;
    }
    console.log(`${(sector_a / total_fans * 100).toFixed(2)}%`);
    console.log(`${(sector_b / total_fans * 100).toFixed(2)}%`);
    console.log(`${(sector_v / total_fans * 100).toFixed(2)}%`);
    console.log(`${(sector_g / total_fans * 100).toFixed(2)}%`);
    console.log(`${(total_fans / stadium_capacity * 100).toFixed(2)}%`);
}