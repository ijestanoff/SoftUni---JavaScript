function time15Minutes (input) {
    let init_hours = Number(input[0]);
    let init_minutes = Number(input[1]);
    let total_minutes = init_hours * 60 + init_minutes;
    let total_new_minutes = total_minutes + 15;
    let new_hours = (total_new_minutes - total_new_minutes % 60) / 60;
    if (new_hours >= 24) 
        new_hours -= 24
    let new_minutes = total_new_minutes % 60;
    if (new_minutes < 10)
        console.log(`${new_hours}:0${new_minutes}`);
    else
        console.log(`${new_hours}:${new_minutes}`);
}

// time15Minutes (["1", "46"]);