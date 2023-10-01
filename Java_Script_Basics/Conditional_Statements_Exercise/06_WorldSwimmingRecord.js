function wordSwimmingRecord (input) {
    let word_record = Number(input[0]);
    let distance = Number(input[1]);
    let time_per_meter = Number(input[2]);
    let water_delay = ((distance - distance % 15) / 15 )  * 12.5;
    let ivan_time = distance * time_per_meter + water_delay
    if (word_record > ivan_time)
        console.log(`Yes, he succeeded! The new world record is ${ivan_time.toFixed(2)} seconds.`);
    else {
        ivan_time -= word_record;
        console.log(`No, he failed! He was ${ivan_time.toFixed(2)} seconds slower.`);
    }
}

// wordSwimmingRecord (["10464","1500","20"]);
