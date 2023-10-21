function lift(inputArray) {
    let peoples = Number(inputArray.shift());
    let wagons = inputArray.pop().split(" ").map(Number);
    for (let i = 0; i < wagons.length; i++) {
        let curWagon = wagons[i];
        for (let j = 1; j <= 4; j++) {
            if (curWagon == 4) {
                break;
            }
            if (peoples == 0) {
                wagons.splice(i, 1, curWagon);
                console.log("The lift has empty spots!");
                console.log(`${wagons.join(" ")}`);
                return;
            }
            peoples--;
            curWagon++;
        }
        wagons.splice(i, 1, curWagon);
    }
    if (peoples) console.log(`There isn't enough space! ${peoples} people in a queue!`);
    console.log(`${wagons.join(" ")}`);
}

lift ([
    "20",
    "0 0 0 0 0"
   ]
   );