function bills(input) {
    let month = Number(input[0]);
    let total_electricity = 0;
    let water = 0;
    let internet = 0;
    let other = 0;
    let average = 0;
    for (number=0; number<month; number++){
        let electricity = Number(input[number+1]);
        total_electricity += electricity;
        water += 20;
        internet += 15;
        other += (electricity + 35) * 1.2;
    }
    console.log(`Electricity: ${total_electricity.toFixed(2)} lv`);
    console.log(`Water: ${water.toFixed(2)} lv`);
    console.log(`Internet: ${internet.toFixed(2)} lv`);
    console.log(`Other: ${other.toFixed(2)} lv`);
    average = (total_electricity + water + internet + other) / month;
    console.log(`Average: ${average.toFixed(2)} lv`);
}