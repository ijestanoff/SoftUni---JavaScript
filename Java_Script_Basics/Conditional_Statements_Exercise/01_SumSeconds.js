function sumSeconds (input) {
    let first_runner = Number(input[0]);
    let second_runner = Number(input[1]);
    let third_runner = Number(input[2]);
    let total_time = first_runner + second_runner + third_runner;
    let total_minutes = (total_time - total_time % 60) / 60;
    let total_seconds = total_time % 60;
    if (total_seconds < 10)
        console.log(`${total_minutes}:0${total_seconds}`);
    else
        console.log(`${total_minutes}:${total_seconds}`);
}

// sumSeconds (["35","45","44"]);
