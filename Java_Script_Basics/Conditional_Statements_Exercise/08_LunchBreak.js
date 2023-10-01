function lunchBreak (input) {
    let serial_name = input[0];
    let episode_time = Number(input[1]);
    let pause_time = Number(input[2]);
    let launch_time = pause_time / 8;
    let relax_time = pause_time / 4;
    let time_left = pause_time - (launch_time + relax_time);
    if (time_left >= episode_time) {
        time_left -= episode_time;
        console.log(`You have enough time to watch ${serial_name} and left with ${Math.ceil(time_left)} minutes free time.`);
    }
    else {
        episode_time -= time_left;
        console.log(`You don't have enough time to watch ${serial_name}, you need ${Math.ceil(episode_time)} more minutes.`);
    }
}