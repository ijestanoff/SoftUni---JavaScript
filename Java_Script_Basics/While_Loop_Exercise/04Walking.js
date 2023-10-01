function walking (input) {
    let command = "";
    let total_steps = 0;
    let count = 0;
    while ((total_steps < 10_000) && (command != "Going home")) {
        command = input[count++];
        if (command != "Going home")
            total_steps += Number(command);
        else {
            let steps_to_home = Number(input[count++]);
            total_steps += steps_to_home;
        }
    }
    if (total_steps < 10_000) 
        console.log(`${10000 - total_steps} more steps to reach goal.`);
    else {
        console.log("Goal reached! Good job!");
        console.log(`${total_steps - 10000} steps over the goal!`);
    }
}