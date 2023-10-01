function dayOfWeek(num) {
    let day = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday']
    if (num < 1 || num >7) console.log("Invalid day!");
    else console.log(day[num-1]);
}

dayOfWeek (6);
dayOfWeek (3);
dayOfWeek (11);